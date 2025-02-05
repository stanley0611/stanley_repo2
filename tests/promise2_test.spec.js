const {test,expect} = require ('@playwright/test');
const { console } = require('inspector');

test ("Promise2", async () => {
    function promise (prr) {
        let promise = new Promise((resolve, reject) => {
            let x = 50

            if (x==50){
                return resolve("The operation is successful");
            } else {
                return reject("The operation is failure");
            }
        })
        promise.then(function(value){
            console.log(value)
        })
        promise.catch(function(error){
            console.log(error)
        })
    }
    promise()
})

test ("Max", async () => {
    function max (max) {
        return Math.max(...max);
    }
    let result = max([15,19,85,96])
    console.log(result);
})

test ("Reverse", async () => {
    function reverse (rev) {
        return rev.split('').reverse('').sort().join('')
    }
    let result = reverse("Stanley Somasundaram Christopher");
    console.log(result)
})

test ("ReverseFirstname", async () => {
    function firstname (rfn) {
        let words = rfn.split(' ')
         words[0] = words[0].split('').reverse().join('')
         return words.join(' ')
    }
    let result = firstname("Stanley Somasundaram Christopher");
    console.log(result)
})

test ("cutoff", async () => {
    function cutoff (cof) {
        return cof.slice(3,7);
    }
    let result = cutoff("stanley")
    console.log(result);
})

//Recersive approach
test ("fibo", async() => {
function fibinacci (n) {
    if (n<=1) return n
    return fibinacci(n - 1) + fibinacci(n - 2);
}
    console.log(fibinacci(20))

})

//iterative approach
test ("fibonacci", async() => {
function fibo (n){
   let fib = [0,1]
   for (let i = 2; i<= n; i++) {
   fib [i] = fib [i-1] + fib [i-2]
   }
   return fib[n]

}

console.log(fibo(10))

} )


test.only ("reverse", async() => {
 function reverse (rem){
    return rem.split('').reverse().join('')
 }
let result = reverse("Power of the world");
console.log(result)

})

test("remove", async() => {
function remove(remo) {
    //console.log('test', remo)
    return(remo).replace(/[a-zA-Z0-9 ]/g,"")
}
let result = remove("#$%^&*576 Hello &*")
console.log(result)

})

