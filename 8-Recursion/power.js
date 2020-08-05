/*
Write a function called power that accepts a base and an exponent. 
The function should return the power of the base to the exponent, mimicing the functionaltiy of Math.pow()
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  
  // exponent is EVEN, we can achieve log(N)
  else if (exponent % 2 === 0) {
    let temp = power(base, exponent / 2);
    return temp * temp;
  }
  // exponent is ODD, subtract 1 and do same as for even
  else {
    return base * power(base, exponent - 1);
  }
}

// Test
console.log('This should output 1:', power(2, 0));
console.log('This should output 2:', power(2, 1));
console.log('This should output 8:', power(2, 3));
console.log('This should output 16:', power(4, 2));

