let str = "abcbe"

function countOps(str) {
  let len = str.length
  let count = 0

  let reverse = str.split('').reverse()
  str = str.split('')

  console.log(str, reverse)
  for(i in str) {
    console.log(str[i])
    let first = str[i].charCodeAt(0)
    let second = str[len-i-1].charCodeAt(0)

    console.log(first, second)
    while(first < second && !(first > second)) {
      console.log(`while first < second ${second-first}`)
      second--
      str[len-i-1] = String.fromCharCode(second)
      count++
    }
  }
  str = str.join('')
  console.log(`count: ${count} ||| ${str}`)
  return str
}

countOps(str)