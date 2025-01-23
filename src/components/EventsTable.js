import React, { useState, useEffect } from 'react';
import './EventsTable.css';

const EventsTable = ({ accessToken }) => {
    const [events, setEvents] = useState([]);
    const [dateFilter, setDateFilter] = useState('');

    useEffect(() => {
        // Mock fetching events from an API or backend
        const fetchEvents = async () => {
            const mockEvents = [
                { name: 'Team Meeting', date: '2025-01-18', time: '10:00 AM', location: 'Virtual (Google Meet)' },
                { name: 'Project Kickoff', date: '2025-01-19', time: '2:00 PM', location: 'Office Room 301' },
                { name: 'AC Maintenance Visit', date: '2025-01-20', time: '9:00 AM', location: 'Client Location' },
                { name: 'Marketing Strategy Call', date: '2025-01-21', time: '1:30 PM', location: 'Virtual (Zoom)' },
                { name: 'Product Launch Review', date: '2025-01-22', time: '3:00 PM', location: 'Main Hall, HQ' },
            ];
            setEvents(mockEvents);
        };

        fetchEvents();
    }, []);

    const handleDateFilterChange = (e) => {
        setDateFilter(e.target.value);
    };

    const filteredEvents = dateFilter
        ? events.filter((event) => event.date === dateFilter)
        : events;

    return (
        <div className="events-table">
            <div className="filter-container">
                <label htmlFor="dateFilter">Filter by Date:</label>
                <input
                    type="date"
                    id="dateFilter"
                    value={dateFilter}
                    onChange={handleDateFilterChange}
                />
            </div>

            <table>
                <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <tr key={index}>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.time}</td>
                            <td>{event.location}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No events found for the selected date.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default EventsTable;
