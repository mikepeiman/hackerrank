f = a => {
  a += 5;
  console.log(a);
  return a;
};

// f(f(f(f(f(5)))))

function sum(x) {
  console.log(x);

  return x < 1 // test for base case: are we at the end?
  ? 0 // base case (return 0) we are at the end
  : (x + sum(x-1)); // recursive case - keep going

  // return x >= 1 // test for base case: are we at the end?
  // ? x + sum(x-1) // recursive case - keep going
  // : 0 // base case (return 0) we are at the end

}

// console.log(sum(15))

// fact = (x) => {
//   return x === 0
//   ? 0
//   : (x * fact(x-1))
// }

function fact(x) {
  // console.log(x)
    return x === 1
    ? 1
    : (x * fact(--x))
}

// console.log(fact(12))
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// function exp(n, p) {
//   console.log('exp', n, p)
//   return p === 0
//   ? 1
//   : (n * exp(n, p-1))
//   // let x = n
//   // for(let i = 1; i < x; i++) {
//   //   console.log(n)
//   //   n = n * x
//   // }
//   // return n
// }

function exp(n) {
  let p = n
    // console.log('exp', n, p)

  function innerExp(n, p) {
    if(p===0) {
      return 1
    } else {
      console.log(n, p)
      return n * innerExp(n, p-1)
    }
  }
  console.log(innerExp(n, p))

}

console.log(exp(10))

// arr.forEach(el => {
//   console.log(`${el}: factorial is ${fact(el)}`)
// })
let factArr = [], powerArr = [], ratioArr = []
// arr.forEach(el => {
//   let factorial = fact(el)
//   let power = Math.pow(el, el)
//   let ratio = power/factorial

//   factArr.push(factorial)
//   powerArr.push(power)
//   ratioArr.push(parseFloat(ratio.toFixed(3)))

//   console.log(`${el}: factorial is ${fact(el)}`)
//   // console.log(`${el}: result is ${exp(el)}`)
//   console.log(`${el}: result is ${Math.pow(el, el)}`)
//   console.log(`Ratio of power to factorial is ${ratio}`)
// })

// console.log(factArr, powerArr, ratioArr)

// console.log('RATIOS OF RATIOS **********************************')
// for(let i = 0; i < ratioArr.length-1; i++) {
//   console.log(`Ratio of power ${powerArr[i]} to factorial ${factArr[i]} is ${ratioArr[i]}`)
//   console.log(`Ratio of power ${powerArr[i+1]} to factorial ${factArr[i+1]} is ${ratioArr[i+1]}`)
//   let ratio2 = parseFloat(ratioArr[i] / ratioArr[i+1]).toFixed(3)
//   console.log(`Ratio of ratio ${ratioArr[i]} to ratio ${ratioArr[i+1]} is ${ratio2}`)
//   console.log('*********** next set ********')
// }
