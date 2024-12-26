import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true); // Start loading spinner

    // Simulate API call
    setTimeout(() => {
      console.log("User registered:", formData);
      setMessage("Registration successful! Redirecting...");
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      setLoading(false); // Stop loading spinner

      // Redirect to homepage profile
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-white">
      <div className="row w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Section: Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="./image/login.jpg" // Replace with the correct image path
            alt="Travel illustration"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Form */}
        <div className="col-md-6 p-4">
          <h2 className="fw-bold mb-3">Create account</h2>
          <p className="text-muted mb-4">For business, band, or celebrity.</p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreePolicy"
                required
              />
              <label className="form-check-label" htmlFor="agreePolicy">
                I agree to all the <a href="#!" className="text-decoration-none">Terms</a> and <a href="#!" className="text-decoration-none">Privacy policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            {/* Link to Login */}
            <div className="text-center pt-4">
              <span>Already have an account?</span>
              <Link to="/login" className="text-blue-500 ps-3">Login</Link>
            </div>
          </form>
          {message && (
            <div
              className={`mt-3 alert ${
                message.includes("successful") ? "alert-success" : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
