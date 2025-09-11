import React, { useState } from 'react';
import vetsData from '../data/veterinarians.json';
import servicesData from '../data/vetServices.json';
import '../css/VetProfile.css';

const VetProfile = () => {
  const [vets] = useState(vetsData);
  const [services] = useState(servicesData);

  const handleBooking = () => {
    alert('Redirecting to appointment booking system. In a real application, this would take you to our online booking portal.');
  };

  return (
    <div className="vet-container">
      <div className="vet-header">
        <h2>Meet Our Veterinarians</h2>
        <p>Our team of experienced and compassionate veterinarians is dedicated to providing the highest quality care for your beloved pets.</p>
      </div>

      <div className="vet-intro">
        <h3>Expert Care for Your Pets</h3>
        <p>At FurEver Care, we believe that exceptional veterinary care begins with building trust between pets, their families, and our veterinary team. Our veterinarians bring years of experience, specialized training, and genuine compassion to every patient interaction.</p>
        <p>Each member of our veterinary team is committed to staying current with the latest advances in veterinary medicine through continuing education and professional development.</p>
      </div>

      <div className="vet-profiles">
        {vets.map(vet => (
          <div key={vet.id} className="vet-profile-card">
            <div className="vet-image-container">
              <img src={vet.image} alt={vet.name} />
            </div>
            <div className="vet-info">
              <h3>{vet.name}</h3>
              <p className="vet-specialization">{vet.specialization}</p>
              <p className="vet-bio">{vet.bio}</p>
              
              <div className="vet-contact">
                <h4>Contact Information</h4>
                <p>📧 {vet.contact.email}</p>
                <p>📞 {vet.contact.phone}</p>
                <p>📍 {vet.contact.office}</p>
                <p>🕒 {vet.availability}</p>
              </div>
              
              <div className="vet-education">
                <h4>Education & Certifications</h4>
                <ul>
                  {vet.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="vet-services">
        <h3>Our Veterinary Services</h3>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-section">
        <h3>Ready to Schedule an Appointment?</h3>
        <p>Book an appointment with one of our veterinarians today. We offer convenient online scheduling and same-day emergency appointments.</p>
        <button className="booking-button" onClick={handleBooking}>
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default VetProfile;