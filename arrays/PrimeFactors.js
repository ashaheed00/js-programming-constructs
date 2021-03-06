function isPrime(number) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) count++;
  }
  return number > 1 && count == 0;
}

function getPrimeFactors(n) {
  let primeFactors = new Array();
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0 && isPrime(i)) primeFactors.push(i);
  }
  return primeFactors;
}

const args = process.argv.slice(2);
let n = parseInt(args[0]);
console.log(`Prime Factors of ${n}: ${getPrimeFactors(n)}`);
