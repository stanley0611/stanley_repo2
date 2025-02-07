// const {test,expect} = require ('@playwright/test')

// test("Sample test", async({page}) =>{
//     await page.goto("https://www.cleartrip.com/")
//     //await page.getByTestId('loginPopup').click(close);
//    await page.pause()
//    const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://www.cleartrip.com/');
//   await page.getByTestId('loginPopup').click();
//   await page.getByTestId('closeIcon').click();
//   await page.getByText('Fri, Feb').click();
//   await page.getByLabel('Mon Feb 10').getByText('10-').click();
//   await page.getByTestId('dateSelectReturn').click();
//   await page.getByLabel('Sat Feb 15').getByText('15').click();
//   await page.getByPlaceholder('Where from?').click();
//   await page.getByText('MAAChennai, IN - Chennai').click();
//   await page.getByPlaceholder('Where to?').click();
//   await page.getByText('Goa, IN - Dabolim Airport (').click();
//   await page.getByRole('button', { name: 'Search flights' }).click();
// <input class="w-100p fs-16 fw-500 c-neutral-900" style="border:none" placeholder="Where from?" value=""></input>
//   // ---------------------
//   await context.close();
//   await browser.close();
// })();
// })
// const{test,expect,} = require ('@playwright/test')
// const{chromium} = require('@playwright/test')

// test("NewTest", async() => {
//     const browser = await chromium.launch({headless:false});
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://www.cleartrip.com/");
//     await page.pause()
//     await page.getByTestId('loginPopup').click();
//     await page.getByTestId('closeIcon').click();
// //   await page.getByTestId('closeIcon').click();
//     // context.on('page', async(popup) => {
//     //     await popup.waitForLoadState();
//     //     await popup.close()
//     // })
//     await page.locator('input[placeholder="Where from?"]').fill("Chennai");
//     await page.locator('input[placeholder="Where to?"]').fill("Bangkok");

//<span class="fw-500 fs-4 ml-2" style="line-height:24px">One way</span>
// })

//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.cleartrip.com/');
//   await page.getByTestId('closeIcon').click();
//   await page.locator('#__next div.main > div:nth-child(2) > div:first-child').click();
//   //await page.selectOption('One way','Round trip').click();
//   //await page.getByText('Round trip').click();


//   //*[@id="__next"]/div/main/div/div/div[2]/div[1]/div[1]/div/div[1]/div[2]/div/div[1]/div[1]/div/div/div/div/div

//   //#__next > div > main > div > div > div.sc-aXZVg.ifGglg.col-19.pl-2.pr-2 > div.sc-aXZVg.kbqZVS.row > div.sc-aXZVg.eesuEu.col-17.pl-2.pr-2 > div > div:nth-child(1) > div.sc-aXZVg.lmnVX.sc-bb129201-0.gJSAyd.ba-solid.bc-line-500.br-12.bg-neutral-100.p-relative > div > div.sc-aXZVg.bXaAWc.flex.flex-middle.w-100p > div.sc-aXZVg.XXBOR > div > div > div.bg-neutral-100.br-12.p-absolute.z-50.w-100p.l-0.t-48.py-2 > li:nth-child(2) > div > p
 
//   //await page.getByText('Economy', { exact: true }).click();
//  // await page.locator('div:nth-child(2) > div > div > div > div > div:nth-child(2) > div').first().click();
//  // await page.locator('div:nth-child(2) > div > div > div > div > div:nth-child(2) > div').first().click();
//   await page.getByPlaceholder('Where from?').click();
//   await page.getByText('MAAChennai, IN - Chennai').click();
//   await page.getByPlaceholder('Where to?').click();
//   await page.getByPlaceholder('Where to?').fill('bang');
//   await page.getByText('Bangkok, TH - Suvarnabhumi (').click();
//   await page.getByTestId('dateSelectOnward').click();
//   await page.getByLabel('Mon Feb 10').getByText('11943').click();
//   await page.getByTestId('dateSelectReturn').getByText('Mon, Feb').click();
//   await page.getByTestId('dateSelectReturn').click();
//   await page.getByText('1523308').click();
//   await page.getByRole('button', { name: 'Search flights' }).click();
// });




// const {test,expect} = require ('@playwright/test')
// test.only('test', async ({ page }) => {
//   await page.goto('https://www.cleartrip.com/');
//   await page.getByTestId('closeIcon').locator('path').click();
//   await page.getByText('One way').click({select:'Round trip'});
//   //await page.getByText('Round trip').click();
//   await page.getByTestId('paxClassContainerId').getByRole('img').nth(1).click();
//   await page.locator('div').filter({ hasText: /^1$/ }).getByRole('button').nth(1).click();
//   await page.getByText('Business class').click();
// //   await page.locator('div:nth-child(2) > div > div > div > div > div:nth-child(2) > div').first().click();
// //   await page.locator('div:nth-child(2) > div > div > div > div > div:nth-child(2) > div').first().click();
//   await page.getByText('Business class', { exact: true }).click();
//   await page.locator('div:nth-child(2) > div > div > div > div > div:nth-child(2) > div').first().click();
//   await page.getByTestId('paxClassContainerId').getByRole('img').nth(1).click();
//   await page.getByPlaceholder('Where from?').click();
//   await page.getByText('BLRBangalore, IN - Kempegowda').click();
//   await page.locator('.field-2').click();
//   await page.getByText('BOMMumbai, IN - Chatrapati').click();
//   await page.getByRole('button', { name: 'Search flights' }).click();
// });


const { test, expect } = require('@playwright/test');

test.only('test', async ({ page }) => {
  // Navigate to the Cleartrip website
  await page.goto('https://www.cleartrip.com/');

  // Close the popup
  await page.getByTestId('closeIcon').click();

  // Select the trip type - Round Trip
  await page.getByText('One way').click(); 
  await page.getByText('Round trip').click();

  // Select number of passengers
  await page.getByTestId('paxClassContainerId').click();
  await page.locator('div').filter({ hasText: '1' }).getByRole('button', { name: 'Add Adult' }).click();

  // Select business class
  await page.getByText('Business class', { exact: true }).click();

  // Fill in departure and destination
  await page.getByPlaceholder('Where from?').click();
  await page.getByText('BLRBangalore, IN - Kempegowda').click();  // Select 'Bangalore'

  await page.getByPlaceholder('Where to?').click();
  await page.getByText('BOMMumbai, IN - Chatrapati').click();  // Select 'Mumbai'

  // Click on Search Flights
  await page.getByRole('button', { name: 'Search flights' }).click();
});
