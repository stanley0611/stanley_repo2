import { chromium } from "@playwright/test"
import{test,expect} from ('@playwright/test')

test ('Test New', async({page}) => {

const browser =await chromium.launch(
 {
    headless:false
 }




)


// await page.goto('https.://strategy.ai/sign-in');
// await expect (page).toHaveTitle('strategy.ai')

// await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")
// await page.locator('input[type="password"]').fill("Ironman@123")

// await page.getByRole('button', {test:'Sign In'}).click()



})