import React, { useEffect, useState } from "react";
import axios from "axios";
const RandomUser = () => {
  const [username, setUsername] = useState("");
  const [num, setNum] = useState(0);
  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setUsername(
      response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last
    );
  };
  useEffect(() => {
    getData();
  }, [num]);

  // Jab jab num ka value change hoga tab tab api call hoga side stack me
  return (
    <div className="px-5 py-6 flex flex-col gap-5">
      <h2 className="text-emerald-600">{username}</h2>

      <h4>User Count : {num}</h4>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className="px-3 py-3 ml-3 bg-red-500 text-white rounded-2xl"
      >
        {" "}
        Click Here
      </button>
    </div>
  );
};

export default RandomUser;
