import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import "../../components/register/styles/register.css";

// Initial form values
const formFields = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const RegisterForm = () => {
  // Use custom hook to manage form state
  const { name, email, password, repeatPassword, onInputChange, formState } =
    useForm(formFields);

  // Error message shown if something is wrong
  const [formError, setFormError] = useState("");

  // Checkbox state: true if user accepts terms
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Function runs when form is submitted
  const onSubmit = (event) => {
    event.preventDefault(); // Stop the page from reloading

    // If any field is empty, show error
    if (!name || !email || !password || !repeatPassword) {
      setFormError("All fields are required.");
      return;
    }

    // If passwords are different, show error
    if (password !== repeatPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    // If user didn't accept the terms, show error
    if (!termsAccepted) {
      setFormError("You must accept the terms of service.");
      return;
    }

    // Clear any previous error
    setFormError("");

    // Show form values in console
    console.log("Form submitted:", formState);
  };

  return (
    <>
      <section className="register-section">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card card-custom">
                  <div className="card-body p-5">
                    {/* Logo */}
                    <div className="text-center mb-4">
                      <img
                        className="logo-image"
                        src="/image/spotifyIcon.png"
                        alt="Logo"
                      />
                    </div>

                    {/* Form title */}
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
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="name">
                          Your Name
                        </label>
                      </div>

                      {/* Email field */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onInputChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                      </div>

                      {/* Password field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={onInputChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      {/* Repeat password field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="repeatPassword"
                          name="repeatPassword"
                          value={repeatPassword}
                          onChange={onInputChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="repeatPassword">
                          Repeat your password
                        </label>
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
