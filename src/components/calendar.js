import React from 'react';
import '../css/main.css'; // Import the CSS file
import '../css/calendar.css';

export default function Calendar() {
    return (
     <div class="main-content">
    <div class="calendar">
      <div class="header">
        <div class="month">May 2024</div>
        <div class="btns">
          {/*Today*/}
          <div class="btn today">
            <strong class="today">Today</strong>
          </div>
          {/*Previous month*/}
          <div class="btn prev" aria-label="previous month">
            <i class="fas fa-chevron-left"></i>
          </div>
        {/*Next month*/}
          <div class="btn next" aria-label="next month">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="weekdays">
        <div class="day">Sun</div>
        <div class="day">Mon</div>
        <div class="day">Tue</div>
        <div class="day">Wed</div>
        <div class="day">Thu</div>
        <div class="day">Fri</div>
        <div class="day">Sat</div>
      </div>
      <div class="days">
        {/*Previous month days*/}
        <div class="day-prev">28</div>
        <div class="day-prev">29</div>
        <div class="day-prev">30</div>

        {/*Current Month Days*/}
        <div class="day">1</div>
        <div class="day">2</div>
        <div class="day">3</div>
        <div class="day">4</div>
        <div class="day">5</div>
        <div class="day">6</div>
        <div class="day">7</div>
        <div class="day">8</div>
        <div class="day">9</div>
        <div class="day-today">10</div>
        <div class="day">11</div>
        <div class="day">12</div>
        <div class="day">13</div>
        <div class="day">14</div>
        <div class="day">15</div>
        <div class="day">16</div>
        <div class="day">17</div>
        <div class="day">18</div>
        <div class="day">19</div>
        <div class="day">20</div>
        <div class="day">21</div>
        <div class="day">22</div>
        <div class="day">23</div>
        <div class="day">24</div>
        <div class="day">25</div>
        <div class="day">26</div>
        <div class="day">27</div>
        <div class="day">28</div>
        <div class="day">29</div>
        <div class="day">30</div>
        <div class="day">31</div>

        {/*Next month days*/}
        <div class="day-next">1</div>
        <div class="day-next">2</div>
        <div class="day-next">3</div>


      </div>
    </div>

   {/*Tasks*/}
    <div class="tasks">
      <div class="today-date">
        <div class="event-day">Fri</div>
        <div class="event-date">10th May 2024</div>
      </div>
      <div class="events"></div>


      {/*Button*/}
      <div class="button">
        <a href="#modalbox" class="fas fa-plus"></a>
      </div>

      {/*Task Form*/}
      <div id="modalbox" class="modal">
        <div class="modalcontent">

          <div class="add-event-header">
            <div class="title">Add Event</div>
          </div>
          <div class="add-event-body">
            <div class="add-event-input">
              <input type="text" placeholder="Event Name" class="event-name" />
            </div>
            <div class="add-event-input">
              <input type="text" placeholder="Event Time From" class="event-time-from" />
            </div>
            <div class="add-event-input">
              <input type="text" placeholder="Event Time To" class="event-time-to" />
            </div>
          </div>
          <div class="add-event-footer">
            <button class="add-event-btn">Add Event</button>
          </div>
          <a href="#" class="modalclose">&times;</a>
        </div>
      </div>
    </div>
  </div>
    );
  }
  