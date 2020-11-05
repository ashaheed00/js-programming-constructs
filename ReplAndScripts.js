//1
let digit = Math.floor(Math.random() * 10);
console.log("Random Single Digit: " + digit);

//2
let diceValue = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Dice Number: " + diceValue);

//3
let firstDiceValue = (Math.floor(Math.random() * 10) % 6) + 1;
let secondDiceValue = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Sum of Two Dice Value: " + (firstDiceValue + secondDiceValue));

//4
const args = process.argv.slice(2);
let sum = 0;
for (let i = 0; i < 5; i++) sum += parseInt(args[i]);
console.log("sum = " + sum + " average = " + sum / 5);

//5
//a
function convertInchesIntoFeet(inches) {
  return inches / 12;
}
console.log(`42 inches = ${convertInchesIntoFeet(42)} feet.`);

//b
function convertFeetIntoMeters(feet) {
  return feet / 30.48;
}
let areaInMeters = convertFeetIntoMeters(60) * convertFeetIntoMeters(40);
console.log("Plot area in meters = " + areaInMeters);

//c
function convertSqMeterIntoAcre(areaInMeters) {
  return areaInMeters * 0.000247;
}
console.log("Plot area in Acres = " + convertSqMeterIntoAcre(areaInMeters));
