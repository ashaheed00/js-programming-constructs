function numberUnits(number) {
  if (number < 0 || number > 9999999) return "Wrong number input";

  let numString = number.toString();
  switch (numString.length) {
    case 1:
      return "Unit";
      break;
    case 2:
      return "Ten";
      break;
    case 3:
      return "Hundred";
      break;
    case 4:
      return "Thousand";
      break;
    case 5:
      return "Ten Thousand";
      break;
    case 6:
      return "Lakh";
      break;
    case 7:
      return "Million";
      break;
    default:
      return "Wrong number input";
  }
}

const args = process.argv.slice(2);
let number = parseInt(args[0]);
console.log(numberUnits(number));
