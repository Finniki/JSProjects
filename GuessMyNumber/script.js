const highScore = document.querySelector(".high-score");
const gameScore = document.querySelector(".game-score");
const guessBox = document.querySelector(".guess");
const guessBtn = document.querySelector(".btn");
const feedback = document.querySelector(".feedback-div");

// Input a number
const secretNumber = Math.round(Math.random() * 10);
const correct = "You have guessed correctly!";
let message;
let score = 20;
let guesses = 0;

const clickHandler = (event) => {
  const guess = guessBox.value;
};
guessBtn.addEventListener("click", clickHandler);
//check the number
// const checkGuess = () = {}
// give feedback; too high, too low, correct
//adjust the score/
//at tjhe end of the game, adjust the highsscore.
