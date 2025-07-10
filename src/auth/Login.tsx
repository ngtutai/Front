import React, { Fragment } from "react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

function Login() {
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
              {/* Login Form */}
              <div
                className="tab-pane fade show active border p-4 bg-white"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <h2 className="mb-3 text-center fw-bold">ĐĂNG NHẬP</h2>
                <form className="text-start">
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      placeholder="Email ..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      placeholder="Password ..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Đăng nhập
                  </button>
                  <p className="mt-3 text-start">
                    Bạn chưa có tài khoản?{" "}
                    <a href="/register" className="text-decoration-none">
                      Đăng ký
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

export default Login;
