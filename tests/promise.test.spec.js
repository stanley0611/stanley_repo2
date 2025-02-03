const {test,expect} = require ('@playwright/test');

test("Promise", async() => {

function promise(){
let promise = new Promise(function(resolve,reject) {

    let success = true

    if (success){
        resolve("The Operation was successful");
    } else {
        reject("The Operation was failed")
    }

});

promise.then(function(value) {

    console.log(value);
}
)

promise.catch(function(error){

    console.log(error);
}

)

}
 promise()

})


test.only ("PromiseNew", async () => {
    function promise(){
        return promise = new Promise(function(response,reject) {
            let x =60
            if (x==600){
                return response("The value is Okay")
            }else{
                return reject("The value is not Okay")
            }
        })
    }
    promise()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })
})