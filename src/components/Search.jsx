import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported

const TabsAndSearch = () => {
  return (
    <section>
      <div className="container my-4">
        <div className="box-background">
          {/* Search Fields */}
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="row gy-3">
              {/* Tabs */}
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="box-button d-flex justify-content-center align-items-center rounded-pill w-50"
                  id="scrollspy-button"
                >
                  <a
                    className="btn btn-hotel active rounded-pill"
                    href="#hotel-tab"
                  >
                    <i className="fa-solid fa-hotel text-success m-2"></i> Hotel
                  </a>
                  <a className="btn btn-tour rounded-pill" href="#tour-tab">
                    <i className="fa-solid fa-map text-success m-2"></i> Tour
                  </a>
                </div>
              </div>

              {/* Check-in/Check-out */}
              <div className="col-md-6">
                <div className="p-2 border rounded-pill bg-light d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center ps-4">
                    <i className="fa-solid fa-calendar-days me-2 text-success"></i>
                    <div>
                      <small className="text-muted">Check-in/out dates</small>
                      <div>8 Nov - 10 Nov 2024</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="px-3 py-2 border rounded-pill bg-light text-center">
                      <small className="text-muted">4 Nights</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rooms and Guests */}
              <div className="col-md-6">
                <div className="p-2 border rounded-pill bg-light d-flex align-items-center ps-4 mt-4">
                  <i className="fa-solid fa-users me-2 text-success"></i>
                  <div>
                    <small className="text-muted">Rooms and Guests</small>
                    <div>2 rooms, 4 adults, 1 child</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="d-flex justify-content-center align-items-center my-4">
              <button className="btn btn-success btn-lg rounded-pill position-absolute w-50 top-100 start-50 translate-middle w-50 w-md-50">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsAndSearch;
