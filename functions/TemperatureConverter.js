const args = process.argv.slice(2);
let choice = parseInt(args[0]);
let temperature = parseInt(args[1]);

switch (choice) {
  case 1:
    degCTodegF(temperature);
    break;
  case 2:
    degFTodegC(temperature);
    break;
  default:
    break;
}

function degCTodegF(temperature) {
  let fahrenheit = (temperature * 9) / 5 + 32;
  console.log(temperature + " deg Celcius = " + fahrenheit + " deg Fahrenheit");
}

function degFTodegC(temperature) {
  let celcius = ((temperature - 32) * 5) / 9;
  console.log(temperature + " deg Fahrenheit = " + celcius + " deg Celcius");
}
