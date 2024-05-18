import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
import PlantGallery from './components/index';
//import Plant from './components/plantinfo'; 
//import Calendar from './components/calendar';
//import SideBox from './components/SideBox';

function App (props){
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
            {/*<Calendar />*/}

            {/*Diary Page*/}
            {/*<SideBox />*/}

            <div className="main-content">
                {/* <Info /> Include the Info component here */}

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
