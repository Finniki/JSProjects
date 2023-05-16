const button = document.querySelector(".buttons");
const count = document.querySelector(".count");

let counter = 0;

const incrementCounter = () => {
  counter++;
};
const decrementCounter = () => {
  counter--;
};

const clickHandler = (event) => {
  const clicked = event.target;
  clicked.classList.contains("increment-button")
    ? incrementCounter()
    : decrementCounter();

  count.innerHTML = counter;
};
button && count
  ? button.addEventListener("click", clickHandler)
  : console.error("Could not find button or count element");
