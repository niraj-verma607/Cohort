import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const user = "Niraj";
  return (
    <div className="context-div">
      <UserDataContext.Provider value={user}>
        {props.children}
      </UserDataContext.Provider>
      {/* context provider karte waqt hame value ko pass karna hota hai */}
    </div>
  );
};

export default UserContext;
