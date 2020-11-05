let start = 100;
let bet = 1;
let goal = 200;
let betCount = 0;
let winCount = 0;

while (start != 0 && start != goal) {
  let chance = Math.floor(Math.random() * 10) % 2;
  if (chance == 0) {
    start += bet;
    winCount++;
  } else {
    start -= bet;
  }
  betCount++;
}

if (start == 0) {
  console.log("The player went broke");
  console.log("No of bets = " + betCount + "; No of bets won = " + winCount);
} else {
  console.log("The player reached his goal");
  console.log("No of bets = " + betCount + "; No of bets won = " + winCount);
}
