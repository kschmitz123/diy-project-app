import React, { useState } from "react";
import PropTypes from "prop-types";
import { getSessionCookie } from "./cookies";
import Cookies from "js-cookie";

const UserContext = React.createContext();

export const useUserState = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getSessionCookie());

  const login = (username) => {
    setUser(() => ({
      username: username,
    }));
  };

  const logout = () => {
    Cookies.remove("session");
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
