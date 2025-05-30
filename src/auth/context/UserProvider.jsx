import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { authReducer } from "../reducers/authReducer";
import { useAuthenticate } from "../hooks/useAuthenticate";

const authInitialState = {
  logged: false,
  user: null,
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return {
      logged: true,
      errorMessage: null,
      user,
    };
  }
  return authInitialState;
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(authReducer, authInitialState, init);
  const { login, logout, loginGoogle, loginFacebook } = useAuthenticate(dispatch);

  return (
    <UserContext.Provider value={{ userState, dispatch, login, logout, loginGoogle, loginFacebook }}>
      {children}
    </UserContext.Provider>
  );
};
