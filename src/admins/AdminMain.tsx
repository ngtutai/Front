import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function AdminMain() {
  return (
    <Fragment>
      {/* Main content */}
      <main className="col-12 col-md-10 bg-secondary bg-opacity-10 min-vh-100">
        <div className="bg-gradient-header d-flex align-items-center">
          <h4 className="me-auto ms-2 mb-2 mb-md-0">Dashboard</h4>
          <form className="d-flex me-2 mb-2 mb-lg-0">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-pill pe-5"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="input-group-text bg-white border-0 position-absolute end-0 me-3">
                <i className="fa fa-search text-muted"></i>
              </span>
            </div>
          </form>

          <img
            src="assets/images/cat.jpg"
            alt="Avatar"
            className="rounded-circle ms-4 me-2"
            width="40"
          />

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active text-white" : "")
            }
          >
            Login
          </NavLink>
        </div>
        <div className="bg-gradient-header1 position-relative">
          {/* Cards section */}
          <div className="row gy-3">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-light p-3 h-100">
                <h6>TRAFFIC</h6>
                <h4>350,897</h4>
                <small className="text-success">+3.48% Since last month</small>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-light p-3 h-100">
                <h6>NEW USERS</h6>
                <h4>2,356</h4>
                <small className="text-danger">-3.48% Since last week</small>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-light p-3 h-100">
                <h6>SALES</h6>
                <h4>924</h4>
                <small className="text-danger">-1.10% Since yesterday</small>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-light p-3 h-100">
                <h6>PERFORMANCE</h6>
                <h4>49,65%</h4>
                <small className="text-success">+12% Since last month</small>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="row px-5 translate-middle-y mt-1">
          {/* Chart Left */}
          <div
            className="col-12 col-lg-7 text-white bg-dark ms-4 me-3"
            style={{
              height: 400,
              borderRadius: 5,
              padding: 15,
              color: "#fff",
              background: "linear-gradient(60deg, #32325d, #1a174d)",
            }}
          >
            1
          </div>

          {/* Chart Right */}
          <div
            className="col-12 col-lg-4 bg-light ms-4"
            style={{ height: 400, borderRadius: 5, padding: 15 }}
          >
            2
          </div>
        </div>

        <div className="container-fluid card ">
          <div className="card-body">
            <h5 className="card-title">Sales value</h5>
            <div style={{ height: 200, background: "#f1f3f9" }}>
              (Chart placeholder)
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default AdminMain;
