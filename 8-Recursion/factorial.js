/* 
Write a function factorial which accepts a number and returns the factorial of that number.
*/

function factorial(num){
    if (num === 0) return 1
    return num * factorial(num-1)
}



// Test
console.log("This should output 1:", factorial(0))
console.log("This should output 1:", factorial(1))
console.log("This should output 2:", factorial(2))
console.log("This should output 24", factorial(4))
console.log("This should output 5040:", factorial(7))