let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

let system = h2.innerText;
let access = h3.innerText;
let welcome = p.innerText;

let textAnimation;
let iteration = 0;

const characters = "ABCDEFGHUJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function matrixText(elem, text) {
  //   console.log("running");

  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) return char;
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");

  elem.innerText = str;

  iteration += 0.25;

  if (iteration >= text.length) {
    clearInterval(textAnimation);
  }
}

h2.addEventListener("mouseover", () => {
  //   console.log("hover h2");
  h2.style.backgroundColor = "rgba(11, 123, 17, 0.612)";

  iteration = 0; // reset every time mouse enters
  textAnimation = setInterval(() => {
    matrixText(h2, system);
  }, 30);
});

h3.addEventListener("mouseover", () => {
  iteration = 0; // reset every time mouse enters
  //   console.log("hover h3");
  textAnimation = setInterval(() => {
    matrixText(h3, access);
  }, 50);
});

p.addEventListener("mouseover", () => {
  iteration = 0; // reset every time mouse enters
  //   console.log("hover p");
  textAnimation = setInterval(() => {
    matrixText(p, welcome);
  }, 30);
});
