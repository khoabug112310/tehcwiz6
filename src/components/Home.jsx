import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = ({ userName, userType }) => {
  const [petProfile, setPetProfile] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    weight: '',
    dietaryNeeds: '',
    medicalHistory: ''
  });
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  // Load saved profile from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('petProfile');
    if (saved) {
      setPetProfile(JSON.parse(saved));
      setShowPreview(true);
    }
  }, []);

  const getUserTypeText = () => {
    switch (userType) {
      case 'pet-owner':
        return 'Pet Owner';
      case 'veterinarian':
        return 'Veterinarian';
      case 'animal-shelter':
        return 'Animal Shelter';
      default:
        return 'User';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const profileToSave = {
      ...petProfile,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('petProfile', JSON.stringify(profileToSave));
    setShowPreview(true);
    
    // Navigate to PetProfile page after saving
    navigate('/pet-profile');
  };

  const getPetTypeIcon = (type) => {
    switch (type) {
      case 'Dog': return '🐕';
      case 'Cat': return '🐈';
      case 'Bird': return '🐦';
      case 'Rabbit': return '🐇';
      default: return '🐾';
    }
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h2>Welcome {userName}!</h2>
        <p>You are logged in as a {getUserTypeText()}.</p>
      </div>

      <div className="intro-section">
        <h3>About FurEver Care</h3>
        <p className="intro-text">
          FurEver Care is your comprehensive pet care companion, designed to help you provide the best possible care for your beloved animals. 
          Whether you're a pet owner, veterinarian, or animal shelter worker, our platform offers tailored solutions to meet your specific needs.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h4>Appointment Scheduling</h4>
            <p>Easily schedule and manage veterinary appointments for your pets.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h4>Care Resources</h4>
            <p>Access comprehensive guides on pet nutrition, grooming, and health.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏥</div>
            <h4>Health Tracking</h4>
            <p>Keep detailed records of vaccinations, medications, and medical history.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h4>Product Showcase</h4>
            <p>Discover premium pet products recommended by veterinarians.</p>
          </div>
        </div>
      </div>

      {userType === 'pet-owner' && (
        <div className="pet-profile-section">
          <h3>Create Your Pet's Profile</h3>
          <p>Fill out the form below to create a profile for your pet. This information will help us provide personalized care recommendations.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Pet's Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={petProfile.name}
                onChange={handleInputChange}
                placeholder="Enter your pet's name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="type">Species *</label>
              <select
                id="type"
                name="type"
                value={petProfile.type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={petProfile.breed}
                onChange={handleInputChange}
                placeholder="Enter your pet's breed"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="age">Age (years)</label>
              <input
                type="number"
                id="age"
                name="age"
                value={petProfile.age}
                onChange={handleInputChange}
                placeholder="Enter your pet's age"
                min="0"
                step="0.1"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={petProfile.weight}
                onChange={handleInputChange}
                placeholder="Enter your pet's weight"
                min="0"
                step="0.1"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="dietaryNeeds">Dietary Needs</label>
              <textarea
                id="dietaryNeeds"
                name="dietaryNeeds"
                value={petProfile.dietaryNeeds}
                onChange={handleInputChange}
                placeholder="Any special dietary requirements or restrictions?"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History</label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                value={petProfile.medicalHistory}
                onChange={handleInputChange}
                placeholder="Any medical conditions, allergies, or previous treatments?"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Save Pet Profile
            </button>
          </form>
          
          {showPreview && (
            <div className="profile-preview">
              <h4>{petProfile.name}'s Profile Preview</h4>
              <div className="profile-details">
                <div className="profile-detail">
                  <strong>Species</strong>
                  <span>{getPetTypeIcon(petProfile.type)} {petProfile.type}</span>
                </div>
                <div className="profile-detail">
                  <strong>Breed</strong>
                  <span>{petProfile.breed || 'Not specified'}</span>
                </div>
                <div className="profile-detail">
                  <strong>Age</strong>
                  <span>{petProfile.age ? `${petProfile.age} years` : 'Not specified'}</span>
                </div>
                <div className="profile-detail">
                  <strong>Weight</strong>
                  <span>{petProfile.weight ? `${petProfile.weight} kg` : 'Not specified'}</span>
                </div>
                <div className="profile-detail">
                  <strong>Dietary Needs</strong>
                  <span>{petProfile.dietaryNeeds || 'None specified'}</span>
                </div>
                <div className="profile-detail">
                  <strong>Medical History</strong>
                  <span>{petProfile.medicalHistory || 'No medical history recorded'}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="intro-section">
        <h3>Getting Started</h3>
        <p className="intro-text">
          Navigate through our menu to access different sections of the application. As a {getUserTypeText()}, you have access to 
          specialized features designed for your role. If you need help, visit our Contact page or check out our FAQ section.
        </p>
        <p className="intro-text">
          Select an option from the menu to get started with your pet care journey.
        </p>
      </div>
    </div>
  );
};

export default Home;