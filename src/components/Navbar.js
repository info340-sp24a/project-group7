import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <div className="navbar-content">
                    <div className="hamburger-btn" onClick={openNav}>
                        <span>&#9776;</span>
                    </div>
                    <h1>Plant Parenthood</h1>
                    <div className="pages">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/calendar">Calendar</Link></li>
                            <li><Link to="/diary">Diary</Link></li>
                            <li><Link to="/plantbio">Plant Bio</Link></li>
                            <li><Link to="/signin">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div id="side-nav" className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <a href="#" className="closebtn" onClick={closeNav}>
                    &times;
                </a>
                <ul>
                    <li><Link to="/" onClick={closeNav}>Home</Link></li>
                    <li><Link to="/calendar" onClick={closeNav}>Calendar</Link></li>
                    <li><Link to="/diary" onClick={closeNav}>Diary</Link></li>
                    <li><Link to="/plantbio" onClick={closeNav}>Plant Bio</Link></li>
                    <li><Link to="/signin" onClick={closeNav}>Login</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
