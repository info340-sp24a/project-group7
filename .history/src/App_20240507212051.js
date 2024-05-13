import React from 'react';
import Navbar from './Navbar';
import DiariesPage from './DiariesPage';

const App = () => {
    return (
        <div>
            <Navbar />
            <DiariesPage />
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
