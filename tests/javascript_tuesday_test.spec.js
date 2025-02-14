const {test,expect} = require ('@playwright/test')

test("tuesday", async ()=>{

function reverse (rev){
    return (rev).split('').reverse().join('');
}

let reversetext = reverse("Stanley Somasundaram Christopher");

console.log(reversetext)

})


test ("tuesday1", async() => {

    function reversenum(num){
     return num.toString().split('').reverse('').join('');
    }

    let result2= reversenum(7898529632155)

    console.log(result2);

})



test ("Duplicate", async() =>{

function duplicate(dup) {
    return dup.filter((value,index,arr) =>arr.indexOf(value) !== index);
}

let result1 = duplicate([12,85,85,96,36]);

console.log('Result', result1)

return result1
})

test ("Max value", async() => {

function biggestvalue(bigv){
    return Math.min(...bigv)
}
  let numbers = biggestvalue([52,96,85,63]);
   console.log("Biggest Number :", numbers)
})


test.only ("Captial Letter", async() => {
 function captialletter(caps) {
    return caps.filter(letters => /[a-z]/.test(letters));
 }
    let result = captialletter(['A','B','C','a','k','g']);

    console.log(result);
})


test ("Test-user", async () => {
    function tesuser(tusr) {
        return tusr.map(tesuser => tesuser.toLowerCase())
    }
    let result = tesuser(["A","B","C"])
    console.log(result)

})


test.only("sort", async() =>{
    function sort(srt) {
        return srt.sort((a,b) => b-a)
    }
    let result = sort([5,9,8,6,3,85]);
    console.log(result)
})