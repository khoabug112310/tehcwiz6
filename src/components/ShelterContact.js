import React from 'react';

const ShelterContact = () => {
  return (
    <div>
      <h2>Animal Shelter Contact</h2>
      <p>Get in touch with us for adoptions, volunteering, or questions.</p>
      
      <div className="contact-details">
        <h3>Our Location</h3>
        <p>123 Pet Care Avenue, Animal City, AC 12345</p>
        
        <h3>Phone</h3>
        <p>(555) 987-6543</p>
        
        <h3>Email</h3>
        <p>info@furevercare-shelter.com</p>
        
        <h3>Hours</h3>
        <p>Monday-Friday: 10AM-6PM</p>
        <p>Saturday-Sunday: 9AM-5PM</p>
      </div>
      
      <div className="map-placeholder">
        <h3>Find Us on the Map</h3>
        <p>Google Map would be embedded here in a real implementation.</p>
        <div className="map-container">
          <p>Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ShelterContact;