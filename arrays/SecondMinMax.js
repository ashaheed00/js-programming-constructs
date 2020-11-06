function findMax(array) {
  let max = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] > max) {
      max = array[j];
    }
  }
  return max;
}

function findMin(array) {
  let min = 1000;
  for (let j = 0; j < array.length; j++) {
    if (array[j] < min) {
      min = array[j];
    }
  }
  return min;
}

let randomArray = new Array();
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 1000));
}
console.log(randomArray);

let maximum = findMax(randomArray);
let index = randomArray.indexOf(maximum);
randomArray.splice(index, 1);
let secondMax = findMax(randomArray);
console.log("2nd Max value = " + secondMax);

let minimum = findMin(randomArray);
index = randomArray.indexOf(minimum);
randomArray.splice(index, 1);
let secondMin = findMin(randomArray);
console.log("2nd Min value = " + secondMin);
