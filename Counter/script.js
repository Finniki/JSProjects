const button = document.querySelector(".buttons");

let counter = 0;

const add = () => {
  counter++;
  console.log(counter);
};
const minus = () => {
  counter--;
  console.log(counter);
};

const clickHandler = (event) => {
  console.log(event.target);
  const clicked = event.target;
  console.log(clicked.classList);
  //   console.log(clicked, clicked.class, clicked);
};

button.addEventListener("click", clickHandler);
