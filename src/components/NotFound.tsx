import React from "react";

function NotFound() {
  return (
    <div className="fw-bold" style={{ textAlign: "center", padding: "3rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>
        <i className="fa-solid fa-bug"></i> Trang bạn tìm không tồn tại.
      </p>
      <img src="assets/images/error.png" alt="" style={{ width: "30%" }} />
      <div>
        <a href="/">Quay lại trang chủ Website</a>
      </div>
    </div>
  );
}

export default NotFound;
