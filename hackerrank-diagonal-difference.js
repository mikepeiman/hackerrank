    let arr = [[11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]]
    
    let newA = [], newB = []
    // Write your code here
    for (let i in arr) {
        newA.push(arr[i][i])
    }
    for (let i in arr) {
        let x = arr.length - i - 1
        newB.push(arr[i][x])
    }
    let sumA = 0, sumB = 0
    newA.forEach(num => {
      console.log(num)
      sumA += num
    })
    newB.forEach(num => {
      sumB += num
    })
    let diff = Math.abs(sumA - sumB)

    console.log(sumA, sumB)
    console.log(diff)

    // success!