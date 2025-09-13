import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../../css/Contact.css";
import contactData from "../../data/contactInfo.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Success message (in a real app, you would send the data to a server here)
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you as soon as possible.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
              Send Message
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
    </div>
  );
};

export default Contact;