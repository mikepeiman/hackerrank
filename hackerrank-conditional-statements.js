// this is the final working copy
// Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird

function exercise(N) {
  if (N % 2 != 0) {
    console.log("Weird");
  } else if (N % 2 === 0 && N > 20) {
    console.log("Not Weird");
  } else if (N % 2 === 0 && (N >= 2 && N <= 5)) {
    console.log("Not Weird");
  } else if (N % 2 === 0 && (N >= 6 && N <= 20)) {
    console.log("Weird");
  }
}

let N = 22;
exercise(N);

// Success!
