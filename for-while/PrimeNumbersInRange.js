function isPrime(number) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) count++;
  }
  return number > 1 && count == 0;
}

const args = process.argv.slice(2);
let low = parseInt(args[0]);
let high = parseInt(args[1]);

console.log("Prime numbers in between " + low + " and " + high + "are: ");
let primeNumbers = [];
for (let n = low; n < high; n++) if (isPrime(n)) primeNumbers.push(n);
console.log(primeNumbers);
