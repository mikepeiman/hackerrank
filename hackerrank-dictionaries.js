// const data = `3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry`;

var fs = require('fs')
var data = fs.readFileSync('hackerrank-dictionaries.txt').toString().split('\n')

function processData(arr) {
  // let arr = data.split("\n");
  console.log(arr.length)
  let len = arr.length
  let items = parseInt(arr[0]);
  console.log(items)
  let phonebook = new Map([]);
  // populate phonebook dictionary with keys and values
  for (let i = 1; i <= items; i++) {
    let item = arr[i].split(" ");
    phonebook.set(item[0], item[1]);
  }
  // check if entry is in phonebook, display in specified format if so, and "Not found" if not
  // I had originally used the loop limiter x <= 2*items, but was tricked because the queries in test case #1 
  // greatly exceeded the dictionary entries - I downloaded that test case and it was 150,001 lines
  // hence, I set a variable for the array length at the top, and used that length as a "less-than" condition, this being
  // the number of lines less the initial value given representing the number of entries in the phone book

  for (let x = 1 + items; x < len; x++) {
    phonebook.has(arr[x])
      ? console.log(`${arr[x]}=${phonebook.get(arr[x])}`)
      : console.log("Not found");
  }
}
processData(data);

// this program worked for 4/5 test cases, including a test case of 100,000 items; failed for another test case of 100,000 items
