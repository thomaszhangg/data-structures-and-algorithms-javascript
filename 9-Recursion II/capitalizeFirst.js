// Write a recursive function that, given an array of strings, capitalizes the first letter of each string in the array.

function capitalizeFirst(arrOfStrings) {
  let result = [];

  function capString(word) {
    if (word.length === 0) return word;
    if (word[0] === word[0].toUpperCase()) return word;

    return `${word[0].toUpperCase()}${word.slice(1)}`;
    // return word[0].toUpperCase() + word.slice(1);
  }

  for (let string of arrOfStrings) {
    result.push(capString(string));
  }

  return result;
}

// Test
console.log(
  "This should output ['Theo', 'And', 'Thomas']",
  capitalizeFirst(['theo', 'and', 'thomas'])
);
