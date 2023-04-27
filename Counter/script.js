const button = document.querySelector(".buttons");
const count = document.querySelector(".count");

let counter = 0;

const incrementCounter = () => {
  counter++;
  console.log(counter);
};
const decrementCounter = () => {
  counter--;
  console.log(counter);
};

const clickHandler = (event) => {
  console.log(event.target);
  const clicked = event.target;
  console.log(clicked.classList);
  clicked.classList.contains("increment-button")
    ? incrementCounter()
    : decrementCounter();

  count.innerHTML = counter;
};
button && count
  ? button.addEventListener("click", clickHandler)
  : console.error("Could not find button or count element");
