import React from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/calendar';


const App = () => {
    return (
        <div>
            <Navbar />
            <Calendar />
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
