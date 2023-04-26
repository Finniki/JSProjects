const highScore = document.querySelector(".high-score");
const gameScore = document.querySelector(".game-score");
const guessBox = document.querySelector(".guess");
const feedback = document.querySelector(".feedback-div");

// Input a number
const clickHandler = (event) => {
  const guess = event.target.value;
  console.log(guess);
};
//check the number
// const checkGuess = () = {}
// give feedback; too high, too low, correct
//adjust the score/
//at tjhe end of the game, adjust the highsscore.
