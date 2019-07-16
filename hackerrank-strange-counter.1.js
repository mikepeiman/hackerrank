// much more elegant and efficient solution than mine!!!
// from https://www.hackerrank.com/challenges/strange-code/forum
// by https://www.hackerrank.com/sreejith_menon?hr_r=1

let val = 3
let t = 1000000000000
while (t > val) {
  t -= val
  val *= 2
}

console.log(val-t+1)


