import React, { useState } from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/calendar.css';

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    // "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    return (
      <div className="calendar">
        <div className="header">
          <div className="month">{`${months[currentMonth]} ${currentYear}`}</div>
          <div className="btns">
            <div className="btn today" onClick={() => setCurrentMonth(new Date().getMonth())}>
              <strong className="today">Today</strong>
            </div>
            <div className="btn prev" onClick={() => setCurrentMonth(prevMonth => prevMonth - 1)}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="btn next" onClick={() => setCurrentMonth(nextMonth => nextMonth + 1)}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="weekdays">
          {days.map(day => (
            <div key={day} className="day">{day}</div>
          ))}
        </div>
        <div className="days">
          {[...Array(firstDay.getDay()).keys()].map(index => (
            <div key={`prev${index}`} className="day prev">{prevLastDayDate - index}</div>
          ))}
          {[...Array(lastDayDate).keys()].map(index => (
            <div key={`current${index + 1}`} className={`day ${currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() && index + 1 === new Date().getDate() ? 'today' : ''}`}>{index + 1}</div>
          ))}
          {[...Array(nextDays).keys()].map(index => (
            <div key={`next${index}`} className="day next">{index + 1}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="main-content">
      {renderCalendar()}
    </div>
  );
}

///////////////////////////////////////////////////////////////

export const TaskList = () => {
  return (
    <div className="main-content">
    <div className="tasks">
      <div className="today-date">
        <div className="event-day">Fri</div>
        <div className="event-date">10th May 2024</div>
      </div>
      <div className="events"></div>

      {/* Add button */}
      <div className="button">
        <a href="#modalbox" className="fas fa-plus"></a>
      </div>

      {/* Add form */}
      <div id="modalbox" className="modal">
        <div className="modalcontent">
          <div className="add-event-header">
            <div className="title">Add Event</div>
          </div>
          <div className="add-event-body">
            <div className="add-event-input">
              <input type="text" placeholder="Event Name" className="event-name" />
            </div>
            <div className="add-event-input">
              <input type="text" placeholder="Event Time From" className="event-time-from" />
            </div>
            <div className="add-event-input">
              <input type="text" placeholder="Event Time To" className="event-time-to" />
            </div>
          </div>
          <div className="add-event-footer">
            <button className="add-event-btn">Add Event</button>
          </div>
          <a href="#" className="modalclose">&times;</a>
        </div>
      </div>
    </div>
    </div>
  );
};
