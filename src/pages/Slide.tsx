import React from "react";

function Slide() {
  return (
    <div className="mx-auto" style={{ maxWidth: "1000px" }}>
      <div
        id="carouselExample"
        className="carousel text-dark"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Các chấm dưới slide */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner mt-3">
          <div className="carousel-item active">
            <img
              src="assets/images/b.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{
                height: "400px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/banner.webp"
              className="d-block w-100"
              alt="Slide 2"
              style={{
                height: "400px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span>Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span>Next</span>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}

export default Slide;
