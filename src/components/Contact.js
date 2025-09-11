import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.log('Error getting location:', error);
          setLocation({ latitude: 40.7128, longitude: -74.0060 }); // Default to New York
        }
      );
    } else {
      setLocation({ latitude: 40.7128, longitude: -74.0060 }); // Default to New York
    }
  }, []);

  // Load contact information
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockContactInfo = {
      team: [
        {
          name: "Alex Johnson",
          role: "Project Manager",
          email: "alex.johnson@furevercare.com",
          phone: "(555) 111-2222"
        },
        {
          name: "Maria Garcia",
          role: "Lead Developer",
          email: "maria.garcia@furevercare.com",
          phone: "(555) 222-3333"
        },
        {
          name: "David Smith",
          role: "UI/UX Designer",
          email: "david.smith@furevercare.com",
          phone: "(555) 333-4444"
        }
      ],
      address: "123 Pet Care Avenue, Animal City, AC 12345",
      hours: "Monday-Friday: 9AM-6PM, Saturday: 10AM-4PM, Sunday: Closed"
    };
    
    setContactInfo(mockContactInfo);
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      
      {contactInfo && (
        <div className="contact-info">
          <h3>Our Team</h3>
          <div className="team-grid">
            {contactInfo.team.map((member, index) => (
              <div key={index} className="team-member">
                <h4>{member.name}</h4>
                <p><strong>{member.role}</strong></p>
                <p>Email: {member.email}</p>
                <p>Phone: {member.phone}</p>
              </div>
            ))}
          </div>
          
          <div className="contact-details">
            <h4>Office Address</h4>
            <p>{contactInfo.address}</p>
            
            <h4>Business Hours</h4>
            <p>{contactInfo.hours}</p>
          </div>
        </div>
      )}
      
      <div className="real-time-info">
        <h3>Real-time Information</h3>
        <p><strong>Current Time:</strong> {currentTime.toLocaleTimeString()}</p>
        {location && (
          <p><strong>Your Location:</strong> {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}</p>
        )}
      </div>
      
      <div className="map-placeholder">
        <h3>Our Location</h3>
        <p>Google Map would be embedded here in a real implementation.</p>
        <div className="map-container">
          <p>Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;