console.log(`Type: 
1 for Feet to Inch
2 for Feet to Meter
3 for  Inch to Feet
4 for Meter to Feet`);

function unitCoverter(input, operation) {
  switch (operation) {
    case 1:
      result = input * 12;
      break;
    case 2:
      result = input * 0.08333;
      break;
    case 3:
      result = input * 0.3048;
      break;
    case 4:
      result = input * 3.28084;
      break;
    default:
      result = null;
  }
  return result;
}

const args = process.argv.slice(2);
let input = parseInt(args[0]);
let operation = parseInt(args[1]);
console.log("\nThe result of operation = " + unitCoverter(input, operation));
