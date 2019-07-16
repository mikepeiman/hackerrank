let n = 6,
  x = n;

//   for (let i = 1; i <= n; i++) {
//     x--
//     x-1 >= 0 ? console.log(" ".repeat(x)+ "#".repeat(i)) : console.log("#".repeat(i))
// }
// success!

for (let i = n; i > 0; i--) {
  console.log(" ".repeat(i - 1) + "#".repeat(n - i + 1));
}

// both work, the second is more elegant
