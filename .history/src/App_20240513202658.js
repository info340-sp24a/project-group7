import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
import SquaresContainer from './SquaresContainer';
index


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <SideBox />
                <div className="content">
                    <SquaresContainer />
                </div>
            </div>
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
