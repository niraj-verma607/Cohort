import React from "react";

const Navbar = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="bg-emerald-600 text-white flex items-center justify-between px-8 py-3"
    >
      <h2>{props.title}</h2>
      <div className="flex gap-10">
        {props.links.map((elem, idx) => {
          return <h4 key={idx}>{elem}</h4>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
