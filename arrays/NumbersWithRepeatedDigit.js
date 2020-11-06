let args = process.argv.slice(2);
const low = parseInt(args[0]);
const high = parseInt(args[1]);

let repeatArary = new Array();

for (let i = low; i <= high; i++) {
  if (i % 11 == 0 && i > 0) repeatArary.push(i);
}

console.log(repeatArary);
