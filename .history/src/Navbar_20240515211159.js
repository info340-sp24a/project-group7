// Navbar.js
import React from 'react';
import './navbar.css'; // Import the CSS file
import SideBox from './SideBox'; // Import the SideBox component

const Navbar = ({ currentPage }) => {
    return (
        <nav className="navbar">
            <div className="hamburger-btn" aria-label="Menu">
                <i className="fas fa-bars"></i>
            </div>
            {/* Pages */}
            <div className="pages">
                <ul>
                    <li><a href="index.html" className={currentPage === 'Home' ? 'active' : ''}>Home</a></li>
                    <li><a href="calendar.html" className={currentPage === 'Calendar' ? 'active' : ''}>Calendar</a></li>
                    <li><a href="diaries.html" className={currentPage === 'Diary' ? 'active' : ''}>Diary</a></li>
                    <li><a href="info.html" className={currentPage === 'Plant Info' ? 'active' : ''}>Plant Info</a></li>
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
            {/* Render SideBox only on the Diaries page */}
            {currentPage === 'Diary' && <SideBox />}
        </nav>
    );
};

export default Navbar;
