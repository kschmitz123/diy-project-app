import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const isAuthorized = Cookies.get("session") || null;

  if (isAuthorized) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};
