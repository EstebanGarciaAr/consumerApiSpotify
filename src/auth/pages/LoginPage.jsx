import { useContext } from "react";
import { useSpotifyAuth } from "../../apiConsumer/hooks/useSpotifyAuth";
import { getSpotifyAuthUrl } from "../../apiConsumer/helpers/spotifyAuthUrl";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/login/LoginForm";
import "../../auth/components/login/styles/login.css";

export const LoginPage = () => {
  const { 
    userState: { errorMessage }, 
    login, 
    loginGoogle, 
    loginFacebook, 
    dispatch 
  } = useContext(UserContext);

  useSpotifyAuth(dispatch);

  const onLoginUser = ({ email, password }) => {
    login({ email, password });
  };

  const onLoginWithGoogle = () => loginGoogle();
  const onLoginWithFacebook = () => loginFacebook();

  const onLoginWithSpotify = async () => {
  const authUrl = await getSpotifyAuthUrl();
  window.location.href = authUrl;
};


  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm 
          onLogin={onLoginUser}
          onGoogleLogin={onLoginWithGoogle}
          onFacebookLogin={onLoginWithFacebook}
          onSpotifyLogin={onLoginWithSpotify}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};
