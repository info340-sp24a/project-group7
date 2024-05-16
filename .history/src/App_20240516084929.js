import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info'; // Import the Info component
//import { Calendar, TaskList } from './components/calendar';
//import SideNav from './components/Sidenav';
//import SideBox from './components/SideBox';


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            {/* <SideNav /> */}
            {/* <Calendar /> */}
            {/* <TaskList /> */}
            <div className="main-content">
                <Info /> {/* Include the Info component here */}
                {/* <SideBox /> */}
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
