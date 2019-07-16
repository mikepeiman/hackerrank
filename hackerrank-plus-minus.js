    let arr = [-4, 3, -9, 0, 4, 1]
    
    let neg = 0, pos = 0, zero = 0
    arr.forEach(num => {
      num > 0 ? pos++ : pos
      num < 0 ? neg++ : neg
      num === 0 ? zero++ : zero
    })
    let l = arr.length
    let posF, negF, nullF
    posF = (pos / l).toFixed(6)
    negF = (neg / l).toFixed(6)
    nullF = (zero / l).toFixed(6)

    console.log(posF)
    console.log(negF)
    console.log(nullF)

    // success!