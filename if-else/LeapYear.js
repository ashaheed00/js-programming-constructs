function isLeapYear(year) {
  let isLeapYear = false;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  }
  return isLeapYear;
}

const args = process.argv.slice(2);
let year = parseInt(args[0]);
if (isLeapYear(year)) console.log("The Year " + year + " is a leap year");
else console.log("The Year " + year + " is NOT a leap year");
