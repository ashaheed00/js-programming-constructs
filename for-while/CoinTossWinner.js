let headCounter = 0;
let tailCounter = 0;
while (headCounter < 11 && tailCounter < 11) {
  let toss = Math.floor(Math.random() * 100000) % 2;
  if (toss == 1) headCounter++;
  else tailCounter++;
}
headCounter > tailCounter
  ? console.log("Winner is Heads with " + headCounter + " counts.")
  : console.log("Winner is Tails with " + tailCounter + " counts.");
