import React from "react";
import Card from "./components/Card";

const App = () => {
  const profiles = [
    {
      fullName: "Tony Stark",
      bio: "Genius inventor, tech visionary, and billionaire with a passion for innovation.",
      bannerImg:
        "https://cdn.marvel.com/content/2x/002irm_ons_mas_mob_01_0.jpg",
      profileImage:
        "https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
      likeCount: "92.4K",
      postCount: "1,248",
      viewsCount: "510.7K",
      isFollowed: false,
    },
    {
      fullName: "Bruce Wayne",
      bio: "Strategic thinker by day, vigilante by night, driven by justice and discipline.",
      bannerImg:
        "https://images.prismic.io/batman-escape/Z1bE0ZbqstJ98N7H_christian-bale-bruce-wayne.webp?auto=format,compress",
      profileImage:
        "https://sites.rutgers.edu/firesteinlab/wp-content/uploads/sites/42/2017/12/3859882-6269102771-Bruce.jpg",
      likeCount: "88.1K",
      postCount: "964",
      viewsCount: "430.2K",
      isFollowed: true,
    },
    {
      fullName: "Peter Parker",
      bio: "Curious mind balancing creativity, responsibility, and a love for learning.",
      bannerImg:
        "https://cdn.marvel.com/content/2x/005smp_ons_mas_mob_01_0.jpg",
      profileImage:
        "https://hips.hearstapps.com/hmg-prod/images/msm2-reveal-attack-4k-legal-65284680c18ba.jpg?crop=0.490xw:0.872xh;0.115xw,0&resize=1120:*",
      likeCount: "64.7K",
      postCount: "712",
      viewsCount: "298.9K",
      isFollowed: false,
    },
    {
      fullName: "Steve Rogers",
      bio: "Calm leader focused on values, teamwork, and doing what’s right.",
      bannerImg: "https://cdn.marvel.com/content/2x/003cap_ons_mas_mob_02.jpg",
      profileImage:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/9b9970a2_0a28_4fcf_a24b_1498faaaa0c0.jpeg",
      likeCount: "79.3K",
      postCount: "856",
      viewsCount: "367.5K",
      isFollowed: true,
    },
  ];

  return (
    <div className="flex-wrap gap-10 p-10 min-h-screen flex items-center justify-center bg-gray-100">
      {profiles.map((elem, idx) => {
        return <Card user={elem} key={idx} />;
      })}
    </div>
  );
};

export default App;
