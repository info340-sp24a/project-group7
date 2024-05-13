
import React from 'react';
import Navbar from './Navbar';
import SideBox from './SideBox';
import Square from './Square';
import DiariesPage from './DiariesPage';

const App = () => {
    return (
        <div>
            <Navbar />
            <SideBox />
            {/* Other components */}
            <div className="container">
                {/* Render squares */}
                <Square />
                <Square />
                {/* Other squares */}
            </div>
        </div>
    );
};

export default App;
