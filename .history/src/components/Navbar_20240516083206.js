// Navbar.js
import React from 'react';
import '../css/main.css'; // Import the CSS file
import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
            {/*Pages */}
            <div class="pages">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./calendar.html">Calendar</a></li>
                    <li><a href="./diaries.html">Diary</a></li>
                    <li><a href="./Info.html">Plant Info </a></li>
                </ul>
            </div>

            {/*Title */}
            <h1>Plant Parenthood</h1>
            {/*Profile */}
            <div class="profile">
                <ul>
                    <li><a href="./login.html">Profile</a></li>
                    <li><a href="./login.html">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
