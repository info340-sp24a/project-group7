import React from 'react';
import Square from './Square'; // Import the Square component if needed
import './in.css'; // Import the CSS file

const DiariesPage = () => {
    return (
        <div className="container">
            <div className="recently-added">
                <span>Recently Added</span>
            </div>
            <div className="column">
                <div className="row">
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                </div>
            </div>
            <div className="column">
                <div className="row">
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                </div>
            </div>
        </div>
    );
};

export default DiariesPage;
