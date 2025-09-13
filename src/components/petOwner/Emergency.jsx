import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emergencyContacts from '../../data/emergencyContacts.json';
import emergencySymptoms from '../../data/emergencySymptoms.json';
import "../../css/Emergency.css";

const Emergency = () => {
  const [contacts] = useState(emergencyContacts);
  const [symptoms] = useState(emergencySymptoms);

  // Function to handle calling emergency services
  const handleCall = (phoneNumber, clinicName) => {
    Swal.fire({
      title: 'Calling...',
      text: `Calling ${phoneNumber} - In a real application, this would initiate a phone call.`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
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
          <div className="emergency-number">+84967373148</div>
          <button className="button2" onClick={() => handleCall("+84967373148")}>
            Call Now
          </button>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">🏥</div>
          <h3>Emergency Vet</h3>
          <p>Our certified emergency veterinary team is available around the clock for critical care.</p>
          <div className="emergency-number">+84702513458</div>
          <button className="button2" onClick={() => handleCall("+84702513458")}>
            Call Now
          </button>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">💊</div>
          <h3>Poison Control</h3>
          <p>Immediate advice on toxic substances and poisoning emergencies for pets.Immediate advice</p>
          <div className="emergency-number">+84776391599</div>
          <button className="button2" onClick={() => handleCall("+84776391599")}>
            Call Now
          </button>
        </div>
      </div>

      <div className="symptoms-section">
        <h3>Emergency Symptoms to Watch For</h3>
        <div className="symptoms-content">
          <div className="symptoms-text">
            <div className="symptoms-grid">
              {symptoms.slice(0, 4).map((symptom) => (
                <div className="symptom-card" key={symptom.id}>
                  <h4>{symptom.title}</h4>
                  <p>{symptom.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="symptoms-video">
            <div className="video-container">
              <iframe 
                width="560" 
                height="350" 
                src="https://www.youtube.com/embed/eOY_qUSw2WA?si=hpIRj7HD9WPnjira&autoplay=1&loop=1&playlist=eOY_qUSw2WA&mute=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
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
                    className="button2" 
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