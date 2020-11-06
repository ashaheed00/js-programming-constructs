let randomArray = new Array();
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 1000));
}
console.log(`Random Array ${randomArray}`);

randomArray.sort();
console.log(`Sorted Array: ${randomArray}`);
console.log("2nd Max value = " + randomArray[randomArray.length - 2]);
console.log("2nd Min value = " + randomArray[1]);
