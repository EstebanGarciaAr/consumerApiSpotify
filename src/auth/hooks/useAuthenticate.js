import { authTypes } from "../types/authTypes";
import {
  loginUser,
  authWithGoogle,
  authWithFacebook,
} from "../../firebase/provider";
import { authenticationHelper } from "../helpers/authenticationHelper";

export const useAuthenticate = (dispatch) => {
  const login = async ({ email, password }) => {
    const authResponse = await loginUser(email, password);
    return authenticationHelper(authResponse, dispatch);
  };

  const loginGoogle = async () => {
    const authResponse = await authWithGoogle();
    return authenticationHelper(authResponse, dispatch);
  };

  const loginFacebook = async () => {
    const authResponse = await authWithFacebook();
    return authenticationHelper(authResponse, dispatch);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    const action = {
      type: authTypes.logout,
    };
    dispatch(action);
  };

  return { login, loginGoogle, loginFacebook, logout };
};
