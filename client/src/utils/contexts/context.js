import React from "react";
import PropTypes from "prop-types";

const AuthStateContext = React.createContext();

export const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  return <AuthStateContext.Provider>{children}</AuthStateContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
