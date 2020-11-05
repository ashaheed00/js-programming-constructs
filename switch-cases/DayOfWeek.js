function displayWeekDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Friday";
      break;
    default:
      return "Wrong weekday number given.";
  }
}

const args = process.argv.slice(2);
let weekdayNumber = parseInt(args[0]);
console.log(displayWeekDay(weekdayNumber));
