// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            {/*Pages */}
            <div class="pages">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/diary">Diary</Link></li>
                    <li><Link to="/plantbio">Plant Bio </Link></li>
                </ul>
            </div>

            {/*Title */}
            <h1>Plant Parenthood</h1>
            {/*Profile */}
            <div class="profile">
                <ul>
                    <li><Link to="/signin">Login</Link></li>
                    {/*<li><Link to="./login.html">Sign Up</Link></li>*/}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
