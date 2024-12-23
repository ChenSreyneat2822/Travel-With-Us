import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported
const BannerHotel = () => {
  return (
    // Banner Section
    <section className="banner-hotel my-5">
      <div className="container p-0">
        <div className="row banner-background align-items-center bg-light-green m-0" style={{ borderRadius: "10px", padding: "40px"}}>
          {/* Left Image (Airplane) */}
          <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
            <img src="./image/download.png" alt="Airplane" className="img-fluid" style={{ maxWidth: "200px" }} />
          </div>

          {/* Jumbotron Text */}
          <div className="col-12 col-md-6 text-center">
            <h1 className="display-5 fw-bold text-green">Travel With <span className="text-color">Us Hotel</span></h1>
            <p className="lead text-dark">
              When customers rent a hotel, we ensure they have a comfortable and convenient stay tailored to their
              travel needs, with amenities and services designed to enhance their overall travel experience.
            </p>
          </div>

          {/* Right Image (Traveler) */}
          <div className="col-12 col-md-3 text-center mt-3 mt-md-0">
            <img src="./image/pic-banner1.png" alt="Traveler" className="img-fluid" style={{ maxWidth: "200px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHotel;
