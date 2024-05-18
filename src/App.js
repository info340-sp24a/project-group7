import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
import PlantGallery from './components/mainindex';
//import Plant from './components/plantinfo'; 
//import Calendar from './components/calendar';
//import SideBox from './components/SideBox';
import SideBox from './components/SideBox';
//import Info from './components/Info'; // Import the Info component
//import { Calendar, TaskList } from './components/calendar';
//import SideNav from './components/Sidenav';



const App = () => {
    return (
        <div className="app-container">
            {/* Main Navigation Bar */}
            <Navbar />
            {/* Media Query Navigation Bar */}
            <SideNav />
            {/* Index Page */}
            <PlantGallery />
            {/* Plant Biography Page */}
            {/*<Plant/>*/}
            {/* Calender Page */}
            {/*<Calendar />*/ }
            
            {/* <SideNav /> */}
            {/* <Calendar /> */}
            {/* <TaskList /> */}
            <div className="main-content">
                {/* <Info /> Include the Info component here */}
                <SideBox />
                <div className="content">
                    {/* Content Goes Here */}
                </div>
            </div>
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
