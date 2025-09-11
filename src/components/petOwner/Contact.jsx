import React, { useState, useEffect } from 'react';
import contactData from '../../data/contactInfo.json';
import '../../css/Contact.css';

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
        <h2 className='fw-bold fs-1'>Contact Us</h2>
        <p>We're here to help you and your furry friends. Reach out to us through any of the channels below.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h4 className='text-start'>Our Address</h4>
              <p>{contactData.contactDetails.address}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <h4 className='text-start'>Phone Number</h4>
              <p>{contactData.contactDetails.phone}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <h4 className='text-start'>Email Address</h4>
              <p>{contactData.contactDetails.email}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">🕒</div>
            <div className="contact-text">
              <h4 className='text-start'>Business Hours</h4>
              <p className='text-start'>{contactData.contactDetails.hours}</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="contact-icon">🌐</div>
            <div className="contact-text">
              <h4 className='text-start mt-2'>Follow Us</h4>
              <div className="social-links">
                {contactData.socialMedia.map((social, index) => (
                  <a className='text-start' key={index} href={social.url} target="_blank" rel="noopener noreferrer">
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
            
            <button type="submit" className="button2">
              {submitted ? "Message Sent! Thank You" : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="team-section">
        <h3>Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-member-image">
              <img src="./assets/image-pet-owner/tai.jpg" alt="Minh Tài - Project Manager" />
            </div>
            <h4>Minh Tài</h4>
            <p className="team-member-role">Project Manager</p>
            <p className="team-member-contact">
              <span>📧 tai.minh@furevercare.com</span>
              <span>📞 +84967373148</span>
            </p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="./assets/image-pet-owner/hung.jpg" alt="Hùng - Lead Developer" />
            </div>
            <h4>Hùng</h4>
            <p className="team-member-role">Lead Developer</p>
            <p className="team-member-contact">
              <span>📧 hung.dev@furevercare.com</span>
              <span>📞 +84967373149</span>
            </p>
          </div>
          
          <div className="team-member">
            <div className="team-member-image">
              <img src="./assets/image-pet-owner/phong.jpg" alt="Lâm Phong - UI/UX Designer" />
            </div>
            <h4>Lâm Phong</h4>
            <p className="team-member-role">UI/UX Designer</p>
            <p className="team-member-contact">
              <span>📧 lamphong0110@gmail.com</span>
              <span>📞 +84967373150</span>
            </p>
          </div>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0636479687845!2d106.62663331533507!3d10.79904399230163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c1c8c8c8c5%3A0x1234567890abcdef!2s21%20H%E1%BA%ADu%20Giang%2C%20T%C3%A2n%20B%C3%ACnh%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1642345678901!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FurEver Care Location - 21 Hậu Giang, Tân Bình"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;