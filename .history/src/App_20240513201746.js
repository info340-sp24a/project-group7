import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
import SquaresContainer from ''


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
