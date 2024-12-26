import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate

  // Handle input changes
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    const { email, password } = formData;

    try {
      // Send login request to your API
      const response = await axios.post("https://your-api-endpoint.com/login", {
        email,
        password,
      });

      // Assuming backend returns user info and a success flag
      if (response.data.success) {
        console.log("Login successful:", response.data);
        
        // Store user data in localStorage (can be used for authentication)
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        // Redirect the user to profile page or homepage
        navigate("/profile"); // Change to "/" for homepage
      } else {
        throw new Error(response.data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Error during login:", err.response || err.message);
      setErrorMessage(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div className="row">
          {/* Illustration Section */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src="./image/login.jpg" // Ensure this is the correct image path
              alt="Travel illustration"
              className="img-fluid"
            />
          </div>

          {/* Login Form Section */}
          <div className="col-lg-6 p-4">
            <h2 className="mb-3">Login</h2>
            <p className="text-muted mb-4">
              Today is a new day. It's your day. You shape it.
              <br />
              Sign in to start managing your projects.
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Example@email.com"
                  value={formData.email}
                  onChange={handleChanges}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChanges}
                  required
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="d-flex justify-content-end mb-4">
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="d-flex align-items-center my-3">
              <div className="flex-grow-1 border-top"></div>
              <span className="mx-2 text-muted">Or</span>
              <div className="flex-grow-1 border-top"></div>
            </div>
            <div className="d-grid gap-2 my-4">
              <button className="btn btn-outline-danger">
                <i className="bi bi-google"></i> Sign in with Google
              </button>
              <button className="btn btn-outline-primary">
                <i className="bi bi-facebook"></i> Sign in with Facebook
              </button>
            </div>
            <div className="text-center">
              <span>Don't Have an Account?</span>
              <Link to="/register" className="text-blue-500 ps-3">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
