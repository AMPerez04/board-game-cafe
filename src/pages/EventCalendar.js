import React from 'react';
import FullCalendar from '@fullcalendar/react';
import './EventCalendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Board Game Night', date: '2024-07-12' },
          { title: 'Strategy Workshop', date: '2024-07-13' },
          { title: 'Bloomburrow Pre-release 6pm', date: '2024-07-26' },
          { title: 'Bloomburrow Pre-release 5pm', date: '2024-07-27' },
          { title: 'Bloomburrow Pre-release 6pm', date: '2024-07-29' },
          { title: 'RCQ Round 7 Pioneer 10am', date: '2024-06-30' },
          { title: 'Commander Night 6pm', date: '2024-07-17' },
          { title: 'Commander Night 6pm', date: '2024-07-24' },
          { title: 'Commander Night 6pm', date: '2024-07-31' },
          { title: 'Commander Night 6pm', date: '2024-08-07' },
          { title: 'Commander Night 6pm', date: '2024-07-14' },
          { title: 'Modern 7pm', date: '2024-07-18' },
          { title: 'Modern 7pm', date: '2024-08-01' },
          { title: 'Modern 7pm', date: '2024-07-25' },
        ]} 
      />{/* Footer */}
      <div className='end'>
        <p>sipnplaynyc@gmail.com</p>
        <p>718-971-1684</p>
        <p><br></br></p>
        <p>©2020 by Sip & Play</p></div>
    </div>
  );
}

export default EventCalendar;
