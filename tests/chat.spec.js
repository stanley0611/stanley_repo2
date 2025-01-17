// const{test,expect} = require('@playwright/test')
// const { chromium } = require('playwright');


// test('test sample', async ({}) => {
//     const browser = await chromium.launch({
//             headless: false
//           });
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://strategy.ai/');
//     await page.locator('#hs-eu-header-container').click();
//     await page.getByLabel('Dismiss cookie banner').click();
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('link', { name: 'Sign In' }).click();
//     const page1 = await page1Promise;
//     await page1.locator('input[name="email"]').click();
//     await page1.locator('input[name="email"]').fill('stanley.s@strategy.ai');
//     await page1.locator('input[name="email"]').press('Tab');
//     await page1.locator('input[type="password"]').fill('Test@123');
//     await page1.getByRole('button', { name: 'Sign In' }).click();
    
//     await page1.goto('https://app.strategy.ai/strategy-chat/dashboard');
    
//     await page1.locator('button').filter({ hasText: 'close' }).click();
//     await page1.locator('div:nth-child(2) > .col-sm-12 > .q-card > div > div > .q-img > .q-img__container > .q-img__image').click();
//     await page1.locator('button').filter({ hasText: 'close' }).click();
//     await page1.getByRole('button', { name: 'Enter Chat' }).click();
//     await page1.locator('button').filter({ hasText: 'close' }).click();

//     await context.close();
//     await browser.close();



  
// }

// );


// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://strategy.ai/');
//   await page.locator('#hs-eu-header-container').click();
//   await page.getByLabel('Dismiss cookie banner').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Sign In' }).click();
//   const page1 = await page1Promise;
//   await page1.locator('input[name="email"]').click();
//   await page1.locator('input[name="email"]').fill('stanley.s@strategy.ai');
//   await page1.locator('input[name="email"]').press('Tab');
//   await page1.locator('input[type="password"]').fill('Test@123');
//   await page1.getByRole('button', { name: 'Sign In' }).click();
//   await page1.goto('https://app.strategy.ai/strategy-chat/dashboard');
//   await page1.locator('button').filter({ hasText: 'close' }).click();
//   await page1.locator('div:nth-child(2) > .col-sm-12 > .q-card > div > div > .q-img > .q-img__container > .q-img__image').click();
//   await page1.locator('button').filter({ hasText: 'close' }).click();
//   await page1.getByRole('button', { name: 'Enter Chat' }).click();
//   await page1.locator('button').filter({ hasText: 'close' }).click();

//   // ---------------------
//   await context.close();
//   await browser.close();
// })();



const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('test sample', async ({}) => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://strategy.ai/');
  await page.locator('#hs-eu-header-container').click();
  await page.getByLabel('Dismiss cookie banner').click();

  // Wait for popup when clicking on "Sign In"
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign In' }).click();
  const page1 = await page1Promise;

  await page1.locator('input[name="email"]').click();
  await page1.locator('input[name="email"]').fill('stanley.s@strategy.ai');
  await page1.locator('input[name="email"]').press('Tab');
  await page1.locator('input[type="password"]').fill('Test@123');

  // Wait for the network request after clicking "Sign In"
  const [response] = await Promise.all([
    page1.waitForResponse((response) => response.url().includes('/login') && response.status() === 200),
    page1.getByRole('button', { name: 'Sign In' }).click(),
  ]);

  // Ensure response is successful before navigating further
  expect(response.status()).toBe(200);

  // Now, ensure the page has loaded after sign-in (since it should navigate to the dashboard automatically)
  await page1.waitForURL('https://app.strategy.ai/strategy-chat/dashboard');

  // Continue your other actions
  await page1.locator('button').filter({ hasText: 'close' }).click();
  await page1.locator('div:nth-child(2) > .col-sm-12 > .q-card > div > div > .q-img > .q-img__container > .q-img__image').click();
  await page1.locator('button').filter({ hasText: 'close' }).click();
  await page1.getByRole('button', { name: 'Enter Chat' }).click();
  await page1.locator('button').filter({ hasText: 'close' }).click();

  await context.close();
  await browser.close();
});
