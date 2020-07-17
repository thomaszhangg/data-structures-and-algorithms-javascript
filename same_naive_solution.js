// Return true, if arr2 has all of arr1's values but squared
// order does not matter

// NAIVE O(N^2), indexOf takes O(N)
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// 3 Loops, O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let numSquared = {};

  for (let num of arr1) {
    if (!numSquared[num ** 2]) numSquared[num ** 2] = 1;
    else numSquared[num ** 2]++;
  }

  let numFreq2 = {};
  for (let num of arr2) {
    if (!numFreq2[num]) numFreq2[num] = 1;
    else numFreq2[num]++;
  }

  // numSquared and numFreq2 should have same key/vals
  for (let key in numSquared) {
    if (!(key in numFreq2)) return false;
    if (numSquared[key] !== numFreq2[key]) return false;
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
