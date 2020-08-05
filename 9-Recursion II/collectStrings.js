// Write a function that accepts an object and returns an array of all the value in the objthat have typeof string

function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    let val = obj[key];

    if (typeof val === 'string') result.push(val);
    else if (typeof val === 'object') {
      result = result.concat(collectStrings(val));
    }
  }
  return result;
}

// Test
console.log(
  "This should output ['foo', 'bar', 'baz']:",
  collectStrings({
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz',
            },
          },
        },
      },
    },
  })
);
