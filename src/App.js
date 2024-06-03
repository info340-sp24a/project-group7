import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
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
        <div className="app-container">
            {/* Main Navigation Bar */}
            <Navbar />

            {/* Media Query Navigation Bar */}
            <SideNav />

            <div className="content-wrapper">
                <Routes>
                    {/* Render SearchFilter only on the index page */}
                    <Route path="/" element={<>
                        <PlantGallery plants={filteredPlants} />
                        <SearchFilter onSearch={handleSearch} />
                    </>} />
                    <Route path="/search" element={<SearchFilter onSearch={handleSearch} />} />
                    <Route path="/plantbio" element={<Plant />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/diary" element={<Diary />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </div>

            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
}

export default App;
