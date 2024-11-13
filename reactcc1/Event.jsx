import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './Event.css';

function UpcomingEvents1() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', location: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'http://localhost:3000/events'; 

  // Fetch the list of events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(apiUrl);
        setEvents(response.data);
      } catch (err) {
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [apiUrl]);

  // Set the event for editing and populate the form with event details
  const handleEditClick = (event) => {
    setEditEvent(event);
    setFormData(event); // Populate form with selected event's details
  };

  // Update the form state as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Save the edited event details
  const handleSave = async () => {
    // Validate form data
    if (!formData.title || !formData.date || !formData.location) {
      alert('All fields are required!');
      return;
    }

    // Merge the updated data with the original event
    const updatedEvent = { ...editEvent, ...formData };

    try {
      // Send PUT request to update the event in the backend
      const response = await axios.put(`${apiUrl}/${editEvent.id}`, updatedEvent);
      if (response.status === 200) {
        // Update the events list in the state
        setEvents(events.map(event => (event.id === editEvent.id ? updatedEvent : event)));

        // Clear the edit form and close edit mode
        setEditEvent(null); 
      } else {
        alert('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert(`Failed to update event: ${error.response?.data?.message || error.message}`);
    }
  };

  // Show loading message while events are being fetched
  if (loading) {
    return <div>Loading events...</div>;
  }

  // Show error message if any error occurred during fetch
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="div1">
      <div className="upcoming-box">
        <h2 className="upcoming-heading">Schedule</h2>
        
        {events.length === 0 ? (
          <p>No upcoming events found.</p>
        ) : (
          <ul className="upcoming-list">
            {events.map((event) => (
              <li key={event.id} className="upcoming-item">
                <strong className="upcoming-title">{event.title}</strong> - {event.date} ({event.location})
                <button className="edit-button" onClick={() => handleEditClick(event)}>Edit</button>
              </li>
            ))}
          </ul>
        )}

        {editEvent && (
          <div className="edit-form">
            <h3>Edit Event</h3>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title"
            /><br />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            /><br />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
            /><br />
            <center>
              <button className="save-button" onClick={handleSave}>Save</button><br />
              <button className="cancel-button" onClick={() => setEditEvent(null)}>Cancel</button>
            </center>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents1;
