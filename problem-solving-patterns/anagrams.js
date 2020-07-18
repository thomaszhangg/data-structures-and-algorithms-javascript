// Given 2 strings, write a function to determine if second str is an anagram of the first
// anagram: word or phrase formed by rearranging the letters of another, such as cinema / iceman
// We can just use 1 object
// Set letters of word1 to 1 or ++
// Set letters of word2 to -1 or --
// If words are anagrams of each other, all values of hash will === 0

// const validAnagram = (word1, word2) => {
//   if (word1.length !== word2.length) return false;

//   let hash = {};
//   for (let i = 0; i < word1.length; i++) {
//     let char1 = word1[i];
//     let char2 = word2[i];

//     hash[char1] ? (hash[char1] += 1) : (hash[char1] = 1);
//     hash[char2] ? (hash[char2] -= 1) : (hash[char2] = -1);
//   }
//   return Object.values(hash).every((val) => val === 0);
// };

// We can save a bit of time by avoiding value check at end and return false earlier
const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  let hash = {};

  for (let char of word1) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }

  // validAnagram('cinemaa', 'icemann'
  // at the last n of word2, hash['n'] = 0 which is falsey, return false
  for (let char of word2) {
    if (!hash[char]) return false;
    else hash[char] -= 1;
  }

  return true;
};

console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('cinemaa', 'icemann'));
