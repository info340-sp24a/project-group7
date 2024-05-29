import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'; // Import the CSS file


function openNav() {
     document.getElementById("side-nav").style.width = "100%";
 }

 function closeNav() {
     document.getElementById("side-nav").style.width = "0";
}

 const HamburgerBtn = <span onClick={openNav}>&#9776;</span>;

 const CloseBtn = <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>;

 const SideNav = () => {
     return (
         <>
             <div className="hamburger-btn">
                 {HamburgerBtn}
             </div>

             <div id="side-nav" className="mobile-nav">
                 {CloseBtn}
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/calendar">Calendar</Link></li>
                     <li><Link to="/diary">Diary</Link></li>
                     <li><Link to="/plantbio">Plant Bio</Link></li>
                   { /* <li><Link to="./login.html">Profile</Link></li>
                     <li><Link to="./login.html">Sign Up</Link></li> */}
                 </ul>
             </div>
         </>
     );
 };

 export default SideNav;
