var data = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0]]

// var fs = require('fs')
// var data = fs.readFileSync('2d-array.txt').toString().split('\n')

// console.log(data)

function getHourglassMax(data) {
  let glasses = []
  for(let x = 0; x < data.length - 2; x++) {
    for(let y = 0; y < data[x].length -2; y++) {
      let currentHourGlass = data[x][y]+ data[x][y+1] + data[x][y+2] + data[x+1][y+1] + data[x+2][y] + data[x+2][y+1] + data[x+2][y+2]
      glasses.push(currentHourGlass)
    }
  }
  return Math.max(...glasses)
}

console.log(getHourglassMax(data))




// function getHourglassMax(data) {
//   for(let x = 0; x < data.length - 2; x++) {
//     // console.log(data[x])
//     for(let y = 0; y < data[x].length -2; y++) {
//       // console.log(data[x][y])
  
//       // visually testing algorithm below:
//       // let currentHourGlass = `
//       //   ${data[x][y]}, ${data[x][y+1]}, ${data[x][y+2]}
//       //   . ${data[x+1][y+1]} .
//       //   ${data[x+2][y]}, ${data[x+2][y+1]}, ${data[x+2][y+2]}`
//       //   console.log(`currentHourGlass = ${currentHourGlass}`)
//         //  it works, time to do the math
  
//       let currentHourGlass = data[x][y]+ data[x][y+1] + data[x][y+2] + data[x+1][y+1] + data[x+2][y] + data[x+2][y+1] + data[x+2][y+2]
//       // console.log(`currentHourGlass = ${currentHourGlass}`)
//       glasses.push(currentHourGlass)
//     }
//   }
//   return Math.max(...glasses)
// }

// console.log(getHourglassMax(data))


// let arr = Array(6)
// for(let c = 0; c < 6; c++) {
//   // arr[c] = data.map(tempArr => parseInt(tempArr, 10))
//   arr[c] = data[c]
// }

// console.log(arr)