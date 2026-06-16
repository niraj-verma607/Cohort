import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {
  const data = useContext(UserDataContext)
  return (
    <div className="absolute bottom-0 w-screen  bg-blue-700">
      <h1>This is Footer</h1>
      {data}
    </div>
  );
};

export default Footer;
