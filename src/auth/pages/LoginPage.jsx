import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/login/LoginForm";
import "../../auth/components/login/styles/login.css";

export const LoginPage = () => {
  const { userState: { errorMessage }, login, loginGoogle, loginFacebook } = useContext(UserContext);

  const onLoginUser = ({ email, password }) => {
    return login({ email, password });
  };

  const onLoginWithGoogle = () => {
    return loginGoogle();
  };

  const onLoginWithFacebook = () => {
    return loginFacebook();
  };

  const onLoginWithSpotify = () => {
    const clientId = "8f253d07d35c44f9b78250440688ffe9";
    const redirectUri = "https://0cd7-38-156-230-137.ngrok-free.app/CallBack";
    const scopes = ["user-read-private", "user-read-email"].join(" ");

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
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
