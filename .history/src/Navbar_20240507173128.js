// Navbar.js
import React from 'react';
import './n.css'; // Import the CSS file


const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Menu for smaller screens */}
            <div className="hamburger-btn" aria-label="Menu">
                <i className="fas fa-bars"></i>
            </div>
            {/* Pages */}
            <div className="pages">
                <ul>
                    <li><a href="index.html" aria-current="page">Home</a></li>
                    <li><a href="calendar.html">Calendar</a></li>
                    <li><a href="diaries.html">Diary</a></li>
                    <li><a href="info.html">Plant Info</a></li>
                </ul>
            </div>
            {/* Title */}
            <header>
                <h1>Plant Parenthood</h1>
            </header>
            {/* Profile */}
            <div className="profile">
                <ul>
                    <li><a href="login.html">Profile</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
