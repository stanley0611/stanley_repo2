const {test,expect} = require ('@playwright/test')

test ("Promise", async () => {
    function promise (prr) {
        let promise =new Promise((resolve, reject) => {
            let x = 50;

            if (x==520){
                return resolve ("The value is correct")
            }else{
                return reject ("The value is wrong")
            }

        })
        promise.then (function(value){
            console.log(value)
        })
        promise.catch (function(error){
            console.log(error)
        })

    }

promise()


})


test.only ("callback", async () =>{
 function callback (name,callback){
    console.log("Hello",name)
    callback()
 }
 function callback2 (){
    console.log("Good Bye")
 }
callback("Stanley" ,callback2);

})