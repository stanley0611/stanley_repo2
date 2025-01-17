const {test,expect} = require ('@playwright/test');
const { text } = require('stream/consumers');

test ('My test', async({page}) => {

await page.goto('https://testapp.strategy.ai/sign-in');

await expect (page).toHaveTitle('Sign-in | Strategy AI');

await page.locator('input[name="email"]').fill('stanley.s@strategy.ai');

await page.locator('input[type="password"]').fill('Ironman@123');

await page.getByRole("button",{ text : 'Sign In'}).click()

}

);

