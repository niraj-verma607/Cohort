import React from "react";
import Men from "./components/Men";
import Women from "./components/Women";
import Navbar from "./components/Navbar";

const App = () => {
  const user1 = {
    name: "Niraj",
    age: 21,
    gender: "Male",
  };

  const user2 = {
    name: "Nikita",
    age: 20,
    gender: "Female",
  };

  const user3 = {
    name: "Nitin",
    age: 6,
    gender: "Male",
  };

  const btnClicked = () => {
    console.log("Function Called");
  };
  return (
    <div>
      <Navbar
        title="Niraj"
        color="green"
        links={["Home", "Skills", "Projects", "Contact"]}
      />
      {user1.gender == "Male" ? user3.age > 8 ? <Men /> : <Women /> : <Women />}

      <button
        className="active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2"
        onClick={btnClicked}
      >
        Download Now !
      </button>
    </div>
  );
};

export default App;
