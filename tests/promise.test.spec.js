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