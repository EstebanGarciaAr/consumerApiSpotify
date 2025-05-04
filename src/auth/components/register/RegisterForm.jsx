import { useForm } from "../../../hooks/useForm";
import "../../components/register/styles/register.css";

const formFields = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const RegisterForm = () => {

  const { name, email, password, repeatPassword, onInputChange, formState } = useForm(formFields);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState); 
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={onSubmit}>
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

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="terms"
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

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