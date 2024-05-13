// DiariesPage.js
import React from 'react';
import SideBox from './SideBox';
import Square from './Square';

const DiariesPage = ({ showSquare }) => {
    return (
        <div className="content">
            <SideBox />
            <div className="container">
                {/* Conditionally render squares */}
                {showSquare && <Square />}
                {showSquare && <Square />}
                {/* Other squares */}
            </div>
        </div>
    );
};

export default DiariesPage;
