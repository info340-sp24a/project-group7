import React from 'react';
import SideBox from './SideBox';
import Square from './Square';
import './Diaries.css'; // Import the CSS file

const DiariesPage = () => {
    return (
        <div>
            <SideBox />
            <Square />
            <Square />
            {/* Other DiariesPage content */}
        </div>
    );
};

export default DiariesPage;
