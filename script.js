console.log("Hello World!");

function getComputerChoice(min = 1, max = 3) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const randomInt = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled,
  );

  const Rock = "Rock";
  const Paper = "Paper";
  const Scissors = "Scissors";

  if (randomInt === 1) {
    return Rock;
  } else if (randomInt === 2) {
    return Paper;
  } else {
    return Scissors;
  }
}
console.log(getComputerChoice());
