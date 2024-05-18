import React from 'react';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import SideNav from './components/Sidenav';
//import Plant from './components/plantinfo'; // Import the Info component
import Calendar from './components/calendar';
//import SideBox from './components/SideBox';
=======
import SideBox from './components/SideBox';
//import Info from './components/Info'; // Import the Info component
//import { Calendar, TaskList } from './components/calendar';
//import SideNav from './components/Sidenav';

>>>>>>> ba56193 (just)


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <SideNav />
            <Calendar /> 
            
            {/*<Plant/>*/}
            
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
