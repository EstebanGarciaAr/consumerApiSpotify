import { useForm } from "../../../hooks/useForm";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../login/styles/login.css";

const initialForm = { email: "", password: "" };

export const LoginForm = ({ onLogin }) => {
  const { email, password, onInputChange } = useForm(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email.";

    if (!password) newErrors.password = "Please enter your password.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) onLogin({ email, password });
  };

  const handleRegister = () => {
    navigate("/Register", { replace: true });
  };

  return (
    <div className="card-login">
      <div className="logo text-center mb-3">
        <img src="/image/spotifyIcon.png" alt="Logo" width="60" height="50" className="me-2" />
      </div>

      <SocialLoginButtons />

      <div className="texto-O d-flex align-items-center my-3">
        <hr className="flex-grow-1" />
        <span className="px-2">O</span>
        <hr className="flex-grow-1" />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
          className="form-control"
          placeholder="Email address"
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="mb-3">
        <input
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          className="form-control"
          placeholder="Password"
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}
      </div>

      <div className="form-check my-2">
        <input className="form-check-input" type="checkbox" id="remember" />
        <label className="form-check-label" htmlFor="remember">
          Remember me
        </label>
      </div>

      <div className="mb-2">
        <button
          className="btn btn-primary btn-block w-100"
          style={{ border: "0", backgroundColor: "white", color: "black" }}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>

      <button className="login-button w-100" onClick={handleLogin}>
        LOG IN
      </button>

      <div className="texto-contraseña text-center mt-2">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  );
};
