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

function getHumanChoice() {
  let humanChoice;

  let isValid = false;

  while (!isValid) {
    humanChoice = parseInt(
      prompt(
        "Choose a number between 1 to 3, 1 stands for Rock, 2 for Paper, 3 for Scissors. Note an invalid number won't run!",
      ),
    );

    if (isNaN(humanChoice)) {
      alert("You cancelled the prompt.");
      break;
    }

    if (humanChoice != 1 && humanChoice != 2 && humanChoice != 3) {
      alert("Are you sure you chose a number between 1 and 3?");
      continue;
    } else {
      // Valid input received
      alert(`Success! You entered: ${humanChoice}`);
      isValid = true;
    }
  }

  if (humanChoice === 1) {
    return Rock;
  } else if (humanChoice === 2) {
    return Paper;
  } else if (humanChoice === 3) {
    return Scissors;
  } else {
    return "Hmm Something went wrong.";
  }
}

// Initialize humanScore and computerScore variables allowing them to be modified and accessed by all functions.
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // This if block is run if the users choice beats the computer's
  if (humanChoice === Rock && computerChoice === Scissors) {
    humanScore = humanScore + 1;
    console.log("You win! You chose Rock while the computer chose Scissors.");
  } else if (humanChoice === Paper && computerChoice === Rock) {
    humanScore = humanScore + 1;
    console.log("You win! You chose Paper while the computer chose Rock.");
  } else if (humanChoice === Scissors && computerChoice === Paper) {
    humanScore = humanScore + 1;
    console.log("You win! You chose Scissors while the computer chose Paper.");
  } else {
  }

  // This if block is run if the computer's choice beats the user's
  if (computerChoice === Rock && humanChoice === Scissors) {
    computerScore = computerScore + 1;
    console.log("You lost! The computer chose Rock while you chose Scissors.");
  } else if (computerChoice === Paper && humanChoice === Rock) {
    computerScore = computerScore + 1;
    console.log("You lost! The computer chose Paper while you chose Rock.");
  } else if (computerChoice === Scissors && humanChoice === Paper) {
    computerScore = computerScore + 1;
    console.log("You lost! The computer chose Scissors while you chose Paper.");
  } else {
  }

  // This block is run if the user's choice is the same as the computer's
  if (computerChoice === Rock && humanChoice === Rock) {
    console.log("It's a tie! You and the computer both chose Rock!");
  } else if (computerChoice === Paper && humanChoice === Paper) {
    console.log("It's a tie! You and the computer both chose Paper!");
  } else if (computerChoice === Scissors && humanChoice === Scissors) {
    console.log("It's a tie! You and the computer both chose Scissors!");
  } else {
  }
}

function playGame() {
  let gamesPlayed = 0;

  // While loop defines the number of games to be played
  while (gamesPlayed < 5) {
    // Keeps count of the number of games played
    gamesPlayed = gamesPlayed + 1;

    // Heading
    console.log(`Time to play Round ${gamesPlayed}`);

    // Gets the getHumanChoice() and getComputerChoice() functions
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Logs the Computer and User choices to the console in the current round
    console.log(
      `In this round (Round ${gamesPlayed}) Computer chose: ${computerSelection}`,
    );
    console.log(
      `In this round (Round ${gamesPlayed}) You chose: ${humanSelection}`,
    );

    // Calls playRound() function and starts a round
    const startplayRound = playRound(humanSelection, computerSelection);

    // Logs the value of humanScore and computerScore to the console
    console.log(`Your current Score: ${humanScore}`);
    console.log(`Current Computer Score: ${computerScore}`);

    // Sets condition if the user clicks cancel in the prompt
    if (isNaN(humanSelection)) {
      break;
    }
  }
  // The if block here decides the winner of the game
  if (humanScore > computerScore) {
    console.log(
      `The final scores are: Your Score: ${humanScore} | Computer's Score: ${computerScore}`,
    );
    console.log(`Congratulations!!! You won!!`);
  } else if (computerScore > humanScore) {
    console.log(
      `The final scores are: Your Score: ${humanScore} | Computer's Score: ${computerScore}`,
    );
    console.log(`Unfortunately you've lost!`);
  } else {
    console.log("It's a tie!!");
  }
}
playGame();
