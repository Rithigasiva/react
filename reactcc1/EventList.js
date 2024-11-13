
import React from 'react';
import './EventList.css';

const events = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2024-09-15', link: '/events/1' },
    { id: 2, title: 'Science Fair', date: '2024-09-25', link: '/events/2' },
    { id: 3, title: 'Annual Day', date: '2024-10-05', link: '/events/3' },
    { id: 4, title: 'Industrial Visit', date: '2024-11-15', link: '/events/1' },
    { id: 5, title: 'Culturals', date: '2024-12-25', link: '/events/2' },
    { id: 6, title: 'Sports Day', date: '2025-01-05', link: '/events/3' },
];

const EventList = () => {
    return (
        <div className="event-list">
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                       
                            <div className="event-info">
                                <span className="event-title">{event.title}</span>
                                <span className="event-date">{event.date}</span>
                            </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;

