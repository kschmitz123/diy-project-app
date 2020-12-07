import { postUser } from "../utils/api/users";

export const loginUser = async (dispatch, payload) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const data = await postUser(payload);
    if (data.username) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ tyle: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
};
