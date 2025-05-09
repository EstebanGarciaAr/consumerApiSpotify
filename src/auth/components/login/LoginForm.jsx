import { useForm } from "../../../hooks/useForm";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../login/styles/login.css";
import { loginHelper } from "../../helpers/loginHelper";

const initialForm = { email: "", password: "" };

export const LoginForm = ({ onLogin, onGoogleLogin, onFacebookLogin, onSpotifyLogin, errorMessage }) => {
  const { email, password, onInputChange } = useForm(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email.";

    if (!password) newErrors.password = "Please enter your password.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const manageLogin = async () => {
    if (validateForm()) {
      await loginHelper(() => onLogin({ email, password }), setSubmitError, navigate);
    }
  };

  const manageGoogleLogin = async () => {
    await loginHelper(onGoogleLogin, setSubmitError, navigate);
  };

  const manageFacebookLogin = async () => {
    await loginHelper(onFacebookLogin, setSubmitError, navigate);
  };

  const manageSpotifyLogin = async () => {
    await loginHelper(onSpotifyLogin, setSubmitError, navigate);
  };

  const manageRegister = () => {
    navigate("/Register", { replace: true });
  };

  return (
    <div className="card-login">
      <div className="logo text-center mb-3">
        <img className="logo-image" src="/image/spotifyIcon.png" alt="Logo" />
      </div>

      <SocialLoginButtons 
        onGoogleLogin={manageGoogleLogin}
        onFacebookLogin={manageFacebookLogin}
        onSpotifyLogin={manageSpotifyLogin}
      />

      <div className="texto-O d-flex align-items-center my-3">
        <hr className="flex-grow-1" />
        <span className="px-2">Or</span>
        <hr className="flex-grow-1" />
      </div>

      {submitError && (
        <div className="alert alert-danger text-center">
          {errorMessage || "Login failed, Please check your credentials."}
        </div>
      )}

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
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}
      </div>

      <div className="form-check my-2">
        <input className="form-check-input" type="checkbox" id="remember" />
        <label className="form-check-label" htmlFor="remember">
          Remember me
        </label>
      </div>

      <div className="d-flex justify-content-between gap-3">
        <button className="login-button w-50" onClick={manageRegister}>
          REGISTER
        </button>
        <button className="login-button w-50" onClick={manageLogin}>
          LOG IN
        </button>
      </div>

      <div className="texto-contraseña text-center mt-2">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  );
};
