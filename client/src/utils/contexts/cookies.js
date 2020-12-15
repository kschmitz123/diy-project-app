import Cookies from "js-cookie";

export const setSessionCookie = (username) => {
  Cookies.set("session", username, { expires: 1 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");

  return sessionCookie;
};
