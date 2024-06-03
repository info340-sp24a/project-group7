import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'; // Import the CSS file

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="hamburger-btn" onClick={openNav}>
                <span>&#9776;</span>
            </div>

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

export default SideNav;
