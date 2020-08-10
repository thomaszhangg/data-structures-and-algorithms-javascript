function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  let result = capitalizeWords(arr.slice(0, -1));           // capitalize all words but last
  result.push(arr.slice(arr.length - 1)[0].toUpperCase());  // capitalize last word
  return result;
}



// Test
console.log(
  "This should output ['THEO', 'AND', 'THOMAS']:",
  capitalizeWords(['Theo', 'and', 'tHomas'])
);



// capitalizeWords(['Theo', 'and', 'tHomas'])
//         result = capitalizeWords(['Theo', 'and'])
//                 'THOMAS'
//                         result = capitalizeWords(['Theo'])
//                                 'AND'                   
//                                     ['THEO']            