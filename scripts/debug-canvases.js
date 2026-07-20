const puppeteer = require('puppeteer');
const path = require('path');

async function inspect(file) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'file://' + path.resolve(file);
  console.log('Loading', url);
  await page.goto(url, { waitUntil: 'networkidle0' });
  const canvases = await page.$$eval('canvas', nodes => nodes.map(n => ({ id: n.id, width: n.width, height: n.height, outerHTML: n.outerHTML }))).catch(()=>[]);
  const fallback = await page.evaluate(() => {
    const selectors = ['#maturityRadar', '#adoptionChart', '[data-chart]', '.chart', 'svg', 'canvas'];
    const found = {};
    for (const s of selectors) {
      const nodes = Array.from(document.querySelectorAll(s));
      found[s] = nodes.map(n => ({ tag: n.tagName, id: n.id, class: n.className }));
    }
    return found;
  }).catch(()=>null);
  console.log('Canvases:', canvases.length);
  console.dir(canvases, { depth: 2 });
  console.log('Fallback map:');
  console.dir(fallback, { depth: 2 });
  await browser.close();
}

(async ()=>{
  await inspect('legacy/Change Maturity Assessment Tool V5.20.html');
  await inspect('refactored/Refactored-Maturity-V5.html');
})();
