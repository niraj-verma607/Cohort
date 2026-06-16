var arr = [
  [
    {
      team: "CSK",
      fullName: "Chennai Super Kings",
      captain: "MS Dhoni",
      NoOfTrophies: 5,
      primary: "yellow",
      secondary: "blue",
      imageSource:
        "https://4kwallpapers.com/images/wallpapers/chennai-super-kings-indian-premier-league-ipl-ipl-2021-3440x1440-4938.png",
    },
    {
      team: "MI",
      fullName: "Mumbai Indians",
      captain: "Hardik Pandya",
      NoOfTrophies: 5,
      primary: "blue",
      secondary: "gold",
      imageSource:
        "https://4kwallpapers.com/images/wallpapers/mumbai-indians-indian-premier-league-ipl-ipl-2021-cricket-3440x1440-4934.png",
    },
    {
      team: "KKR",
      fullName: "Kolkata Knight Riders",
      captain: "Ajinkya Rahane",
      NoOfTrophies: 3,
      primary: "purple",
      secondary: "gold",
      imageSource:
        "https://wallpapers.com/images/hd/kolkata-knight-riders-background-954yo42vxyj6swvw.jpg",
    },
    {
      team: "RCB",
      fullName: "Royal Challengers Bengaluru",
      captain: "Rajat Patidar",
      NoOfTrophies: 1,
      primary: "red",
      secondary: "black",
      imageSource: "https://4kwallpapers.com/images/walls/thumbs_2t/4937.png",
    },
    {
      team: "SRH",
      fullName: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      NoOfTrophies: 1,
      primary: "orange",
      secondary: "black",
      imageSource:
        "https://wallpapers.com/images/featured/sunrisers-hyderabad-die68jcmuvtg8iir.jpg",
    },
    {
      team: "PBKS",
      fullName: "Punjab Kings",
      captain: "Shreyas Iyer",
      NoOfTrophies: 0,
      primary: "crimson",
      secondary: "silver",
      imageSource:
        "https://d1u68zc0161z8s.cloudfront.net/wp-content/uploads/2022/05/Punjab-Kings-IPL-Dashboard-l-Radarr.png",
    },
    {
      team: "RR",
      fullName: "Rajasthan Royals",
      captain: "Sanju Samson",
      NoOfTrophies: 1,
      primary: "sky blue",
      secondary: "gold",
      imageSource:
        "https://wallpapers.com/images/featured/rajasthan-royals-rmo60e6bh39o49zg.jpg",
    },
    {
      team: "GT",
      fullName: "Gujarat Titans",
      captain: "Shubman Gill",
      NoOfTrophies: 1,
      primary: "turquoise",
      secondary: "navy",
      imageSource:
        "https://img.jagranjosh.com/images/2023/March/3132023/gujarat-titans-players-list.webp",
    },
    {
      team: "DC",
      fullName: "Delhi Capitals",
      captain: "Axar Patel",
      NoOfTrophies: 0,
      primary: "blue",
      secondary: "red",
      imageSource: "https://4kwallpapers.com/images/walls/thumbs_2t/4936.png",
    },
    {
      team: "LSG",
      fullName: "Lucknow Super Giants",
      captain: "Rishabh Pant",
      NoOfTrophies: 0,
      primary: "lime green",
      secondary: "black",
      imageSource:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b8cade148673609.Y3JvcCwxMjAwLDkzOCwwLDI5.png",
    },
  ],
];

let btn = document.querySelector("button");
let main = document.querySelector("main");
let team = document.querySelector(".team");
let teamName = document.querySelector(".teamName");
let fullName = document.querySelector(".fullName");
let captainName = document.querySelector(".captainName");
let trophies = document.querySelector(".trophies");

btn.addEventListener("click", function () {
  let winner = arr[0][Math.floor(Math.random() * arr[0].length)];

  console.log(winner);

  teamName.innerHTML = "Team: " + winner.team;
  fullName.innerHTML = "Full Name: " + winner.fullName;
  captainName.innerHTML = "Captain: " + winner.captain;

  trophies.innerHTML = "No of Trophies: " + winner.NoOfTrophies;
  main.style.backgroundImage = `url(${winner.imageSource})`;
  main.style.backgroundColor = winner.primary;
});
