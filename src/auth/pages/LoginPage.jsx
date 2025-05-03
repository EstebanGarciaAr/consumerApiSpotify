import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/login/LoginForm";
import "../../auth/components/login/styles/login.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const onLoginUser = ({ email, password }) => {
    login({ email, password });
    navigate("/", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm onLogin={onLoginUser} />
      </div>
    </div>
  );
};


