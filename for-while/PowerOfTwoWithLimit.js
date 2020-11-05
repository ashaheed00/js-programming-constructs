const args = process.argv.slice(2);
let n = parseInt(args[0]);

console.log("The Table of Powers of 2 till 256: ");
let i = 0;
let result = 1;
while (result < 256 && i++ < n) {
  result = 2 ** i;
  console.log(result);
}
