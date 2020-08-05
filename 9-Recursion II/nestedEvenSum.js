// Write a recursive function that returns the sum of all even numbers in an object which may contain nested objects

function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    let val = obj[key];

    if (typeof val === 'object') {
      sum += nestedEvenSum(val);
    } else if (typeof val === 'number' && val % 2 === 0) {
      sum += val;
    }
  }

  return sum;
}

// Test
console.log(
  'This should output 6:',
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: 'yup',
      },
    },
  })
);

console.log(
  'This should output 10:',
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
  })
);
