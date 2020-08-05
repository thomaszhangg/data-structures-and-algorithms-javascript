/* 
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Fib sequence is sequence of whole numbers 1,1,2,3,5,8.... which starts with 1 and 1, and where every number thereafter
is equal to the sum of the previous two numbers
*/

// function fib(num) {
//   if (num === 1 || num === 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// }

function fib(num, memo = {}) {
  if (num === 1 || num === 2) return 1;
  else if (memo[num]) return memo[num];
  else memo[num] = fib(num - 1, memo) + fib(num - 2, memo);

  return memo[num];
}

// Test
console.log('This should output 3:', fib(4));
console.log('This should output 55:', fib(10));
console.log('This should output 317811:', fib(28));
console.log('This should output 9227465:', fib(35));
