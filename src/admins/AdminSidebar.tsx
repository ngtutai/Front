import { NavLink } from "react-router-dom";
import React, { Fragment } from "react";

function AdminSidebar() {
  return (
    <Fragment>
      {/* Sidebar */}
      <nav className="col-2 py-2 sidebar">
        <img
          src="assets/images/logo/logo.png"
          alt="logo"
          style={{ width: "40%" }}
        />
        <hr />
        <ul className="nav flex-column">
          <h5 className="p-1" style={{ opacity: "0.3" }}>
            Dashboard
          </h5>
          {/* Dashboard */}
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-tv me-2"></i> Dashboard
            </NavLink>
          </li>

          {/* Dashboard */}
          <li className="nav-item">
            <NavLink
              to="/category"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-layer-group me-2"></i> Category
            </NavLink>
          </li>

          {/* Slide */}
          <li className="nav-item">
            <NavLink
              to="/adminslide"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-sliders me-2"></i> Slide
            </NavLink>
          </li>

          <hr />
          <h5 className="p-1" style={{ opacity: "0.3" }}>
            hi
          </h5>

          {/* Text */}
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-file-lines me-2"></i> Dashboard
            </NavLink>
          </li>

          {/* Bóng đèn */}
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-lightbulb me-2"></i> Dashboard
            </NavLink>
          </li>

          {/* Chấm hỏi */}
          <li className="nav-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active text-primary" : "")
              }
            >
              <i className="fa-solid fa-question me-2"></i> Dashboard
            </NavLink>
          </li>

          <hr />
        </ul>
      </nav>
    </Fragment>
  );
}

export default AdminSidebar;
