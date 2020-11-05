function isPalindrome(number) {
  let numString = number.toString();
  return numString === numString.split("").reverse().join("");
}

function isPrime(number) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) count++;
  }
  return number > 1 && count == 0;
}

const args = process.argv.slice(2);
let n = parseInt(args[0]);
if (isPalindrome(n)) {
  console.log(n + " is a Palindrome Number");
  if (isPrime(n)) console.log(n + " is also a prime number");
} else console.log(n + " is NOT a Palindrome Number");
