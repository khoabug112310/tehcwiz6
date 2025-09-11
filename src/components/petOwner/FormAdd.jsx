import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/PetCare.css';

const FormAdd = () => {
  const [petProfile, setPetProfile] = useState({
    id: null,
    name: '',
    type: '',
    breed: '',
    age: '',
    weight: '',
    dietaryNeeds: '',
    medicalHistory: '',
  });
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Load existing profile from localStorage if editing
  useEffect(() => {
    // Check if we're editing an existing pet
    if (location.state && location.state.pet) {
      setPetProfile(location.state.pet);
    }
  }, [location.state]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing pets from localStorage
    const existingPets = JSON.parse(localStorage.getItem('petProfiles') || '[]');
    
    // Create a new pet object with timestamp
    const petWithTimestamp = {
      ...petProfile,
      lastUpdated: Date.now(),
      // Generate a unique ID if this is a new pet
      id: petProfile.id || Date.now()
    };
    
    let updatedPets;
    
    if (petProfile.id) {
      // Update existing pet
      updatedPets = existingPets.map(pet => 
        pet.id === petProfile.id ? petWithTimestamp : pet
      );
    } else {
      // Add new pet
      updatedPets = [...existingPets, petWithTimestamp];
    }
    
    // Save to localStorage
    localStorage.setItem('petProfiles', JSON.stringify(updatedPets));
    
    // Redirect back to PetList page after saving
    navigate('/pet-list');
  };
  
  const handleCancel = () => {
    navigate('/pet-list');
  };

  return (
    <div className="pet-care-container">
      <h2>{petProfile.id ? 'Edit Pet Profile' : 'Add Pet Profile'}</h2>
      
      <div className="pet-care-section">
        <form onSubmit={handleSubmit} className="pet-profile-form">
          <div className="form-group">
            <label htmlFor="name">Pet Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={petProfile.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="type">Pet Type:</label>
            <select
              id="type"
              name="type"
              value={petProfile.type}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a pet type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="breed">Breed:</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={petProfile.breed}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="age">Age (years):</label>
            <input
              type="number"
              id="age"
              name="age"
              value={petProfile.age}
              onChange={handleInputChange}
              min="0"
              step="0.1"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={petProfile.weight}
              onChange={handleInputChange}
              min="0"
              step="0.1"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dietaryNeeds">Dietary Needs:</label>
            <textarea
              id="dietaryNeeds"
              name="dietaryNeeds"
              value={petProfile.dietaryNeeds}
              onChange={handleInputChange}
              rows="3"
              placeholder="Special dietary requirements, food allergies, etc."
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History:</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={petProfile.medicalHistory}
              onChange={handleInputChange}
              rows="3"
              placeholder="Vaccinations, surgeries, chronic conditions, medications, etc."
            ></textarea>
          </div>
          
          <div className="form-buttons">
            <button type="submit" className="save-button">Save Profile</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;