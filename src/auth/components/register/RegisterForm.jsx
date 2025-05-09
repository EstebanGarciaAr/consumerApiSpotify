import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import "../../components/register/styles/register.css";
import { registerUser } from "../../../firebase/provider";
import { useNavigate } from "react-router-dom";

// Initial form values
const formFields = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const RegisterForm = () => {
  // Use custom hook to manage form state
  const { name, email, password, repeatPassword, onInputChange, formState } =
    useForm(formFields);

  // Error message shown if something is wrong
  const [formError, setFormError] = useState("");

  // 
  const [fieldErrors, setFieldErrors] = useState({});

  // Checkbox state: true if user accepts terms
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  // Function runs when form is submitted
  const onSubmit =  async (event) => {
    event.preventDefault(); // Stop the page from reloading

    const errors = {
      name: !name ? "Name is required." : "",
      email: !email ? "Email is required." : !isValidEmail(email) ? "Invalid email format." : "",
      password: !password ? "Password is required." : "",
      repeatPassword: !repeatPassword ? "Repeat password is required." : "",
    };

    if (password && repeatPassword && password !== repeatPassword) {
      errors.repeatPassword = "Passwords do not match.";
    }

    setFieldErrors(errors);

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (hasErrors) {
      setFormError("Please fix the errors in the form.");
      return;
    }

    if (!termsAccepted) {
      setFormError("You must accept the terms of service.");
      return;
    }

    const { ok, errorMessage } = await registerUser(email, password, name);
    if (!ok) {
      setFormError(errorMessage);
      return;
    }

    setFormError("");
    navigate("/Login",{ state: { successMessage: "Your account has been created!" } });


  };

  // Show form values in console
  console.log("Form submitted:", formState);

  return (
    <>
      <section className="register-section">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card card-custom">
                  <div className="card-body p-5">
                    <div className="text-center mb-4">
                      <img
                        className="logo-image"
                        src="/image/spotifyIcon.png"
                        alt="Logo"
                      />
                    </div>
                    <h2 className="text-uppercase text-center mb-4">
                      Create an account
                    </h2>
                    {/* Show error if there is one */}
                    {formError && (
                      <div className="alert alert-danger text-center" role="alert">
                        {formError}
                      </div>
                    )}

                    {/* Registration form */}
                    <form onSubmit={onSubmit}>
                      {/* Name field */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={onInputChange}
                          className={`form-control form-control-lg ${fieldErrors.name && "is-invalid"}`}
                        />
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                        {fieldErrors.name && <div className="invalid-feedback">{fieldErrors.name}</div>}
                      </div>

                      {/* Email field */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onInputChange}
                          className={`form-control form-control-lg ${fieldErrors.email && "is-invalid"}`}
                        />
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                        {fieldErrors.email && <div className="invalid-feedback">{fieldErrors.email}</div>}
                      </div>

                      {/* Password field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={onInputChange}
                          className={`form-control form-control-lg ${fieldErrors.password && "is-invalid"}`}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        {fieldErrors.password && <div className="invalid-feedback">{fieldErrors.password}</div>}
                      </div>

                      {/* Repeat password field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="repeatPassword"
                          name="repeatPassword"
                          value={repeatPassword}
                          onChange={onInputChange}
                          className={`form-control form-control-lg ${fieldErrors.repeatPassword && "is-invalid"}`}
                        />
                        <label className="form-label" htmlFor="repeatPassword">
                          Repeat your password
                        </label>
                        {fieldErrors.repeatPassword && <div className="invalid-feedback">{fieldErrors.repeatPassword}</div>}
                      </div>

                      {/* Terms and conditions checkbox */}
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="terms"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      {/* Submit button, disabled if terms not accepted */}
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="register-button w-100"
                          disabled={!termsAccepted}
                        >
                          REGISTER
                        </button>
                      </div>

                      {/* Link to login page */}
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/Login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
