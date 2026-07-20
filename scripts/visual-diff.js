#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { readFileSync, writeFileSync } from 'fs';

function usage() {
  console.error('Usage: node scripts/visual-diff.js <original.html> <refactored.html>');
  process.exit(2);
}

if (process.argv.length < 4) usage();
const aPath = process.argv[2];
const bPath = process.argv[3];

async function screenshot(filePath, outName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const fileUrl = new URL(filePath, `file://${process.cwd()}/`).href;
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 }).catch(() => {});
  await new Promise(res => setTimeout(res, 300));
  const buf = await page.screenshot({ fullPage: true });
  await browser.close();
  writeFileSync(outName, buf);
  return outName;
}

function compare(aImgPath, bImgPath, outDiff) {
  const imgA = PNG.sync.read(readFileSync(aImgPath));
  const imgB = PNG.sync.read(readFileSync(bImgPath));
  const width = Math.max(imgA.width, imgB.width);
  const height = Math.max(imgA.height, imgB.height);
  const a = new PNG({ width, height });
  const b = new PNG({ width, height });
  // copy into canvases
  PNG.bitblt(imgA, a, 0, 0, imgA.width, imgA.height, 0, 0);
  PNG.bitblt(imgB, b, 0, 0, imgB.width, imgB.height, 0, 0);
  const diff = new PNG({ width, height });
  const numDiff = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.12 });
  writeFileSync(outDiff, PNG.sync.write(diff));
  return numDiff;
}

(async () => {
  console.log('Taking screenshots...');
  const aImg = await screenshot(aPath, '.visual_a.png');
  const bImg = await screenshot(bPath, '.visual_b.png');
  console.log('Comparing images...');
  const diffs = compare(aImg, bImg, '.visual_diff.png');
  console.log(`Differing pixels: ${diffs}`);
  console.log('Saved: .visual_a.png, .visual_b.png, .visual_diff.png');
})();
