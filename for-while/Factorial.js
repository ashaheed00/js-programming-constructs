function factorialOf(number) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

const args = process.argv.slice(2);
let n = parseInt(args[0]);

console.log(n + "! = " + factorialOf(n));
