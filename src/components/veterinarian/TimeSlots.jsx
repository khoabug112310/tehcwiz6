import React, { useState } from 'react';
import vetsData from '../../data/veterinarians.json';
import '../../css/TimeSlots.css';

const TimeSlots = () => {
  const [selectedVet, setSelectedVet] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  // Generate time slots for a day
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 16; hour++) {
      const time = `${hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
      // Randomly mark some slots as booked for demonstration
      const isBooked = Math.random() > 0.6;
      slots.push({
        time: time,
        status: isBooked ? 'booked' : 'available'
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleTimeSlotClick = (slot) => {
    if (slot.status === 'available') {
      setSelectedTime(slot.time);
    }
  };

  const handleBooking = () => {
    if (!selectedVet || !selectedDate || !selectedTime) {
      alert('Please select a veterinarian, date, and time slot.');
      return;
    }
    
    alert(`Appointment booked!\nVeterinarian: ${selectedVet}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nIn a real application, this would connect to our booking system.`);
    
    // Reset selection
    setSelectedTime('');
  };

  return (
    <div className="time-slots-container">
      <div className="time-slots-header">
        <h2 className='fw-bold fs-1'>Book an Appointment</h2>
        <p>Select a veterinarian, date, and available time slot to schedule your pet's appointment.</p>
      </div>

      <div className="booking-intro">
        <h3>Easy Online Booking</h3>
        <p>Schedule your pet's veterinary appointment in just a few simple steps. Our online booking system allows you to find available time slots that work with your schedule.</p>
      </div>

      <div className="vet-selection">
        <h3>Select a Veterinarian</h3>
        <select 
          value={selectedVet} 
          onChange={(e) => setSelectedVet(e.target.value)}
        >
          <option value="">Choose a veterinarian</option>
          {vetsData.map(vet => (
            <option key={vet.id} value={vet.name}>
              {vet.name} - {vet.specialization}
            </option>
          ))}
        </select>
      </div>

      <div className="date-selection">
        <h3>Select a Date</h3>
        <input 
          type="date" 
          className="date-picker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="time-slots-section">
        <h3>Available Time Slots</h3>
        <div className="time-slots-grid">
          {timeSlots.map((slot, index) => (
            <div 
              key={index} 
              className={`time-slot ${slot.status} ${selectedTime === slot.time ? 'selected' : ''}`}
              onClick={() => handleTimeSlotClick(slot)}
            >
              <span className="time">{slot.time}</span>
              <span className="status">
                {slot.status === 'available' ? 'Available' : 'Booked'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedVet && selectedDate && selectedTime && (
        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <div className="summary-content">
            <div className="summary-item">
              <span className="summary-label">Veterinarian:</span>
              <span className="summary-value">{selectedVet}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Date:</span>
              <span className="summary-value">{selectedDate}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Time:</span>
              <span className="summary-value">{selectedTime}</span>
            </div>
          </div>
          <button className="confirm-button" onClick={handleBooking}>
            Confirm Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default TimeSlots;