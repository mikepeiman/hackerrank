
let a = [17, 28, 30];
let b = [99, 16, 8];
// Complete the compareTriplets function below.
// function compareTriplets(a, b) {
//     let scoreA = 0, scoreB = 0
//     let arrA = a.map((i, index) => {
//       scoreA += 1 ? i > b[index] : 0
//       return i > b[index]
//     })
//     let arrB = b.map((i, index) => {
//       scoreB += 1 ? i > a[index] : 0
//       return i > a[index]
//     })
//     console.log(scoreA, scoreB, arrA, arrB)
// }

function compareTriplets(a, b) {
  let scoreA = 0, scoreB = 0
  a.forEach((i, index) => {
    scoreA += 1 ? i > b[index] : 0
    scoreB += 1 ? i < b[index] : 0
  })

  console.log(scoreA, scoreB)
}

compareTriplets(a, b)
// both solutions work. the second is more elegant