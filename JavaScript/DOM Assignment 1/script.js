const counter = document.querySelector(".counter-container h3");
const incrementBtn = document.querySelector(".increase-btn");
const decrementBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");

let count = 0;
counter.textContent = count;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
