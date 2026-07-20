#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { readFileSync, writeFileSync } from 'fs';

function usage() {
  console.error('Usage: node scripts/visual-diff-zoned.js <original.html> <refactored.html> <preset>');
  console.error('Presets: ignore-header-footer | focus-charts');
  process.exit(2);
}

if (process.argv.length < 5) {
usage();
}
const aPath = process.argv[2];
const bPath = process.argv[3];
const preset = process.argv[4];

async function capture(pageUrl, outPng, collectCharts = false) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const base = process.env.BASE_URL || `file://${process.cwd()}/`;
  await page.goto(new URL(pageUrl, base).href, { waitUntil: 'networkidle0', timeout: 30000 }).catch(() => {});
  await new Promise(res => setTimeout(res, 300));
  let charts = [];
  if (collectCharts) {
    // try clicking common render-chart triggers to ensure canvases are painted
    await page.evaluate(() => {
      const clickSelectors = ['#render-chart-button', 'button#render-chart', '.render-chart', '[data-action="render-chart"]', 'button[aria-label*="chart"]'];
      for (const s of clickSelectors) {
        const el = document.querySelector(s);
        if (el && typeof el.click === 'function') {
          try {
            el.click();
          } catch (_e) {
            // ignore click errors
          }
        }
      }
    }).catch(() => {});
    await new Promise(res => setTimeout(res, 500));
    charts = await page.evaluate(() => {
      const out = [];
      const canvases = Array.from(document.querySelectorAll('canvas'));
      if (canvases.length) {
        canvases.forEach(n => {
          const r = n.getBoundingClientRect();
          out.push({ x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) });
        });
        return out;
      }
      // fallback selectors
      const selectors = ['#maturityRadar', '#adoptionChart', '[data-chart]', '.chart', 'svg'];
      for (const sel of selectors) {
        const nodes = Array.from(document.querySelectorAll(sel));
        if (nodes.length) {
          nodes.forEach(n => {
            const r = n.getBoundingClientRect();
            out.push({ x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) });
          });
          return out;
        }
      }
      return out;
    });
  }
  const buf = await page.screenshot({ fullPage: true });
  await browser.close();
  writeFileSync(outPng, buf);
  return { outPng, charts };
}

function applyIgnoreZone(png, zones) {
  for (const z of zones) {
    const x0 = Math.max(0, Math.floor(z.x || 0));
    const y0 = Math.max(0, Math.floor(z.y || 0));
    const x1 = Math.min(png.width, Math.ceil((z.x || 0) + (z.width || png.width)));
    const y1 = Math.min(png.height, Math.ceil((z.y || 0) + (z.height || png.height)));
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        const idx = (png.width * y + x) << 2;
        // set to transparent black so both images equal in ignored zones
        png.data[idx] = 0;
        png.data[idx + 1] = 0;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 0;
      }
    }
  }
}

function cropAndCompare(aImgPath, bImgPath, outDiff, region) {
  const imgA = PNG.sync.read(readFileSync(aImgPath));
  const imgB = PNG.sync.read(readFileSync(bImgPath));
  const x = region.x, y = region.y, w = region.width, h = region.height;
  const aCrop = new PNG({ width: w, height: h });
  const bCrop = new PNG({ width: w, height: h });
  PNG.bitblt(imgA, aCrop, x, y, w, h, 0, 0);
  PNG.bitblt(imgB, bCrop, x, y, w, h, 0, 0);
  const diff = new PNG({ width: w, height: h });
  const num = pixelmatch(aCrop.data, bCrop.data, diff.data, w, h, { threshold: 0.12 });
  writeFileSync(outDiff, PNG.sync.write(diff));
  return num;
}

(async () => {
  console.log('Running zoned visual diff preset:', preset);
  const collectCharts = preset === 'focus-charts';
  const a = await capture(aPath, '.zonal_a.png', collectCharts);
  const b = await capture(bPath, '.zonal_b.png', collectCharts);

  const imgA = PNG.sync.read(readFileSync('.zonal_a.png'));
  const imgB = PNG.sync.read(readFileSync('.zonal_b.png'));

  if (preset === 'ignore-header-footer') {
    // define header/footer heights heuristically
    const headerH = Math.round(Math.min(200, imgA.height * 0.12));
    const footerH = Math.round(Math.min(160, imgA.height * 0.10));
    const width = Math.max(imgA.width, imgB.width);
    const height = Math.max(imgA.height, imgB.height);
    const aNorm = new PNG({ width, height });
    const bNorm = new PNG({ width, height });
    PNG.bitblt(imgA, aNorm, 0, 0, imgA.width, imgA.height, 0, 0);
    PNG.bitblt(imgB, bNorm, 0, 0, imgB.width, imgB.height, 0, 0);
    applyIgnoreZone(aNorm, [{ x: 0, y: 0, width: aNorm.width, height: headerH }, { x: 0, y: aNorm.height - footerH, width: aNorm.width, height: footerH }]);
    applyIgnoreZone(bNorm, [{ x: 0, y: 0, width: bNorm.width, height: headerH }, { x: 0, y: bNorm.height - footerH, width: bNorm.width, height: footerH }]);
    const diff = new PNG({ width, height });
    const num = pixelmatch(aNorm.data, bNorm.data, diff.data, width, height, { threshold: 0.12 });
    writeFileSync('.zonal_diff.png', PNG.sync.write(diff));
    console.log('Differing pixels (header/footer ignored):', num);
    console.log('Saved .zonal_a.png .zonal_b.png .zonal_diff.png');
    return;
  }

  if (preset === 'focus-charts') {
    // use captured chart bounding boxes; compare each matching index
    const chartsA = a.charts || [];
    const chartsB = b.charts || [];
    if (chartsA.length === 0 || chartsB.length === 0) {
      console.log('No canvases found on one or both pages; aborting focus-charts.');
      return;
    }
    const count = Math.min(chartsA.length, chartsB.length);
    let totalDiff = 0;
    for (let i = 0; i < count; i++) {
      const ra = chartsA[i];
      const rb = chartsB[i];
      // take union region
      const x = Math.max(0, Math.min(ra.x, rb.x));
      const y = Math.max(0, Math.min(ra.y, rb.y));
      const x2 = Math.min(Math.max(ra.x + ra.width, rb.x + rb.width), imgA.width);
      const y2 = Math.min(Math.max(ra.y + ra.height, rb.y + rb.height), imgA.height);
      const w = Math.max(1, x2 - x);
      const h = Math.max(1, y2 - y);
      const out = `.zonal_chart_${i}_diff.png`;
      const num = cropAndCompare('.zonal_a.png', '.zonal_b.png', out, { x, y, width: w, height: h });
      console.log(`Chart ${i} differing pixels:`, num, '=>', out);
      totalDiff += num;
    }
    console.log('Total differing pixels (charts):', totalDiff);
    return;
  }

  console.error('Unknown preset:', preset);
})();
