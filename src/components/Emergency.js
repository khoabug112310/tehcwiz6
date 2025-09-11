import React, { useState, useEffect } from 'react';

const Emergency = () => {
  const [contacts, setContacts] = useState([]);

  // Load emergency contacts from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockContacts = [
      {
        service: "Emergency Veterinary Services",
        phone: "(555) 911-0001",
        hours: "24/7"
      },
      {
        service: "Pet Poison Control",
        phone: "(555) 911-0002",
        hours: "24/7"
      },
      {
        service: "Animal Ambulance",
        phone: "(555) 911-0003",
        hours: "24/7"
      },
      {
        service: "Lost Pet Hotline",
        phone: "(555) 911-0004",
        hours: "9AM-9PM"
      }
    ];
    
    setContacts(mockContacts);
  }, []);

  return (
    <div>
      <h2>Emergency and Vet Help</h2>
      <p>In case of emergency, please contact one of the following services immediately:</p>
      
      <table className="emergency-contacts">
        <thead>
          <tr>
            <th>Service</th>
            <th>Phone Number</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.service}</td>
              <td>{contact.phone}</td>
              <td>{contact.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emergency;