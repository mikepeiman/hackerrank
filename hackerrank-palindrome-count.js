// this is the final working copy
let s = "abcbe"

function countOps(s) {
  let len = s.length
  let count = 0
  let reverse = s.split('').reverse()
  s = s.split('')

  for(let i in s) {
    let first = s[i].charCodeAt(0)
    let second = s[len-i-1].charCodeAt(0)

    while(first < second && !(first > second)) {
      second--
      s[len-i-1] = String.fromCharCode(second)
      count++
    }
  }
  return count
}

countOps(s)

