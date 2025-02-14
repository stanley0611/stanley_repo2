// const{test,expect} = require ('@playwright/test')

// test ("feb10_code", async() => {
//     function feb10(){
//         return feb10 = new Promise(function(resolve,reject) {
//             let x = 50;
//             if (x==500){
//                 return resolve ("The value is Okay")
//             }else{
//                 return reject ("The value is not okay")
//             }
//         })
//     }
//     feb10()
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// })


//*[@id="q-app"]/div[1]/div/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[2]/span

const{test,expect} = require ('@playwright/test')
test.bef("Test_User", async({page}) => {
    await page.goto("https://google.com")
    expect (page).waitForURL("https://google.com/dsahboard")
    await page.getByText('input[name="Login"]').fill("stanley.s@strategy.ai")
    await page.getByText('input[type="Password"]').fill("Password")
    await page.getByRole('button', {text :"Sign In"})
    await page.locator('//span [contains text() "Sign In"]').click()



})
