import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure correct import path
import PlantGallery from './components/index';
import Plant from './components/plantinfo';
import Calendar from './components/calendar';
import Diary from './components/diary';
import Signin from './components/signin';
import SearchFilter from './components/SearchFilter'; // Import SearchFilter component
import plantData from './data/plantData';

function App() {
    const [filteredPlants, setFilteredPlants] = useState(plantData);

    const handleSearch = (searchTerm) => {
        const filtered = plantData.filter((plant) =>
            plant.plant_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlants(filtered);
    };

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
