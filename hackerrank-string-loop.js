let s1 = "Hacker"
let s2 = "Rank"
let input = "2\nHacker\nRank"


function evenOddString(input) {
  let inputArr = input.split("\n")
  let loopCount = inputArr[0]
  for(let i = 1; i <= loopCount; i++) {
    let str = inputArr[i]
    let new1 = '', new2 = ''
    for(c in inputArr[i]) {
      // console.log(inputArr[i][c])
      // c % 2 === 0 ? console.log(inputArr[i][c], 'even') : console.log(inputArr[i][c], 'odd')
      c % 2 === 0 ? new1 += inputArr[i][c] : new2 += inputArr[i][c]
    }
    console.log(new1, new2)
  }
}

evenOddString(input)