import React from "react";

function Footer() {
  return (
    <footer className="mt-3">
      <div className="container py-4">
        <div className="row">
          {/* Cột 1: Logo và mô tả */}
          <div className="col-12 col-md-4 text-center">
            <h3 className="fw-bold">
              Website
              <br />
              Dog & Cat
            </h3>
            <img
              src="assets/images/logo/logo.png"
              alt="Logo"
              className="rounded-circle my-3"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          {/* Cột 2: Category One */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold">Category one</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category one - 1
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category one - 2
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category one - 3
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category one - 4
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Category Two */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold">Category two</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category two - 1
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category two - 2
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category two - 3
                </a>
              </li>
              <li>
                <a href="/" className="text-danger text-decoration-none">
                  Category two - 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-white bg-dark py-2">
        Website design By Bee @Nocopyright
      </div>
    </footer>
  );
}

export default Footer;
