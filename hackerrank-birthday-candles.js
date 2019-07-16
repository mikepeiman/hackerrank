let arr = [1,3,2,3,7,6,5,8,6,9,9,9]

function candles(arr) {
  let max = Math.max(...arr)

  let num = [...arr].filter(x=> x===max).length
  console.log(num)
}

candles(arr)