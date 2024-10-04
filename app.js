let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const playgame = (userChoice) => {
  const compChoice = genCompChoice();

  
  let userWin;
  if (userChoice === compChoice) {
    drawGame();
    return;
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userWin = true;
  } else {
    userWin = false;
  }
  showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = 'Game was a draw, play again!';
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! Computer's ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};
