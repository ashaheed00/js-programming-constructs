function isPrime(number) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) count++;
  }
  return number > 1 && count == 0;
}

const args = process.argv.slice(2);
let n = parseInt(args[0]);
if (isPrime(n)) console.log(n + " is a prime number");
else console.log(n + " is NOT a prime number");
