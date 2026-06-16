import React from "react";

const UserCard = (props) => {
  console.log(props);
  return (
    <div className="bg-emerald-500 rounded-2xl p-5 w-100 flex flex-col gap-3">
      <h2 className="text-2xl">
        <i className="ri-user-3-line"></i>
        <span className="ml-2 font-semibold">{props.data.name}</span>
      </h2>

      <h2 className="text-2xl">
        <i className="ri-mail-line"></i>
        <span className="ml-2">{props.data.email}</span>
      </h2>

      <h2 className="text-2xl">
        <i className="ri-phone-line"></i>
        <span className="ml-2">{props.data.mobile}</span>
      </h2>
    </div>
  );
};

export default UserCard;
