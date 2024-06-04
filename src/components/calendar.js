/* References:
    Calendar: https://www.youtube.com/watch?v=u_ocJEv6c4Q&ab_channel=OpenSourceCoding
    Event Form: https://www.youtube.com/watch?v=r1devGCrm2Y&t=418s&ab_channel=OpenSourceCoding */

    import React, { useState, useEffect } from 'react';
    import '../css/main.css'; 
    import '../css/calendar.css';
    import { getDatabase, ref, onValue, set, push } from 'firebase/database';
    import { getAuth } from 'firebase/auth';
    
    export default function Calendar() {
      const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
      const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
      const [events, setEvents] = useState([]);
      const [selectedDate, setSelectedDate] = useState(new Date());
      const [showAddEventForm, setShowAddEventForm] = useState(false);
      const [newEvent, setNewEvent] = useState({ name: '', timeFrom: '', timeTo: '' });
    
      const auth = getAuth();
      const user = auth.currentUser;
    
      const db = getDatabase();
      const eventsRef = ref(db, `events/${user?.uid}`);
    
      useEffect(() => {
        if (user) {
          onValue(eventsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const eventsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
              setEvents(eventsArray);
            } else {
              setEvents([]);
            }
          });
        }
      }, [user, eventsRef]);
    
      const handleAddEvent = () => {
        if (newEvent.name && newEvent.timeFrom && newEvent.timeTo) {
          const eventRef = push(eventsRef);
          set(eventRef, { ...newEvent, date: selectedDate.toDateString() })
            .then(() => {
              setNewEvent({ name: '', timeFrom: '', timeTo: '' });
              setShowAddEventForm(false);
            })
            .catch((error) => console.error('Error adding event: ', error));
        } else {
          alert('Please fill all the fields and select a date');
        }
      };
    
      const handleEventDelete = (eventToDelete) => {
        const eventRef = ref(db, `events/${user.uid}/${eventToDelete.id}`);
        set(eventRef, null)
          .then(() => console.log('Event deleted successfully'))
          .catch((error) => console.error('Error deleting event: ', error));
      };
    
      const handleDayClick = (day) => {
        const selected = new Date(currentYear, currentMonth, day);
        setSelectedDate(selected);
        setShowAddEventForm(true);
      };
    
      const handlePrev = () => {
        if (currentMonth === 0) {
          setCurrentMonth(11);
          setCurrentYear(currentYear - 1);
        } else {
          setCurrentMonth(currentMonth - 1);
        }
      };
    
      const handleNext = () => {
        if (currentMonth === 11) {
          setCurrentMonth(0);
          setCurrentYear(currentYear + 1);
        } else {
          setCurrentMonth(currentMonth + 1);
        }
      };
    
      const renderEvents = (date) => {
        return events
          .filter(event => event.date === date.toDateString())
          .map(event => (
            <div key={event.id} className="event">
              <div className="event-title">{event.name}</div>
              <div className="event-time">{event.timeFrom} - {event.timeTo}</div>
              <button className="delete-event" onClick={() => handleEventDelete(event)}>Delete</button>
            </div>
          ));
      };
    
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
                <div className="btn today" onClick={() => { setCurrentMonth(new Date().getMonth()); setCurrentYear(new Date().getFullYear()); }}>
                  <strong className="today">Today</strong>
                </div>
                <div aria-label='prev-month'  className="btn prev" onClick={handlePrev}>
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div aria-label='next-month' className="btn next" onClick={handleNext}>
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
                <div
                  key={`current${index + 1}`}
                  className={`day ${currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() && index + 1 === new Date().getDate() ? 'today' : ''}`}
                  onClick={() => handleDayClick(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
              {[...Array(nextDays).keys()].map(index => (
                <div key={`next${index}`} className="day next">{index + 1}</div>
              ))}
            </div>
          </div>
        );
      };
    
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
      return (
        <div className="container">
          <div className="left">
            {renderCalendar()}
          </div>
    
          <div className="right">
            <div className="today-date">
              <div className="event-day">{days[selectedDate.getDay()]}</div>
              <div className="event-date">{selectedDate.getDate()} {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</div>
            </div>
            <div className="events">
              {renderEvents(selectedDate)}
            </div>
            <div className={`add-event-wrapper ${showAddEventForm ? 'active' : ''}`}>
              <div className="add-event-header">
                <div className="title">Add Event</div>
                <button aria-label='close-form'  className="fas fa-times close" onClick={() => setShowAddEventForm(false)} >
                </button>
              </div>
              <div className="add-event-body">
                <div className="add-event-input">
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="event-name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                  />
                </div>
                <div className="add-event-input">
                  <input
                    type="time"
                    placeholder="Event Time From"
                    className="event-time-from"
                    value={newEvent.timeFrom}
                    onChange={(e) => setNewEvent({ ...newEvent, timeFrom: e.target.value })}
                  />
                </div>
                <div className="add-event-input">
                  <input
                    type="time"
                    placeholder="Event Time To"
                    className="event-time-to"
                    value={newEvent.timeTo}
                    onChange={(e) => setNewEvent({ ...newEvent, timeTo: e.target.value })}
                  />
                </div>
              </div>
              <div className="add-event-footer">
                <button className="add-event-btn" onClick={handleAddEvent}>Add Event</button>
              </div>
            </div>
          </div>
          <button aria-label='add-new-event' className="add-event" onClick={() => setShowAddEventForm(true)}>
            <i className="fas fa-plus" />
          </button>
        </div>
      );
    }
    