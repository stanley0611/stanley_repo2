const {test,expect} = require('@playwright/test')


// test ("JS Practice", async() => {
//     function addition(...addi){
       
//         return addi.reduce((sum, curr) => sum+curr, 0)
//     }
//     let numbers = addition(1,2,3,4,5,6)
//     console.log(numbers)
// })



test  ("Javascript Practice", async() => {
    function javascriptPractice(JSP) {
        return javascriptPractice = new Promise(function(resolve,response) {
            let x = 25
            if (x==25){
                return resolve ("The value is okay")
            }else {
                return reject("The value is not okay")
            }
        })
    }
    javascriptPractice()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })
})

test ("First letter only", async() => {
    function firstLetterOnly(flo) {
        return flo.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }
    let result = firstLetterOnly("your sample code goes here");
    console.log(result)
})

test ("Last letter only", async() => {
    function lastLetteronly(llo){
        return llo.split(' ').map(word => word.slice(0,-1) + word.slice(-1).toUpperCase()).join(' ')
    }
    let result = lastLetteronly("great place to work is just a phrase")
    console.log(result)
})

test.only("Callback", async() => {
    function greeting(greet,callback){
        return callback(greet + " ")
        
    }
    function callback(name){
        return name +"Stanley"
    }
    let result = greeting("Hello", callback)
    console.log(result)
})

