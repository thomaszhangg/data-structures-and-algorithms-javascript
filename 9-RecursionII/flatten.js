// Write a recursive function flatten, which accepts an array of arrays and returns a new array with all values flattened

function flatten(arr, result = []) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      let restOfIt = flatten(element, result);
      result.concat(restOfIt);
    } else {
      result.push(element);
    }
  }
  return result;
}

// function flatten(arr) {
//   let result = [];

//   for (let element of arr) {
//     if (Array.isArray(element)) {
//       let restOfIt = flatten(element, result);
//       result = result.concat(restOfIt);
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// }

// Test
console.log('This output should be [1,2,3,4,5]', flatten([1, 2, 3, [4, 5]]));
console.log(
  'This output should be [1,2,3]',
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
);
