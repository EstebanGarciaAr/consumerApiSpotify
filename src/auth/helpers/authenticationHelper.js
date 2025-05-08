import { authTypes } from "../types/authTypes";

export const authenticationHelper = (authResponse, dispatch) => {
    const { ok, uid, photoURL, displayName, errorMessage, email } = authResponse;

    if (!ok) {
        dispatch({
            type: authTypes.errors,
            payload: { errorMessage },
        });
        return false;
    }

    const userPayload = { email, uid, displayName, photoURL };

    localStorage.setItem("user", JSON.stringify(userPayload));

    dispatch({
        type: authTypes.login,
        payload: userPayload,
    });

    return true;
};