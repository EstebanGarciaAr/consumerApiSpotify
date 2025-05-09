import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/login/LoginForm";
import "../../auth/components/login/styles/login.css";
import { useLocation } from "react-router-dom";

export const LoginPage = () => {
  const { userState: { errorMessage }, login, loginGoogle, loginFacebook } = useContext(UserContext);

  const location = useLocation();
  const successMessage = location.state?.successMessage;

  const [visibleMessage, setVisibleMessage] = useState(successMessage);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);


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
    const redirectUri = "https://2b29-2800-484-976f-bb00-acc1-bb52-d403-9396.ngrok-free.app/CallBack";
    const scopes = ["user-read-private", "user-read-email"].join(" ");

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          {visibleMessage && ( 
            <div className="alert alert-success text-center mb-3" role="alert">
              {visibleMessage}
            </div>
          )}
          <LoginForm 
            onLogin={onLoginUser}
            onGoogleLogin={onLoginWithGoogle}
            onFacebookLogin={onLoginWithFacebook}
            onSpotifyLogin={onLoginWithSpotify}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </>
  );
};
