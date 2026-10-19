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
  let humanChoice = parseInt(
    prompt(
      "Choose a number between 1 to 3, 1 stands for Rock, 2 for Paper, 3 for Scissors. Note an ivalid numebr won't run!",
    ),
  );

  let isValid = false;

  while (!isValid) {
    let humanChoice = parseInt(
      prompt(
        "Choose a number between 1 to 3, 1 stands for Rock, 2 for Paper, 3 for Scissors. Note an invalid number won't run!",
      ),
    );

    if (isNaN(humanChoice)) {
      alert("You cancelled the prompt.");
      break;
    }

    if (humanChoice != 1 && humanChoice != 2 && humanChoice != 3) {
      humanChoice;
    } else if (humanChoice === "") {
      humanChoice;
    } else {
      // Valid input received
      break;
    }

    if (isValid) {
      alert(`Success! You entered: ${humanChoice}`);
    }
  }

  if (humanChoice === 1 && errorMessageHumanChoice === 1) {
    return Rock;
  } else if (humanChoice === 2 && errorMessageHumanChoice === 2) {
    return Paper;
  } else if (humanChoice === 3 && errorMessageHumanChoice === 3) {
    return Scissors;
  } else {
    return "You have entered a wrong number your function might not evaluate right";
  }
}
console.log(getHumanChoice());
