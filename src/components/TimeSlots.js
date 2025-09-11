import React from 'react';

const TimeSlots = () => {
  // Mock data for time slots
  const timeSlots = [
    { time: "9:00 AM", status: "available" },
    { time: "10:00 AM", status: "booked" },
    { time: "11:00 AM", status: "available" },
    { time: "12:00 PM", status: "booked" },
    { time: "1:00 PM", status: "available" },
    { time: "2:00 PM", status: "available" },
    { time: "3:00 PM", status: "booked" },
    { time: "4:00 PM", status: "available" }
  ];

  return (
    <div>
      <h2>Appointment Time Slots</h2>
      <p>View available and booked appointment times below:</p>
      
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <div 
            key={index} 
            className={`time-slot ${slot.status}`}
          >
            <span className="time">{slot.time}</span>
            <span className="status">
              {slot.status === 'available' ? 'Available' : 'Booked'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;