let img = document.querySelector("img");
let love = document.querySelector("#love");
let likeBtn = document.querySelector("#likebtn");

let isLiked = false;

// Function to play heart animation
function playHeartAnimation() {
  love.style.opacity = 1;
  love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    love.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)";
  }, 600);

  setTimeout(() => {
    love.style.opacity = 0;
  }, 800);

  setTimeout(() => {
    love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
  }, 1000);
}

// Double Click Like Feature

img.addEventListener("dblclick", function () {
  isLiked = true;

  likeBtn.classList.remove("ri-heart-line");
  likeBtn.classList.add("ri-heart-fill");
  likeBtn.style.color = "red";

  playHeartAnimation();
});

// Manual Click Like Button

likeBtn.addEventListener("click", function () {
  isLiked = !isLiked;

  if (isLiked) {
    likeBtn.classList.remove("ri-heart-line");
    likeBtn.classList.add("ri-heart-fill");
    likeBtn.style.color = "red";
    playHeartAnimation(); // play animation only when liking
  } else {
    likeBtn.classList.remove("ri-heart-fill");
    likeBtn.classList.add("ri-heart-line");
    likeBtn.style.color = "black";
  }
});
