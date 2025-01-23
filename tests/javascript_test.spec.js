const {test,expect} = require ('@playwright/test');

test ('Reverse string', async()=> {
 function reverseString(str){
 return str.split('').reverse('').join('');
 }
let testresult = reverseString("Stanley Christopher");
console.log(testresult);

})


test.only ("Reverse Array", async() => {
function reverserArray(Array){

    return Array.reverse('');
}

let numbers = [90,80,70,60,50];

let result = reverserArray(numbers);

console.log(result);

})