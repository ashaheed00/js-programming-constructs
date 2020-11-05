const args = process.argv.slice(2);
let n = parseInt(args[0]);

console.log("The Table of Powers of 2: ");
for (let i = 1; i <= n; i++) {
  console.log(2 ** i);
}
