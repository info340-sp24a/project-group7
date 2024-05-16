import React from 'react';
import Navbar from './components/Navbar';
import {Calendar, TaskList} from './components/calendar';
import SideNav from './components/Sidenav';


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <SideNav />
            <Calendar />
            <TaskList />
            <footer>
                <p>&copy; Plant Parenthood</p>
            </footer>
        </div>
    );
};

export default App;
