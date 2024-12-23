import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported

const Footer = () => {
  return (
    <footer className="bg-light border">
     <div className="container" style={{ maxWidth: "1300px" }}>
  <div className="row text-center text-md-start align-items-center pt-5">
    <div className="col-md-6">
      {/* Left Column: Navigation Links */}
      <div className="mb-4 mb-md-0">
        <ul className="list-unstyled d-flex flex-wrap justify-content-center text-center justify-content-md-start gap-3 gap-md-4">
          <li className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">About Us</a>
          </li>
          <li className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">Contact Us</a>
          </li>
          <li className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">Feedback</a>
          </li>
          <li className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">Privacy</a>
          </li>
          <li className="mb-2 mb-md-0">
            <a href="#" className="text-dark text-decoration-none">FQP/Help</a>
          </li>
        </ul>
      </div>

      {/* Center Column: Logo */}
      <div className="text-center mb-4 mb-md-0 float-sm-none]">
        <img
          src="./image/logo-edit.png" // Ensure this path is correct
          alt="Logo"
          className="img-fluid mx-auto d-block"
          style={{ maxHeight: "250px" }}
        />
      </div>
    </div>

    <div className="col-md-6 text-center">
      {/* Right Column: Contact and Social Media */}
      <div className="py-2">
        <p className="text-dark">
          <i className="fa-solid fa-location-dot text-success"></i>
          Royal University Of Phnom Penh, Faculty Engineering, Department ITE
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 py-2">
        <p className="text-dark mb-1">
          <i className="fa-solid fa-phone text-success"></i> (+855) 456-7890
        </p>
        <p className="text-dark">
          <i className="fa-solid fa-print text-success"></i> (+855) 456-7890
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 py-2">
        <p className="mb-1 text-dark">Social Media</p>
        <div className="d-flex gap-4 justify-content-center justify-content-md-start">
          <a href="#" className="text-decoration-none text-primary" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-decoration-none text-info" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-decoration-none text-primary" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="text-decoration-none text-danger" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="text-decoration-none text-warning" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="text-decoration-none text-danger" aria-label="Google">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="#" className="text-decoration-none text-secondary" aria-label="Pinterest">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="#" className="text-decoration-none text-info" aria-label="RSS Feed">
            <i className="fa-solid fa-rss"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Bottom Section: Copyright */}
      <div className="bg-success text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0">Copyright &copy; 2022 · RUPP, ITE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;