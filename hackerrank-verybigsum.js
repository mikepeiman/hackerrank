let ar = [1000000001,1000000002,1000000003,1000000004,1000000005]
let sum = 0
console.log('verybigsum')
function aVeryBigSum(ar) {
  ar.map(i => {
    sum += i
  })
  // console.log(sum)
  // it works
  return sum
}

aVeryBigSum(ar)