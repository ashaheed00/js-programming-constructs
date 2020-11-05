let first = Math.floor(Math.random() * 1000);
let second = Math.floor(Math.random() * 1000);
let third = Math.floor(Math.random() * 1000);
let fourth = Math.floor(Math.random() * 1000);
let fifth = Math.floor(Math.random() * 1000);
let numbers = [first, second, third, fourth, fifth];

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

console.log(`Max of ${numbers} : ${maxOf(numbers)}
Min of ${numbers} : ${minOf(numbers)}`);
