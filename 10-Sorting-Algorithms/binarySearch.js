/* 
Binary Search Basic Pseudocode
1) function accepts a sorted array and a value
2) Create left and right pointer, from both ends of the array
3) Calculate a midpoint at each iteration and continue until left <= right
4) We achieve O(log N) time complexity because we cut our search area by half each time
*/

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] < val) left = mid + 1;
    else if (arr[mid] > val) right = mid - 1;
    else return mid;
  }
  return -1;
}

// Test
console.log('This should output 1', binarySearch([1, 4, 6, 8, 9], 4));
console.log('This should output 2', binarySearch([1, 4, 6, 8, 9], 6));
