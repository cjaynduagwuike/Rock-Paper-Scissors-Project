console.log("Hello World!");

const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

function getComputerChoice(min = 1, max = 3) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const randomInt = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled,
  );

  if (randomInt === 1) {
    return Rock;
  } else if (randomInt === 2) {
    return Paper;
  } else {
    return Scissors;
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = parseInt(
    prompt(
      "Choose a number between 1 to 3, 1 stands for Rock, 2 for Paper, 3 for Scissors",
    ),
  );

  let isValid = false;

  while (!isValid) {
    if (humanChoice === NaN) {
      alert("You cancelled the prompt.");
      break;
    }

    if (humanChoice != 1 && humanChoice != 2 && humanChoice != 3) {
      alert("Error: You chose an Invalid Value. Please try again.");
      humanChoice;
    } else if (humanChoice === "") {
      alert("Error: Input cannot be empty. Please try again.");
      humanChoice;
    } else {
      isValid = true; // Valid input received
    }

    if (isValid) {
      alert(`Success! You entered: ${humanChoice}`);
    }
  }

  if (humanChoice === 1) {
    return Rock;
  } else if (humanChoice === 2) {
    return Paper;
  } else if (humanChoice === 3) {
    return Scissors;
  } else {
    return "You have entered a wrong number your function might not evaluate right";
  }
}
console.log(getHumanChoice());
