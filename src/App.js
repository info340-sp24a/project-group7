import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
//import Plant from './components/plantinfo'; // Import the Info component
import Calendar from './components/calendar';
//import SideBox from './components/SideBox';


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <SideNav />
            <Calendar /> 
            
            {/*<Plant/>*/}
            
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
