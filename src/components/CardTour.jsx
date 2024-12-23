import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported
const CardTour = () => {
  return (
    <section>
      <div
        className="custom-container my-5 scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        {/* Heading */}
        <h4 className="mb-4 border rounded p-3" id="tour-tab">
          Best Selections
        </h4>

        {/* Row for Cards */}
        <div className="row g-4 my-4">
          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <a href="">
                <img
                  src="./image/Hotel in kompot/2.jpg"
                  className="card-img-tour position-relative"
                  alt="Travel Image"
                />
                <button className="btn btn-light btn-sm text-dark position-absolute top-0 end-0 p-2 m-3">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </a>
              <div className="card-body py-4">
                <p className="mt-2 mb-0">
                  Seam Rep <span className="mx-2">↔</span> Kampot
                </p>
                <h5 className="fw-bold mb-0">350$</h5>
                <p className="text-muted mb-2">period: 2 nights and 3 days</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <a href="">
                <img
                  src="./image/Hotel in kompot/1.jpg"
                  className="card-img-tour position-relative"
                  alt="Travel Image"
                />
                <button className="btn btn-light btn-sm text-dark position-absolute top-0 end-0 p-2 m-3">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </a>
              <div className="card-body py-4">
                <p className="mt-2 mb-0">
                  Seam Rep <span className="mx-2">↔</span> Kampot
                </p>
                <h5 className="fw-bold mb-0">350$</h5>
                <p className="text-muted mb-2">period: 2 nights and 3 days</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <a href="">
                <img
                  src="./image/Hotel in kompot/4.jpg"
                  className="card-img-tour position-relative"
                  alt="Travel Image"
                />
                <button className="btn btn-light btn-sm text-dark position-absolute top-0 end-0 p-2 m-3">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </a>
              <div className="card-body py-4">
                <p className="mt-2 mb-0">
                  Seam Rep <span className="mx-2">↔</span> Kampot
                </p>
                <h5 className="fw-bold mb-0">350$</h5>
                <p className="text-muted mb-2">period: 2 nights and 3 days</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card border-0 shadow-sm">
              <a href="">
                <img
                  src="./image/Hotel in kompot/3.jpg"
                  className="card-img-tour position-relative"
                  alt="Travel Image"
                />
                <button className="btn btn-light btn-sm text-dark position-absolute top-0 end-0 p-2 m-3">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </a>
              <div className="card-body py-4">
                <p className="mt-2 mb-0">
                  Seam Rep <span className="mx-2">↔</span> Kampot
                </p>
                <h5 className="fw-bold mb-0">350$</h5>
                <p className="text-muted mb-2">period: 2 nights and 3 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Packages Button */}
        <div className="mt-4 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-success rounded-pill px-4 py-2">
            View all package
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardTour;
