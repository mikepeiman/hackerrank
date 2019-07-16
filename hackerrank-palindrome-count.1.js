let str = "abcbe"

function countOps(str) {
  let len = str.length
  let even = Boolean(len % 2 - 1)
  let palindrome = false
  console.log(even)
  console.log(str)
  let count = 0
  let reverse = str.split('').reverse()
  str = str.split('')
  console.log(`str ${str} and reverse ${reverse}`)
  // reverse[4] = 'X'
  // console.log(`str ${str} and reverse ${reverse}`)

  let diff

  function changeChar(char, diff) {
    
  }

  function reduceChar(char, diff) {
    for(let i = 0; i < diff; i++) {
      console.log(`char ${char} i in diff ${i}`)
      char--
      count++
    }
    console.log(`char ${char} count ${count} diff ${diff}`)
    return String.fromCharCode(char)
  }

  for(i in str) {   
    let first = str[i].charCodeAt(0)
    let second = reverse[i].charCodeAt(0)
    console.log(`first ${first} second ${second}`)
    diff = Math.abs(first - second)
    first < second && !(second < first) ? str[i] = reduceChar(second, diff) : true

    console.log(`first ${String.fromCharCode(first)} reduceChar(first, diff) ${reduceChar(first, diff)}`)

    second < first && !(first < second) ? reduceChar(second, diff) : true
    i < Math.ceil(len/2) ? count += Math.abs(diff) : count
    console.log(`str[i] ${str[i]}, reverse[i] ${reverse[i]}, diff ${diff}, count ${count}`)
    diff ? reverse[i] = str[i] : true
    console.log('TEST', String.fromCharCode(first - diff))
  }
  console.log(`str ${str} and reverse ${reverse}`)


  // while(str != reverse) {
  //   str[len-1] = String.fromCharCode(str[len-1].charCodeAt(0)-1)
  //   let reverse = str.split("").reverse().join("")
  //   console.log(`reverse ${reverse}`)
  // }


  
  // while (!palindrome) {
  //   for(i in str) {
  //     let char = str[i]
  //     let first = str[i]
  //     let second = str[len-i-1]
  
  //     function changeLetter(code) {
  //       str[len-i-1] = String.fromCharCode(code-1)
  //       count++
  //       console.log(`changeLetter new code ${str[len-i-1]}`)
  //     }
  
  //     // console.log(`first: ${first}, second: ${second}`)
  //     let code = char.charCodeAt(0)
  //     // console.log('Letter', char, 'code:', char.charCodeAt(0))
  //     console.log(`Original: ${char} ::: String.fromCharCode(changeLetter(code)): ${String.fromCharCode(changeLetter(code))}`)
  //     // first != second ? console.log(`${first} does not equal ${second}`) : console.log(`${first} DOES equal ${second}`)
  
  //     console.log(`str[len-i-1] ${str[len-i-1]}`)
  //     // console.log(`String.fromCharCode(changeLetter(code)) ${String.fromCharCode(changeLetter(code))}`)
  //     first != second ? changeLetter(code) : char
  //     // code === 97 ? console.log("you've got an 'A' there") : console.log('all good')
  //     console.log(`count: ${count}`)
  //   }
  //   console.log(`string now ${str}`)
  //   let reverse = str.split("").reverse().join("")
  //   console.log(str, reverse)
  //   str === reverse ? palindrome = true : false
  //   palindrome = true
  // }

}

countOps(str)