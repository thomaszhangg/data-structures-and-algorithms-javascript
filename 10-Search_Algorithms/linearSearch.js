// Linear Search
// Time Complexity: O(N)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}


// Test
console.log(
  'This should output 1:',
  linearSearch(['thomas', 'theo', 'betty'], 'theo')
);
console.log(
  'This should output -1:',
  linearSearch(['thomas', 'theo', 'betty'], 'toe')
);
