
let t = 15
function findValue(t) {
  let startValue = 3
  let cycleCount = 1

// loop count up to t (15). 
//   inside this loop, count down from startValue.
//   if startValue === 1, then double startValue and loop again until count === t, then return value of i within startValue loop

let currentValue = startValue
for(let z = 1; z <= t; z++) {
  currentValue === 0 ? setNewStartValue() : currentValue
  console.log(z, currentValue)
  currentValue--
  
  function setNewStartValue() {
    startValue = startValue * 2
    currentValue = startValue
  }
}
  console.log(`the current weird timer value is ${currentValue+1}`)
}

findValue(t)