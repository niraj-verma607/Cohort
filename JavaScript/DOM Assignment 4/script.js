let grow = 0;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
let timer = document.querySelector("#timer");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  let num = 50 + Math.floor(Math.random() * 50);

  console.log("Your file will be downloaded in", num / 10, "seconds");

  var int = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
    timer.innerHTML = `Downloaded in <span>${num / 10}</span> seconds`;
  }, num * 100);
});
