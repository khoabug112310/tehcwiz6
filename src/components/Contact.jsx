import React, { useState, useEffect } from 'react';
import contactData from '../data/contactInfo.json';
import '../css/Contact.css';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // In a real app, we would send this data to a server
    console.log('Contact form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We're here to help you and your furry friends. Reach out to us through any of the channels below.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h4>Our Address</h4>
              <p>{contactData.contactDetails.address}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <h4>Phone Number</h4>
              <p>{contactData.contactDetails.phone}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <h4>Email Address</h4>
              <p>{contactData.contactDetails.email}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">🕒</div>
            <div className="contact-text">
              <h4>Business Hours</h4>
              <p>{contactData.contactDetails.hours}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">🌐</div>
            <div className="contact-text">
              <h4>Follow Us</h4>
              <div className="social-links">
                {contactData.socialMedia.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.icon} {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please share your thoughts, questions, or concerns..."
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              {submitted ? "Message Sent! Thank You" : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="team-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          {contactData.team.map((member) => (
            <div key={member.id} className="team-member">
              <div className="team-member-avatar">
                {member.avatar}
              </div>
              <h4>{member.name}</h4>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-contact">
                <span>📧 {member.email}</span>
                <span>📞 {member.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="real-time-info">
        <h3>Real-time Information</h3>
        <p><strong>Current Time:</strong> {currentTime.toLocaleTimeString()}</p>
        {location && (
          <p><strong>Your Location:</strong> {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}</p>
        )}
      </div>

      <div className="map-section">
        <h3>Find Us on the Map</h3>
        <div className="map-container">
          <div className="map-placeholder">
            Google Maps would be embedded here in a real implementation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;