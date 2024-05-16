// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Calendar from './Calendar';
import Diaries from './Diaries';
import PlantInfo from './PlantInfo';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/diaries" element={<Diaries />} />
                        <Route path="/info" element={<PlantInfo />} />
                    </Routes>
                </div>
                <footer>
                    <p>&copy; Plant Parenthood</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
