import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
SquaresContainer.js


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <SideBox />
                <div className="content">
                    {/* Main content goes here */}
                </div>
            </div>
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
