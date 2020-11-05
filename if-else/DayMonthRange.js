const args = process.argv.slice(2);
let day = parseInt(args[0]);
let month = parseInt(args[1]);

function dayMonthRange(day, month) {
  let result = false;
  if (month > 3 && month < 6) {
    result = true;
  }
  if (month == 3) {
    if (day >= 20 && day <= 31) result = true;
  }
  if (month == 6) {
    if (day <= 20 && day >= 1) result = true;
  }
  return result;
}

console.log(dayMonthRange(day, month));
