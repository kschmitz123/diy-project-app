import React, { useState } from "react";
import PropTypes from "prop-types";

const UserContext = React.createContext();

export const useUserState = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: true });

  const login = (name) => {
    setUser(() => ({
      name: name,
      auth: true,
    }));
  };
  const logout = () => {
    setUser(() => ({
      name: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
