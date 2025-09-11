import React, { useState, useEffect } from 'react';
import eventsData from '../../data/events.json';
import '../../css/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  // Load events from JSON file
  useEffect(() => {
    setEvents(eventsData);
    setFilteredEvents(eventsData);
  }, []);

  // Get unique months and years from events
  const getUniqueMonths = () => {
    const months = events.map(event => {
      const date = new Date(event.date);
      return date.toLocaleString('default', { month: 'long' });
    });
    return [...new Set(months)];
  };

  const getUniqueYears = () => {
    const years = events.map(event => {
      const date = new Date(event.date);
      return date.getFullYear().toString();
    });
    return [...new Set(years)];
  };

  // Filter events based on selected month and year
  useEffect(() => {
    let filtered = events;
    
    if (selectedMonth !== 'all') {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
      });
    }
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear().toString() === selectedYear;
      });
    }
    
    setFilteredEvents(filtered);
  }, [selectedMonth, selectedYear, events]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to get time icon
  const getTimeIcon = () => {
    return "⏰";
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h2 className='fs-1 fw-bold'>Upcoming Events</h2>
        <p>Join us for these exciting events at our animal shelter!</p>
      </div>
      
      <div className="events-filter">
        <div className="filter-group">
          <label htmlFor="month-filter">Filter by Month:</label>
          <select 
            id="month-filter"
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">All Months</option>
            {getUniqueMonths().map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="year-filter">Filter by Year:</label>
          <select 
            id="year-filter"
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">All Years</option>
            {getUniqueYears().map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={event.id} className="event-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="event-image">
               <img
  src={event.image ? `/${event.image}` : "/assets/animalShelter/eventsPictures/interfest2026.png"}
  alt={event.title}
/>
              </div>
              <div className="event-content">
                <span className="event-date">{formatDate(event.date)}</span>
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-meta">
                  <div className="event-time">
                    {getTimeIcon()} {event.time}
                  </div>
                </div>
                <div className="event-actions">
                  <button className="register-button">Register Now</button>
                  <button className="details-button">Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <h3>No Events Found</h3>
            <p>There are no events matching your selected filters. Please try different filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;