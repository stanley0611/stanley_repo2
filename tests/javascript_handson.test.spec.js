const {test,expect} = require ('@playwright/test')

test ("JS Handson", async() => {

function sumoftwonumbers (a,b){
    return sumoftwonumbers(a+b);
}
var a = 13
var b = 57
console.log(a+b);
})

test ("Max number", async() => {

let number = (100,5686,5655,7641)

let Max = Math.max(number);

console.log(Max);

})


test("Max Array", async() => {

let number = [10,30,50,90]
let Max = Math.max(...number);
console.log(Max);

})

test ("reverse", async() => {
 function reverseString(str){
    return str.split('').reverse('').join('')

 }
    let result = reverseString("stanleyChristopher");
    console.log(result);
})

test ("reverse_array", async() => {

function reverseArray (array){
   return array.reverse()
}
   let numbers = [20,30,40,60]
   let result = reverseArray(numbers);
    console.log(result);

})
