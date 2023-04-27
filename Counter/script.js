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
  //   console.log(clicked, clicked.class, clicked);
  clicked.classList.contains("increment-button")
    ? incrementCounter()
    : decrementCounter();

  count.innerHTML = counter;
};
if (button && count) {
  button.addEventListener("click", clickHandler);
} else {
  console.error("Could not find button or count element");
}
