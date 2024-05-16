import React from 'react';
import Navbar from './components/Navbar';
//import { Calendar, TaskList } from './components/calendar';
//import SideNav from './components/Sidenav';
import SideBox from './SideBox';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
             /*<SideNav /> */
            <Calendar />
            <TaskList />
            <div className="main-content">
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
