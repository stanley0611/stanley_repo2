const { test, expect } = require('@playwright/test')
const { title, getBuiltinModule } = require('process')
const { timeout } = require('../playwright.config')


test.beforeEach(async({page}) =>{
    await page.goto("https:testapp.strategy.ai/sign-in")

    await expect(page).toHaveTitle("Sign-in | Strategy AI")
  
    await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")
  
    await page.locator('input[type="password"]').fill("Batman@123")
  
    await page.getByRole('button', { text: 'Sign In' }).click()
  

})

test('Sign in',async({ page }) => {


  

})




test('after signin', async ({ page }) => {

//   await page.goto("https:testapp.strategy.ai/sign-in")

//   await expect(page).toHaveTitle("Sign-in | Strategy AI")

//   await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

//   await page.locator('input[type="password"]').fill("Batman@123")

//   await page.getByRole('button', { text: 'Sign In' }).click()

  //await page.locator('button').filter({ hasText: 'close' }).click();

  { timeout: 3000 }


  const element = page.locator({text :"27 th workspace "}).click();

  await element.scrollIntoViewIfNeeded();

  await page.getByRole('toolbar').getByRole('listitem').click();

  await page.getByText('Sign Out').click();

  // await context.close();
  //await browser.close();


}


)

test.only('Doc upload', async ({ page }) => {

//   await page.goto('https://testapp.strategy.ai/sign-in');

//   await expect(page).toHaveTitle("Sign-in | Strategy AI");

//   await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

//   await page.locator('input[type="password"]').fill("Batman@123");

//   await page.getByRole('button', { text: 'Sign In' }).click();

//   await page.pause();

 // timeout: 3000 }
//await expect(page).toHaveURL("https://testapps.strategy.ai/api/strategyAI/user/info/");

 //wait page.locator('div:nth-child(9) > .col-sm-12 > .q-card > div > div > .q-img > .q-img__container > .q-img__image').click();
 const element = page.locator('{xpath:/*[@id="q-app"]/div/div[2]/main/div[1]/div[3]/div[19]/div[1]/div/div/div[2]/div[1]}').click();
 await page.pause();

//wait element.scrollIntoViewIfNeeded();

  await page.getByRole('button', { name: 'Upload', exact: true }).click();

  await page.getByRole('button', { name: 'I understand, Continue' }).click();

  await page.locator('.q-dialog__inner').click();

  await page.getByLabel('close Upload Files to this').setInputFiles('SHO 01-03-2025.pptx');

  await page.getByRole('row', { name: 'IBAC - 50 Information' }).getByRole('radio').click();

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByText('Upload completed.').click();

  await page.locator('div').filter({ hasText: /^grid_viewchevron_right17 th Workspace$/ }).nth(1).click();

  await page.getByRole('button', { name: 'st', exact: true }).click();

  await page.getByText('Sign Out').click();

})


// test('scroll-down', async ({page}) =>{

//   await page.goto('https://testapp.strategy.ai/sign-in');

//   await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

//   await page.locator('input[type="password"]').fill("Batman@123");

//   await page.getByRole('button', { text: 'Sign In' }).click();

//   await page.pause();

//   { timeout: 3000 }

//   await expect(page).toHaveURL('https://testapp.strategy.ai/strategy-chat/dashboard');

//   await page.evaluate( () =>{
     
//     window.scrollBy(0,10);

//   }

//   )
//   await page.pause();

// })

// test.only('scroll_down 2', async({page}) =>{
// await page.goto('https://commitquality.com/');
// await page.pause();
// //await page.evaluate( () =>{
//  // window.scrollBy(0,50);
// //

// //)


// const element = page.locator('[data-testid="show-more-button"]');

// await element.scrollIntoViewIfNeeded();

// await page.pause();
//})