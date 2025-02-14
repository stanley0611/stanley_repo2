// const {test,expect} = require('@playwright/test')

// test("Last file", async() => {
//     function lastFile() {
//         return lastFile = new Promise(function(resolve,reject){
//             let x = 50
//             if (x==50){
//                 return resolve ("The Value is Okay")
//             }else{
//                 return reject ("The value is not Okay")
//             }
//         })
//     }
//     lastFile()
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// })

const {test,expect} = require("@playwright/test")

test("The Last file", async() => {
    function capsFirst(caft){
        return caft
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    }
    function reverse(rev){
        return rev.split('').reverse().join('')
    }
    let result = capsFirst(reverse("my name is stanley"))
    console.log(result)
})
