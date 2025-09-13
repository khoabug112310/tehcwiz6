import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "../../css/VetProfile.css"; // Using existing CSS file since TimeSlots.css is missing
import veterinariansData from "../../data/veterinarians.json";

const TimeSlots = () => {
  const [vetData, setVetData] = useState(null);

  // Static time slots for display with detailed examples
  const timeSlots = [
    { 
      time: "9:00 AM", 
      status: "booked",
      detail: "Dental examination for dogs at HCM clinic"
    },
    { 
      time: "10:00 AM", 
      status: "available",
      detail: "General checkup for cats"
    },
    { 
      time: "11:00 AM", 
      status: "available",
      detail: "Vaccination for puppies"
    },
    { 
      time: "12:00 PM", 
      status: "booked",
      detail: "Surgery consultation for senior pets"
    },
    { 
      time: "1:00 PM", 
      status: "booked",
      detail: "Emergency care for injured animals"
    },
    { 
      time: "2:00 PM", 
      status: "available",
      detail: "Nutrition counseling for exotic pets"
    },
    { 
      time: "3:00 PM", 
      status: "available",
      detail: "Behavioral assessment for aggressive dogs"
    },
    { 
      time: "4:00 PM", 
      status: "booked",
      detail: "Dermatology treatment for allergic cats"
    }
  ];

  // Function to find veterinarian by name (fuzzy matching)
  const findVeterinarianByName = (name) => {
    if (!name) return null;
    
    // Normalize the name for comparison
    const normalizedName = name.toLowerCase().trim();
    
    // Try exact match first
    let vet = veterinariansData.find(v => 
      v.name.toLowerCase() === normalizedName || 
      v.name.toLowerCase() === `dr. ${normalizedName}`
    );
    
    // If no exact match, try partial match
    if (!vet) {
      vet = veterinariansData.find(v => 
        v.name.toLowerCase().includes(normalizedName) ||
        normalizedName.includes(v.name.toLowerCase())
      );
    }
    
    return vet;
  };

  useEffect(() => {
    // Get user name from localStorage
    const savedUserName = localStorage.getItem('userName');
    
    if (savedUserName) {
      // Try to find matching veterinarian data
      const matchedVet = findVeterinarianByName(savedUserName);
      
      if (matchedVet) {
        setVetData(matchedVet);
      }
    }
  }, []);

  const handleBookAppointment = () => {
    Swal.fire({
      title: 'Redirecting...',
      text: 'Redirecting to appointment booking system. In a real application, this would take you to our online booking portal.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  // Since we're validating at login, we should always have data
  if (!vetData) {
    return (
      <div className="vet-container">
        <div className="no-data-message">
          <h2>Error Loading Profile</h2>
          <p>There was an issue loading your profile information. Please contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="vet-container">
      <div className="vet-profiles">
        <div className="vet-profile-card">
          <div className="profile-header">
            <h2>{vetData.name}</h2>
            <p>Appointment Schedule</p>
          </div>
        </div>
      </div>
      
      <div className="time-slots-section">
        <h3>Available Time Slots</h3>
        <p className="section-description">
          Below is the current schedule for appointments. Hover over each time slot to see details about the appointment.
          Booked slots show existing appointments, while available slots can be reserved for new consultations.
        </p>
        <div className="time-slots-grid">
          {timeSlots.map((slot, index) => (
            <div 
              key={index} 
              className={`time-slot ${slot.status}`}
              title={slot.status === 'booked' ? `Appointment booked for ${slot.time}: ${slot.detail}` : `${slot.time} is available: ${slot.detail}`}
            >
              <span className="time">{slot.time}</span>
              <span className="status">
                {slot.status === 'available' ? 'Available' : 'Booked'}
              </span>
              <span className="detail">{slot.detail}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="booking-info">
        <h3>Booking Information</h3>
        <div className="booking-details">
          <div className="info-card">
            <h4>📞 Contact for Booking</h4>
            <p><strong>Phone:</strong> {vetData.phone || 'Not provided'}</p>
            <p><strong>Email:</strong> {vetData.email || 'Not provided'}</p>
            <p><strong>Office:</strong> {vetData.office || 'Not provided'}</p>
          </div>
          
          <div className="info-card">
            <h4>🕒 Office Hours</h4>
            <p><strong>Monday-Friday:</strong> 8:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
            <p><strong>Sunday:</strong> Emergency Only</p>
          </div>
          
          <div className="info-card">
            <h4>📋 Appointment Types</h4>
            <ul>
              <li>General Checkups (30 mins)</li>
              <li>Vaccinations (30 mins)</li>
              <li>Surgery Consultations (60 mins)</li>
              <li>Emergency Care (Priority)</li>
              <li>Specialist Referrals (By appointment)</li>
            </ul>
          </div>
        </div>
        
        <div className="booking-cta">
          <button className="booking-button" onClick={handleBookAppointment}>
            Request Appointment
          </button>
          <p className="booking-note">
            For emergency cases, please call directly. Same-day appointments may be available for urgent matters.
          </p>
        </div>
      </div>
      
      <div className="policy-section">
        <h3>Appointment Policies</h3>
        <div className="policy-content">
          <div className="policy-item">
            <h4>Cancellation Policy</h4>
            <p>Please provide at least 24 hours notice for appointment cancellations to allow us to offer the slot to another pet in need.</p>
          </div>
          
          <div className="policy-item">
            <h4>Arrival Time</h4>
            <p>Please arrive 10-15 minutes before your scheduled appointment to complete any necessary paperwork.</p>
          </div>
          
          <div className="policy-item">
            <h4>Emergency Care</h4>
            <p>For after-hours emergencies, our on-call veterinarian is available. Call the main number for instructions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlots;