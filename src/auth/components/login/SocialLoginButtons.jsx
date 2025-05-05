import "./styles/login.css";

export const SocialLoginButtons = () => (
  <div className="social-login-container text-center mb-3">
    <p className="texto-continuar">Continue with:</p>
    <div className="d-flex justify-content-center gap-3">
      <i className="fab fa-facebook social-icon"></i>
      <i className="fab fa-apple social-icon"></i>
      <i className="fab fa-google social-icon"></i>
      <i className="fab fa-spotify social-icon"></i>
    </div>
  </div>
);
