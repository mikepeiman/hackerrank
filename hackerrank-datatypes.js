// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('datatypes.txt')
// });
// lineReader.on('line', line => {
//   console.log('Line from file:', line);
// });

// The above works well for reading all lines, but I don't know how to get individual lines, so
// implemented the below
// https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array

var fs = require('fs')
var array = fs.readFileSync('datatypes.txt').toString().split("\n")
// for(i in array) {
//   console.log('array i: ',i, array[i])
// }
var i = 4
var d = 5.2
var s = "HackerRank "

let i2, d2, s2, i3, d3, s3

i2 = array[0]
d2 = array[1]
s2 = array[2]

i3 = parseInt(i) + parseInt(i2)
d3 = parseFloat(d) + parseFloat(d2)
s3 = s + s2

console.log(i3)
console.log(d3)
console.log(s3)