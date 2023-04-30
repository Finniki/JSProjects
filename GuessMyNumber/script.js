const highScore = document.querySelector(".high-score");
const gameScore = document.querySelector(".score");
const guessBox = document.querySelector(".guess");
const guessBtn = document.querySelector(".guess-btn");
const feedback = document.querySelector(".feedback-msg");
const restartBtn = document.querySelector(".restart");

// Input a number
const secretNumber = Math.round(Math.random() * 10);
const correct = "You have guessed correctly!";
let message;
let score = 20;
let guesses = 0;

const clickHandler = (event) => {
  const guess = guessBox.value;
  guessBox.value = "";
  guesses++;
  if (+guess === secretNumber) {
    message = `Congratulations!! You have guessed correctly! 🎉🎉 It took you ${guesses} ${
      guesses > 1 ? "guesses" : "guess"
    }`;
  } else if (+guess < secretNumber) {
    gameScore.textContent = --score;
    message = "Too low! 📉 Guess higher!!";
  } else if (+guess > secretNumber) {
    gameScore.textContent = --score;
    message = "Too high! 📈 Guess lower!!";
  }
  feedback.textContent = message;
  console.log(message, score);
};

const restartHandler = () => {
  score = 20;
  gameScore.innerHTML = score;
  feedback.textContent = "";
};

guessBtn.addEventListener("click", clickHandler);
restartBtn.addEventListener("click", restartHandler);
//check the number
// const checkGuess = () = {}
// give feedback; too high, too low, correct
//adjust the score/
//at tjhe end of the game, adjust the highsscore.
