import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About FurEver Care</h2>
        <p className="tagline">They Deserve Forever Love</p>
      </div>
      
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          At FurEver Care, our mission is to enhance the lives of pets and their owners by providing 
          comprehensive care solutions, fostering responsible pet ownership, and supporting animal welfare 
          organizations. We believe every pet deserves a loving, healthy life and every owner deserves 
          the resources they need to provide it.
        </p>
      </div>
      
      <div className="about-section">
        <h3>What We Offer</h3>
        <div className="services-grid">
          <div className="service-card">
            <h4>Pet Owner Resources</h4>
            <p>Comprehensive tools for managing your pet's health, nutrition, and wellness.</p>
          </div>
          <div className="service-card">
            <h4>Veterinary Support</h4>
            <p>Professional resources for veterinarians to better serve their patients.</p>
          </div>
          <div className="service-card">
            <h4>Animal Shelter Network</h4>
            <p>Supporting shelters with adoption services and community outreach programs.</p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h3>Our Story</h3>
        <p>
          Founded in 2025, FurEver Care began as a passion project by a group of pet lovers who recognized 
          the need for a centralized platform to support all aspects of pet care. What started as a simple 
          idea has evolved into a comprehensive solution serving pet owners, veterinarians, and animal 
          shelters across the community.
        </p>
      </div>
      
      <div className="about-section">
        <h3>Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image">
              <div className="placeholder-avatar">AJ</div>
            </div>
            <h4>Alex Johnson</h4>
            <p className="team-role">Project Manager</p>
            <p className="team-bio">With over 10 years of experience in project management, Alex ensures our development process runs smoothly and efficiently.</p>
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <div className="placeholder-avatar">MG</div>
            </div>
            <h4>Maria Garcia</h4>
            <p className="team-role">Lead Developer</p>
            <p className="team-bio">Maria brings her full-stack development expertise to create robust and user-friendly features.</p>
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <div className="placeholder-avatar">DS</div>
            </div>
            <h4>David Smith</h4>
            <p className="team-role">UI/UX Designer</p>
            <p className="team-bio">David focuses on creating intuitive and visually appealing interfaces that enhance user experience.</p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h3>Our Values</h3>
        <div className="values-list">
          <div className="value-item">
            <h4>Compassion</h4>
            <p>We approach every interaction with empathy and kindness toward pets and their owners.</p>
          </div>
          <div className="value-item">
            <h4>Integrity</h4>
            <p>We maintain the highest standards of honesty and transparency in all our operations.</p>
          </div>
          <div className="value-item">
            <h4>Innovation</h4>
            <p>We continuously seek new ways to improve pet care through technology and creativity.</p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>We believe in building strong connections between pet owners, professionals, and shelters.</p>
          </div>
        </div>
      </div>
      
      <div className="contact-section">
        <h3>Get In Touch</h3>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p>Email: info@furevercare.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </div>
  );
};

export default About;