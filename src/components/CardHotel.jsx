import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardHotel = () => {
  return (
    <section>
      <div
        className="custom-container my-5"
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        tabIndex="0"
      >
        {/* Heading */}
        <h4 className="mb-5 border rounded p-3" id="hotel-tab">
          Recommended stays for you want booking private hotel
        </h4>

        {/* Row for Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 position-relative">
              <a href="">
                <img
                  src="./image/Hotel in kompot/10.jpg"
                  className="card-img-hotel rounded"
                  alt="Views"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">Views</h5>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 position-relative">
              <a href="">
                <img
                  src="./image/Hotel in seam rep/5.jpg"
                  className="card-img-hotel rounded"
                  alt="Beach"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">Beach</h5>
                </div>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 position-relative">
              <a href="">
                <img
                  src="./image/Hotel in sihanouk/4.jpg"
                  className="card-img-hotel rounded"
                  alt="Camping"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">Camping</h5>
                </div>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 position-relative">
              <a href="">
                <img
                  src="./image/Hotel in Kep/1.jpg"
                  className="card-img-hotel rounded"
                  alt="Night Views"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">Night Views</h5>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* View All Packages Button */}
        <div className="mt-4 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-success rounded-pill px-5 py-2">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardHotel;
