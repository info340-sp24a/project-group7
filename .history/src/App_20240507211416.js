import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
import Square from './Square';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="content">
                <SideBox />
                <div className="container">
                    {/* Render squares */}
                    <Square />
                    <Square />
                    {/* Other squares */}
                </div>
            </div>
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
