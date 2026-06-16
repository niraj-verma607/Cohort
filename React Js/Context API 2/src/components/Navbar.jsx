import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = () => {
  const data = useContext(UserDataContext); //useContext(kaha ka data use karna hai) usecontext ek hook hai jisme context ka parameter pass hota hai jisko hume use karna hota hai us components mai

  // console.log(data)
  return (
    <div className="w-full bg-emerald-600">
      <h1>This is Navbar</h1>
      {data}
    </div>
  );
};

export default Navbar;
