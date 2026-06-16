let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "The only way to do great work is to love what you do.",
  "Be yourself; everyone else is already taken.",
  "In the end, we only regret the chances we didn’t take.",
  "You are never too old to set another goal or to dream a new dream.",
  "The best way to predict the future is to create it.",
  "Do one thing every day that scares you.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Life is what happens when you're busy making other plans.",
  "It’s not whether you get knocked down, it’s whether you get up.",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");

  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let rot = Math.random() * 360;
  let scl = Math.random() * 2;

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let a = Math.floor(Math.random() * arr.length);

  h1.innerHTML = arr[a];

  h1.style.position = "absolute";

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl;
  h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;

  main.appendChild(h1);
});
