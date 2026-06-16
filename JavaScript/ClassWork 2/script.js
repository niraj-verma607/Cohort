let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let div = document.createElement("div"); //div element created

  //random position
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  //random color values
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  //random rotation value
  let r = Math.floor(Math.random() * 360);

  div.style.left = x + "%";
  div.style.top = y + "%";

  div.style.width = "100px";
  div.style.height = "100px";
  div.style.position = "absolute";

  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  div.style.rotate = r + "deg";

  main.appendChild(div);
});
