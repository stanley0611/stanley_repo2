const {test,expect} = require ('@playwright/test')

test ('promise', async() => {

function promise() {
 
return promise = new Promise (function(resolve,reject){


let x = 5

if (x==50){
    resolve ("It passed");
} else {
    reject ("It failed");
}
}

)

}
promise()
    .then(function(value){
        console.log(value);
    }
)
    .catch(function(error){
        console.log(error);
    }
    
)

})