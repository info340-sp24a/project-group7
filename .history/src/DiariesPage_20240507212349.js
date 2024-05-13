import React from 'react';
import SideBox from './SideBox';
import Square from './Square';

const DiariesPage = () => {
    return (
        <div className="content">
            <SideBox />
            <div className="container">
                {/* Render squares */}
                <Square />
                <Square />
                {/* Other squares */}
            </div>
        </div>
    );
};

export default DiariesPage;
