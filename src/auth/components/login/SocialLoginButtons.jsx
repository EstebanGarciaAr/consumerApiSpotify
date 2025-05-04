import "./styles/login.css"


export const SocialLoginButtons = () => (
  <div className="social-login-container text-center mb-3">
    <p className="texto-continuar">Continuar con:</p>
    <div className="d-flex justify-content-center gap-3">
      <i className="bi bi-facebook social-icon"></i>
      <i className="bi bi-apple social-icon"></i>
      <i className="bi bi-google social-icon"></i>
    </div>
  </div>
);
  