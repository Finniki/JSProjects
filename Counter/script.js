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
  if (clicked.classList.contains("btn-add")) {
    console.log("Positive click!");
    incrementCounter();
  } else if (clicked.classList.contains("btn-sub")) {
    console.log("minus");
    decrementCounter();
  }

  count.innerHTML = counter;
};

button.addEventListener("click", clickHandler);
