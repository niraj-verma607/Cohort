import React, { useState } from "react";
import UserCard from "./UserCard";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [allUser, setAllUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(name, email, mobile);
    const oldUsers = [...allUser];
    // oldUsers.push({ name, email, mobile });

    setAllUser([...oldUsers, { name, email, mobile }]);

    console.log(allUser);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col  gap-5 w-3xl bg-emerald-600 px-10 py-8 rounded-2xl"
      >
        <input
          className="bg-gray-600 text-white px-2 py-2 rounded"
          type="text"
          value={name}
          placeholder="Enter Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="bg-gray-600 text-white px-2 py-2 rounded"
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="bg-gray-600 text-white px-2 py-2 rounded"
          type="number"
          placeholder="Enter Mobile Number"
          required
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <button className="px-5 py-3 bg-blue-700 w-fit text-white rounded-2xl">
          Submit
        </button>
      </form>
      <div className="flex gap-3 flex-wrap justify-center">
        {allUser.map((elem, idx) => {
          return <UserCard key={idx} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default Form;
