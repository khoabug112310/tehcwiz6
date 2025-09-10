import React, { useState, useEffect } from 'react';
import emergencyContacts from '../../data/emergencyContacts.json';
import emergencySymptoms from '../../data/emergencySymptoms.json';
import emergencyGuidelines from '../../data/emergencyGuidelines.json';
import '../../css/Emergency.css';

const Emergency = () => {
  const [contacts] = useState(emergencyContacts);
  const [symptoms] = useState(emergencySymptoms);
  const [guidelines] = useState(emergencyGuidelines);

  // Function to handle calling emergency services
  const handleCall = (phoneNumber) => {
    // In a real application, this would initiate a call
    alert(`Calling ${phoneNumber} - In a real application, this would initiate a phone call.`);
  };

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <h2>Emergency and Vet Help</h2>
        <p>In case of emergency, please contact one of the following services immediately. When in doubt, it's always better to err on the side of caution and seek professional help.</p>
      </div>

      <div className="emergency-content">
        <div className="emergency-card">
          <div className="emergency-icon">📞</div>
          <h3>Emergency Hotline</h3>
          <p>For immediate assistance with any pet emergency, contact our 24/7 emergency hotline.</p>
          <div className="emergency-number">(555) 911-PETS</div>
          <button className="emergency-button" onClick={() => handleCall("(555) 911-PETS")}>
            Call Now
          </button>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">🏥</div>
          <h3>Emergency Vet</h3>
          <p>Our certified emergency veterinary team is available around the clock for critical care.</p>
          <div className="emergency-number">(555) 911-0001</div>
          <button className="emergency-button" onClick={() => handleCall("(555) 911-0001")}>
            Call Now
          </button>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">💊</div>
          <h3>Poison Control</h3>
          <p>Immediate advice on toxic substances and poisoning emergencies for pets.</p>
          <div className="emergency-number">(555) 911-0002</div>
          <button className="emergency-button" onClick={() => handleCall("(555) 911-0002")}>
            Call Now
          </button>
        </div>
      </div>

      <div className="symptoms-section">
        <h3>Emergency Symptoms to Watch For</h3>
        <div className="symptoms-grid">
          {symptoms.map((symptom) => (
            <div className="symptom-card" key={symptom.id}>
              <h4>{symptom.title}</h4>
              <p>{symptom.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="guidelines-section">
        <h3>Emergency Response Guidelines</h3>
        <div className="guidelines-steps">
          {guidelines.map((guideline) => (
            <div className="guideline-step" key={guideline.id}>
              <div className="step-number">{guideline.id}</div>
              <div className="step-content">
                <h4>{guideline.title}</h4>
                <p>{guideline.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="symptoms-section">
        <h3>Emergency Contact Services</h3>
        <table className="emergency-contacts">
          <thead>
            <tr>
              <th>Service</th>
              <th>Phone Number</th>
              <th>Hours</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.service}</td>
                <td className="emergency-number">{contact.phone}</td>
                <td>{contact.hours}</td>
                <td>{contact.description}</td>
                <td>
                  <button 
                    className="emergency-button" 
                    onClick={() => handleCall(contact.phone)}
                    style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                  >
                    Call
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Emergency;