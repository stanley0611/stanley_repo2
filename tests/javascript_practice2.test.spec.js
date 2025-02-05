const {test,expect} = require('@playwright/test')


test ("JS Practice", async() => {
    function addition(...addi){
        //console.log("Entered")
        return addi.reduce((sum, curr) => sum+curr, 0)
    }
    let numbers = addition(1,2,3,4,5,6)
    console.log(numbers)
})