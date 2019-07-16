let arr = [12,5,7,9,11,8,4]

function minimax(arr) {
  let sum = arr.reduce((a,b) => a+b,0)
  let min = sum, max = 0, current = 0
  arr.forEach(num => {
    current = sum - num
    current < min ? min = current : min
    current > max ? max = current : max   
  });
  console.log(`Sum: ${sum} Min: ${min} Max: ${max}`)
}

minimax(arr)