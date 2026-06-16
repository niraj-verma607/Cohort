import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("Niraj");
  const [num, setNum] = useState(0);

  function changeUser() {
    setUser("Nikita");
  }
  function IncNum() {
    setNum(num + 1);
  }

  function DecNum() {
    setNum(num - 1);
  }

  function JumpNum() {
    setNum(num + 10);
  }

  function Reset() {
    setNum(0);
  }

  function RandomNum() {
    let random = Math.floor(Math.random() * 100);
    setNum(random);
  }

  return (
    <div className="py-10 px-10">
      <h1 className="bg-red-600 py-5 px-2 w-20 text-white text-xl text-center">
        {user}
      </h1>
      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5 mb-5"
        onClick={changeUser}
      >
        Change User
      </button>

      <h1 className="bg-red-600 py-5 px-2 w-20 text-white text-xl text-center">
        {num}
      </h1>

      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5 mx-3"
        onClick={Reset}
      >
        Reset
      </button>

      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5"
        onClick={IncNum}
      >
        Increase Number
      </button>

      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5 mx-3"
        onClick={DecNum}
      >
        Decrease Number
      </button>

      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5"
        onClick={JumpNum}
      >
        Jump Number by 10
      </button>

      <button
        className="bg-emerald-600 px-2 py-5 text-white rounded mt-5 mx-3"
        onClick={RandomNum}
      >
        Set Random Number
      </button>
    </div>
  );
};

export default App;
