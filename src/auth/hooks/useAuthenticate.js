import { authTypes } from "../types/authTypes";
import { loginUser, authWithGoogle } from "../../firebase/provider"
import { authenticationHelper } from "../helpers/authenticationHelper";

export const useAuthenticate = (dispatch) => {
    //login

    const login = async ({email, password}) => {
        const authResponse = await loginUser(email, password);
        return authenticationHelper(authResponse, dispatch)
    };

    //login with google

    const loginGoogle = async () => {
        const authResponse = await authWithGoogle();
        return authenticationHelper(authResponse, dispatch)
    }

    //logout

    const logout = () => {
        const action = {
            type: authTypes.logout
        }
        dispatch(action);
    };
    
    return {login, loginGoogle, logout};
}