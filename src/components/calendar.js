import React, { useState } from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/calendar.css';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
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

