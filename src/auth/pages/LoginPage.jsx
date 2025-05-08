import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/login/LoginForm";
import "../../auth/components/login/styles/login.css";

export const LoginPage = () => {
  const { userState: { errorMessage }, login, loginGoogle, loginFacebook } = useContext(UserContext);

  const onLoginUser = ({ email, password }) => {
    return login({ email, password });
  };

  const onLoginWithGoogle = () =>{
    return loginGoogle();
  }

  const onLoginWithFacebook = () => {
    return loginFacebook();
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm 
        onLogin={onLoginUser}
        onGoogleLogin = {onLoginWithGoogle}
        onFacebookLogin = {onLoginWithFacebook}
        errorMessage={errorMessage} 
        />
      </div>
    </div>
  );
};


