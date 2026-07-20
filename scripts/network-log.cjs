const puppeteer = require('puppeteer');

(async ()=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  page.on('requestfailed', req => console.log('REQUEST FAILED:', req.url(), req.failure().errorText));
  page.on('requestfinished', async req => {
    try {
      const res = req.response();
      if (res && res.status() >= 400) console.log('BAD STATUS', res.status(), req.url());
    } catch(e) {}
  });
  const url = 'http://localhost:5173/refactored/Refactored-Maturity-V5.html';
  console.log('Visiting', url);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 }).catch(()=>{});
  await new Promise(r => setTimeout(r, 1000));
  await browser.close();
})();
