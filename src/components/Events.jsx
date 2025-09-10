import React, { useState, useEffect } from 'react';
import '../css/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  // Load events from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockEvents = [
      {
        id: 1,
        title: "Annual Adoption Fair",
        date: "October 15, 2025",
        description: "Join us for our biggest adoption event of the year! We'll have over 50 animals available for adoption, along with pet care experts and fun activities for the whole family.",
        time: "10:00 AM - 4:00 PM"
      },
      {
        id: 2,
        title: "Vaccination Drive",
        date: "November 5, 2025",
        description: "Low-cost vaccination clinic for dogs and cats. All proceeds support our shelter operations.",
        time: "9:00 AM - 3:00 PM"
      },
      {
        id: 3,
        title: "Pet Halloween Costume Contest",
        date: "October 31, 2025",
        description: "Dress up your pets in their best costumes and participate in our contest! Prizes for 1st, 2nd, and 3rd place winners.",
        time: "2:00 PM - 5:00 PM"
      }
    ];
    
    setEvents(mockEvents);
  }, []);

  // Function to get event icon based on event type
  const getEventIcon = (title) => {
    if (title.includes("Adoption")) return "🐾";
    if (title.includes("Vaccination")) return "💉";
    if (title.includes("Halloween")) return "🎃";
    if (title.includes("Contest")) return "🏆";
    return "📅";
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <p>Join us for these exciting events at our animal shelter!</p>
      
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.id} className="event-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="event-icon">{getEventIcon(event.title)}</div>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p>{event.description}</p>
            <div className="event-footer">
              <button className="event-button">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;