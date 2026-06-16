const reels = [
  {
    username: "mindsetwitharjun",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Small steps every day lead to massive results.",
    video: "./video/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    isMuted: true,
  },
  {
    username: "growthwithrahul",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "Work on yourself—your future self is counting on you.",
    video: "./video/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    isMuted: true,
  },
  {
    username: "risewithrishabh",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "If you get tired, learn to rest—not quit.",
    video: "./video/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    isMuted: true,
  },
  {
    username: "mindwitharyan",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "Your journey is your strength. Trust the process.",
    video: "./video/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    isMuted: true,
  },
  {
    username: "dailyinspirearjun",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "What you think, you become. Choose thoughts wisely.",
    video: "./video/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
    isMuted: true,
  },
  {
    username: "fitnesswithaditya",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "One workout. One decision. One change.",
    video: "./video/video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    isMuted: true,
  },
  {
    username: "motivationbykarthik",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "Your mindset decides your success. Protect it.",
    video: "./video/video7.mp4",
    userprofile: "https://images.unsplash.com/photo-1502872364588-894d7d6f446d",
    isMuted: true,
  },
  {
    username: "musicwithrohan",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Peace is found in the quiet moments.",
    video: "./video/video8.mp4",
    userprofile: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    isMuted: true,
  },
  {
    username: "techmindsetvishal",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The best investment is improving yourself.",
    video: "./video/video9.mp4",
    userprofile: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    isMuted: true,
  },
  {
    username: "learnwithmanav",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "Someday is not a day of the week. Start now.",
    video: "./video/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    isMuted: true,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var UI = "";
  reels.forEach(function (elem, idx) {
    UI =
      UI +
      `<div class="reel">
          <video autoplay loop ${elem.isMuted ? "muted" : ""} src="${
        elem.video
      }"></video>
      <div class="mute" id="${idx}">
      ${
        elem.isMuted
          ? `<i class="ri-volume-mute-fill"></i> `
          : `<i class="ri-volume-up-fill"></i>`
      }
      </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button id="${idx}" class="follow" >${
        elem.isFollowed ? "Unfollow" : "Follow"
      }</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id="${idx}" class="like">
              <h4 class="like-icon icon">${
                elem.isLiked
                  ? '<i class="love ri-heart-3-fill"></i>'
                  : '<i class="ri-heart-3-line"></i>'
              }</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`;
  });

  allReels.innerHTML = UI;
}

addData();

allReels.addEventListener("click", (dets) => {
  // console.log(dets.target)
  // console.log(reels[dets.target.id]);

  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }
    addData();
  }
});
