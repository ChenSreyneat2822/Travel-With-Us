import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported

const HeaderProfile = () => {
    return (
        <nav className="bg-white h-20 w-full p-4 shadow-md navbar-light bg-light sticky-top">
            <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="./image/logo-edit.png"
                        alt="Travel With Us"
                        className="w-48 h-48 object-contain" // Increased size to 128px
                    />
                </div>

                {/* Menu Items */}
                <div className="flex space-x-7 m-auto">
                    <a href="/" className="text-green-700 hover:text-green-900 flex items-center space-x-2">
                    <i class="fa-solid fa-house"></i><span>Home</span>
                    </a>
                    <a href="/about" className="text-green-700 hover:text-green-900 flex items-center space-x-2">
                    <i class="fa-solid fa-users"></i><span>About</span>
                    </a>
                    <a href="/contact" className="text-green-700 hover:text-green-900 flex items-center space-x-2">
                    <i class="fa-solid fa-phone"></i> <span>Contact</span>
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <a href="#" class="btn btn-outline-warning mb-2 mb-lg-0 hover-text">
                        <i class="fa-solid fa-b"></i> Booking Now
                    </a>
                    <a href="#">
                        <div className="profile bg-light rounded-pill">
                            <img src="./image/me.png" alt="" />
                        </div>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default HeaderProfile;