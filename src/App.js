import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure correct import path
import PlantGallery from './components/index';
import Calendar from './components/calendar';
import Diary from './components/diary';
import Signin from './components/signin';
import plantData  from './data/plantData';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [filteredPlants, setFilteredPlants] = useState(plantData);

    const handleSearch = (searchTerm) => {
        const filtered = plantData.filter((plant) =>
            plant.plant_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlants(filtered);
    };

    if (loading) {
        return <p>Initializing user...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<PlantGallery onSearch={handleSearch} filteredPlants={filteredPlants} setFilteredPlants={setFilteredPlants} />} />
                <Route path="/calendar" element={user ? <Calendar /> : <Navigate to="/signin" />} />
                <Route path="/diary" element={user ? <Diary /> : <Navigate to="/signin" />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>

            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </>
    );
}

export default App;
