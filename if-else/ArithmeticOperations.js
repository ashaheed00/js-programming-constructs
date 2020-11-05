function maxOf(numbers) {
  let max = numbers[0];
  for (let n of numbers) if (n > max) max = n;
  return max;
}

function minOf(numbers) {
  let min = numbers[0];
  for (let n of numbers) if (n < min) min = n;
  return min;
}

const args = process.argv.slice(2);
let a = parseInt(args[0]);
let b = parseInt(args[1]);
let c = parseInt(args[2]);

let opeation1 = a + b * c;
let opeation2 = (a % b) + c;
let opeation3 = c + a / b;
let opeation4 = a * b + c;

let max = maxOf([opeation1, opeation2, opeation3, opeation4]);
let min = minOf([opeation1, opeation2, opeation3, opeation4]);

console.log("Max: " + max + "   Min: " + min);
