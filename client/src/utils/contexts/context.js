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
  const [user, setUser] = useState({ username: "", auth: true });

  const login = (username) => {
    setUser(() => ({
      username: username,
      auth: true,
    }));
  };
  const logout = () => {
    setUser(() => ({
      username: "",
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
