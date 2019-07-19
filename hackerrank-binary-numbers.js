let n = 5

function countOnes(n) {
  let bin = (n).toString(2)
  let count = 1
  let countArr = []
  for (let x in bin) {
      if (bin[x] == 1 && bin[x] === bin[x - 1]) {
          count++
      } else if (count > 1 && bin[x] != bin[x - 1]) {
          countArr.push(count)
          count = 1
      }
      if (x == (bin.length - 1)) {
          countArr.push(count)
      }
  }
  console.log(parseInt(Math.max(...countArr)))
}

console.log(countOnes(n))