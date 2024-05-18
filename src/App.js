import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/Sidenav';
import PlantGallery from './components/mainindex';
import Plant from './components/plantinfo'; 
import Calendar from './components/calendar';

//import SideBox from './components/SideBox';


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <SideNav />
            <PlantGallery />
            {/*<Plant/>*/}
            {/*<Calendar />*/ }
            
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
