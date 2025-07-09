import React, { Fragment } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function Register() {
  return (
    <Fragment>
      <Header />
      <div className="form-check form switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        ></label>
      </div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="tab-content" id="authTabsContent">
              {/* Register Form */}
              <div
                className="tab-pane fade show active border p-4 bg-white"
                id="register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                <h2 className="mb-3 text-center fw-bold">Register</h2>
                <form className="text-start">
                  <div className="mb-3">
                    <label htmlFor="registerName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="registerName"
                      placeholder="Full Name ..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="registerEmail"
                      placeholder="Email ..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      placeholder="Password ..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="registerConfirmPassword"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerConfirmPassword"
                      placeholder="Confrim Password ..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                  <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-decoration-none">
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Register;
