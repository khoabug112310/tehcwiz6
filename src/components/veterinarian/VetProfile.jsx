import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "../../css/VetProfile.css";
import veterinariansData from "../../data/veterinarians.json";

const VetProfile = () => {
  const [vetData, setVetData] = useState(null);

  // Function to find veterinarian by name (exact matching since we validate at login)
  const findVeterinarianByName = (name) => {
    if (!name) return null;
    
    // Normalize the name for comparison
    const normalizedName = name.toLowerCase().trim();
    
    // Exact match since we validate at login
    return veterinariansData.find(v => 
      v.name.toLowerCase() === normalizedName || 
      v.name.toLowerCase() === `dr. ${normalizedName}`
    );
  };

  useEffect(() => {
    // Get user name from localStorage
    const savedUserName = localStorage.getItem('userName');
    
    if (savedUserName) {
      // Find matching veterinarian data
      const matchedVet = findVeterinarianByName(savedUserName);
      
      if (matchedVet) {
        setVetData(matchedVet);
      }
    }
  }, []);

  // Since we're validating at login, we should always have data
  // But we'll keep a simple check for edge cases
  if (!vetData) {
    return (
      <div className="vet-container">
        <div className="no-data-message">
          <h2>Profile Not Found</h2>
          <p>Unable to load veterinarian profile. Please contact support.</p>
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
            <p>{vetData.specialization}</p>
          </div>
          
          <div className="profile-content">
            <div className="vet-image-container">
              <img src={vetData.image} alt={vetData.name} />
            </div>
            
            <div className="vet-info">
              <div className="vet-contact">
                <h4>Contact Information</h4>
                <p>📧 {vetData.email || 'Not provided'}</p>
                <p>📞 {vetData.phone || 'Not provided'}</p>
                <p>📍 {vetData.office || 'Not provided'}</p>
              </div>
              
              <div className="vet-education">
                <h4>Professional Certifications</h4>
                <ul>
                  <li><strong>Years of Experience:</strong> {vetData.experience || 'Not provided'}</li>
                  <li><strong>Certification:</strong> {vetData.certification || 'Not provided'}</li>
                  <li><strong>Licenses:</strong> {vetData.licenses || 'Not provided'}</li>
                  <li><strong>Certificates:</strong> {vetData.certificates || 'Not provided'}</li>
                </ul>
              </div>
              
              <div className="vet-bio">
                <h4>Professional Bio</h4>
                <p>{vetData.bio || `Dr. ${vetData.name.split(' ')[1] || vetData.name} is a dedicated veterinarian with extensive experience in ${vetData.specialization || 'veterinary medicine'}.`}</p>
              </div>
              
              <div className="vet-philosophy">
                <h4>Care Philosophy</h4>
                <p>{vetData.philosophy || 'Committed to providing the highest quality care for all patients through compassionate treatment and evidence-based medicine.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetProfile;