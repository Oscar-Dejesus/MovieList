const { title } = require('process');
const puppeteer = require('puppeteer');

async function getTitles(){
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

 // Set a User-Agent to avoid detection issues
 await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.97 Safari/537.36');

  // Navigate to the page and wait for it to load
  await page.goto("https://www.netflix.com");

  // Wait for the title element to be available and visible
  await page.waitForSelector("div.default-ltr-cache-3xjlkv.e1rogofe1");

  // Extract the title using $eval
  const title = await page.$$eval("div.default-ltr-cache-3xjlkv.e1rogofe1", (el) =>  el.map((element) => element.textContent.trim()));
                                                                                  
  console.log('Movie Title:', title);

  // Close the browser
  await browser.close();
  return title
};
module.exports= {
  getTitles
}