import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <div className="w-[320px] rounded-3xl bg-white shadow-xl overflow-hidden">
        <div className="relative h-36 ">
          <img
            className="h-36 w-full object-cover"
            src={props.user.bannerImg}
            alt=""
          />
          <button className="absolute top-4 right-4 px-4 py-1 text-sm rounded-full bg-white shadow">
            {props.user.isFollowed ? "Unfollow" : "Follow + "}
          </button>
        </div>

        <div className="absolute translate-x-30 flex justify-center -mt-12">
          <img
            src={props.user.profileImage}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        <div className="px-6 text-center mt-15">
          <h2 className="text-xl font-semibold">{props.user.fullName}</h2>
          <p className="text-sm text-gray-500 mt-1">{props.user.bio}</p>

          {/* Stats */}
          <div className="flex justify-between mt-6">
            <div>
              <h3 className="font-semibold">{props.user.likeCount}</h3>
              <p className="text-xs text-gray-400">Likes</p>
            </div>
            <div>
              <h3 className="font-semibold">{props.user.postCount}</h3>
              <p className="text-xs text-gray-400">Posts</p>
            </div>
            <div>
              <h3 className="font-semibold">{props.user.viewsCount}</h3>
              <p className="text-xs text-gray-400">Views</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-6 mb-6 text-gray-500">
            <i className="ri-instagram-line text-xl cursor-pointer"></i>
            <i className="ri-twitter-x-line text-xl cursor-pointer"></i>
            <i className="ri-dribbble-line text-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
