const{test,expect} = require('@playwright/test')

test('test sample', async ({page}) => {
 
    await page.goto('https:\\strategy.ai')
    await page.pause()

}

);
