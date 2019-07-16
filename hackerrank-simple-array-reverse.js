console.log('simple array')

const arr = [1,4,3,2]

function rev(arr) {
  let newArr = arr.reverse().join(' ')
  console.log(newArr)
}

rev(arr)