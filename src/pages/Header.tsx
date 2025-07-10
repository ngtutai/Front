import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const cart = JSON.parse(stored);
        setCartCount(cart.length);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    // Theo dõi khi storage thay đổi (ở các tab khác)
    window.addEventListener("storage", updateCartCount);
    // Theo dõi mỗi 1s (trong cùng tab)
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <Fragment>
      <header className="header-area header-area2 p-0">
        <nav className="navbar navbar-expand-lg navbar-primary">
          <div className="container fw-bold">
            <a className="col-2" href="/">
              <img
                src="assets/images/logo/logo.png"
                alt="Logo"
                style={{ width: "50%" }}
              />
            </a>
            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav items */}
            <div
              className="collapse navbar-collapse text-start "
              id="navbarContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active text-warning" : "")
                    }
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/pet"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active text-warning" : "")
                    }
                  >
                    Thú cưng
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active text-warning" : "")
                    }
                  >
                    Chi tiết
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active text-warning" : "")
                    }
                  >
                    Liên hệ
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      "nav-link position-relative" +
                      (isActive ? " active text-warning" : "")
                    }
                  >
                    <i className="fa-solid fa-cart-shopping me-1"></i>
                    <span
                      className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "12px" }}
                    >
                      {cartCount}
                    </span>
                    Giỏ hàng
                  </NavLink>
                </li>
                <li className="nav-item ms-2">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active text-warning" : "")
                    }
                  >
                    <i className="fa-solid fa-user"></i> Đăng nhập
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
