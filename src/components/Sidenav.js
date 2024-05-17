import React from 'react';
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
                     <li><a href="./index.html">Home</a></li>
                     <li><a href="./calendar.html">Calendar</a></li>
                     <li><a href="./diaries.html">Diary</a></li>
                     <li><a href="./Info.html">Plant Info</a></li>
                     <li><a href="./login.html">Profile</a></li>
                     <li><a href="./login.html">Sign Up</a></li>
                 </ul>
             </div>
         </>
     );
 };

 export default SideNav;
