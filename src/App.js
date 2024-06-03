import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure correct import path
import PlantGallery from './components/index';
import Plant from './components/plantinfo';
import Calendar from './components/calendar';
import Diary from './components/diary';
import Signin from './components/signin';

function App(props) {
    return (
        <>
            {/* Main Navigation Bar */}
            <Navbar />

            <Routes>
                <Route path="/" element={<PlantGallery />} />
                <Route path="/plantbio" element={<Plant />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>

            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </>
    );
}

export default App;
