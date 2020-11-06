let birthMonthArrayOf92 = new Array();
let birthMonthArrayOf93 = new Array();
let year = 0;
let month = 0;
let birthYearMap = new Map();
for (let i = 0; i < 50; i++) {
  year = (Math.floor(Math.random() * 10) % 2) + 92;
  month = (Math.floor(Math.random() * 100) % 12) + 1;
  if (year == 92) {
    birthMonthArrayOf92.push(month);
    birthYearMap.set(92, birthMonthArrayOf92);
  }
  if (year == 93) {
    birthMonthArrayOf93.push(month);
    birthYearMap.set(93, birthMonthArrayOf93);
  }
}
console.log("Persons with same birth year: ");
console.log(birthYearMap);

let birthMonthMap = new Map();
let sameMonthCount = 0;
for (value of birthMonthArrayOf92.concat(birthMonthArrayOf93)) {
  sameMonthCount = 0;
  if (birthMonthMap.has(value)) sameMonthCount = birthMonthMap.get(value);
  birthMonthMap.set(value, ++sameMonthCount);
}
console.log("\nCount of persons having same birth month:");
console.log(birthMonthMap);
