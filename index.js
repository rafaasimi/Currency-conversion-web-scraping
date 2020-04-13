const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('=== CONVERSOR DE MOEDAS ===');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
  const qualquerURL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}`;
  await page.goto(qualquerURL);
  // await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

  await browser.close();

}

robo();