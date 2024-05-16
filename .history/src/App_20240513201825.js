import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
import SquaresContainer from './SquaresContainer';
import './styles.css'; // Importing the CSS file

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
