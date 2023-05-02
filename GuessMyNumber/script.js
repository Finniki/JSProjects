const highScore = document.querySelector(".high-score");
const gameScore = document.querySelector(".score");
const guessBox = document.querySelector(".guess");
const guessBtn = document.querySelector(".guess-btn");
const feedback = document.querySelector(".feedback-msg");
const restartBtn = document.querySelector(".restart");

// Input a number
let secretNumber = Math.round(Math.random() * 10);
const correct = "You have guessed correctly!";
let message;
let score = 20;
let gameHighScore = 0;
let guesses = 0;

const validateInput = (input, min, max) => {
  if (isNaN(input)) {
    return false; // input is not a number
  }
  if (input < min || input > max) {
    return false; // input is outside of the allowed range
  }
  return true; // input is valid
};

const checkInput = (guess) => {
  if (guess === secretNumber) {
    message = `Congratulations!! You have guessed correctly! 🎉🎉 It took you ${guesses} ${
      guesses > 1 ? "guesses" : "guess"
    }`;
    score > gameHighScore ? (gameHighScore = score) : "";
  } else if (guess < secretNumber) {
    gameScore.textContent = --score;
    message = "Too low! 📉 Guess higher!!";
  } else if (guess > secretNumber) {
    gameScore.textContent = --score;
    message = "Too high! 📈 Guess lower!!";
  }
};

const clickHandler = (event) => {
  const guess = +guessBox.value;
  guessBox.value = "";
  guesses++;
  checkInput(guess);
  feedback.textContent = message;
  highScore.textContent = gameHighScore;
};

const restartHandler = () => {
  score = 20;
  guesses = 0;
  gameScore.innerHTML = score;
  feedback.textContent = "";
  secretNumber = Math.round(Math.random() * 10);
};

guessBtn.addEventListener("click", clickHandler);
restartBtn.addEventListener("click", restartHandler);
