import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="assets/plugins/font-awesome/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/bootstrap/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="assets/css/bootstrap-4.1.3.min.css" />
      <link rel="stylesheet" href="assets/css/styles.css" />
      <Header />
      <section
        className="banner-area banner-area2 text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url("assets/images/contact.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "630px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.13)",
            padding: "20px 40px",
            borderRadius: "8px",
          }}
        >
          <h1 className="display-4 fw-bold mb-0">Liên hệ</h1>
        </div>
      </section>

      <div className="bg-danger bg-opacity-25 py-2 mt-4 mb-1 ">
        <h1 className="text-center text-white mt-2">Liên hệ với chúng tôi</h1>
      </div>
      <div className="contact-banner text-start">
        <img src="assets/images/bg-contact.png" alt="Ảnh liên hệ" />
        <form className="contact-form-overlay">
          <div className="col-10 mb-3">
            <h2>Bạn cần hỗ trợ?</h2>
            <p style={{ fontSize: "15 px" }}>
              Celah rất hân hạnh được hỗ trợ bạn, hãy để lại thông tin cho chúng
              tôi nhé. Yêu cầu của bạn sẽ được xử lý và phản hồi trong thời gian
              sớm nhất.
            </p>
          </div>
          <div className="row g-3 mt-1">
            <div className="col-6">
              <label htmlFor="name">Họ tên*</label>
              <input
                type="text"
                id="name"
                className="form-control form-control-lg"
                placeholder="Tên đầy đủ"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-12 mt-3">
              <label htmlFor="message">Tin nhắn*</label>
              <textarea
                id="message"
                className="form-control form-control-lg"
                rows={3}
                placeholder="Nội dung tin nhắn"
                required
                defaultValue={""}
              />
            </div>
            <div className="col-12 mt-4 text-start">
              <button className="btn btn-dark fw-bold" style={{ width: "20%" }}>
                Gửi
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        {/* Thông tin liên hệ & Bản đồ */}
        <div className="mt-3">
          <div className="row">
            <div className="col-md-5">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.7000000!3d10.7760000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f123456789%3A0x987654321!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14bqjbjEgVFAuIEjDoCBDaMOtIE1pbmggQ2l0eQ!5e0!3m2!1svi!2s!4v1710000000000"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Celah Vietnam Location Map"
                />
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <img
                src="assets/images/icon-map.png"
                style={{ width: "80%" }}
                alt=""
              />
            </div>
            <div className="col-md-4 mb-3 text-start">
              <h4 className="text-dark">Địa chỉ của chúng tôi</h4>
              <p className="mb-1">
                <strong>
                  <i className="fa-solid fa-building" /> :
                </strong>{" "}
                Celah Vietnam
              </p>
              <p className="mb-1">
                <strong>
                  <i className="fa-solid fa-location-dot" /> :
                </strong>{" "}
                123 Đường ABC, Quận 1, TP.HCM
              </p>
              <p className="mb-1">
                <strong>
                  <i className="fa-solid fa-envelope" /> :
                </strong>
                lienhe@celah.vn
              </p>
              <p>
                <strong>
                  <i className="fa-solid fa-phone" /> :
                </strong>{" "}
                0123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Contact;
