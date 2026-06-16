import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [position, setPosition] = useState("");
  const [desc, setDesc] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers];
    // oldUsers.push({ name, url, position, desc });

    // setAllUsers(oldUsers);

    //Or we can write

    setAllUsers([...oldUsers, { name, url, position, desc }]);

    console.log(oldUsers);
    console.log("Form Submitted");
    // console.log({ name, url, position, desc });
    setName("");
    setUrl("");
    setPosition("");
    setDesc("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    copyUsers.splice(idx, 1);

    setAllUsers(copyUsers);
  };

  return (
    <div className="h-full min-h-screen bg-black text-white">
      <form
        className="flex flex-wrap px-2 py-2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded  m-2 w-[45%]"
          type="text"
          placeholder="Enter Image Url"
        />
        <input
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded  m-2 w-[45%]"
          type="text"
          placeholder="Enter Position"
        />
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded  m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />
        <button className="px-5 py-2 rounded  m-2 w-[75%] bg-emerald-500 active:scale-95">
          Create User
        </button>
      </form>

      <div className="flex flex-wrap px-4 py-10 gap-5 ">
        {allUsers.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              idx={idx}
              elem={elem}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
