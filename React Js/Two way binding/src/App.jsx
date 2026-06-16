import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(""); //Input ki value ko manipulate karne ke liye useState ka use karte hai

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit Ho gaya");
    const oldUsers = [...allUsers];
    oldUsers.push(name);

    setAllUsers(oldUsers);

    console.log(oldUsers);
    setName(""); //Form submit hone par input filed empty ho jayga
  };

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          required
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value); //Two Way Binding
          }}
        />
        <button>Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return <h1 key={idx}>{elem}</h1>;
      })}
    </div>
  );
};

export default App;
