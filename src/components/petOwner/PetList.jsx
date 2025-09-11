import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/PetProfile.css';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load pets from localStorage on component mount
  useEffect(() => {
    const loadPets = () => {
      try {
        // Load pets array from localStorage
        const savedPets = localStorage.getItem('petProfiles');
        if (savedPets) {
          setPets(JSON.parse(savedPets));
        } else {
          setPets([]);
        }
      } catch (error) {
        console.error('Error loading pets:', error);
        setPets([]);
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  const handleAddPet = () => {
    // Navigate to the new form add page with no pet data (creating new)
    navigate('/form-add');
  };

  const handleViewPet = (pet) => {
    // Navigate to the pet profile page
    navigate('/pet-profile');
  };

  const handleEditPet = (pet) => {
    // Navigate to the form add page with pet data (editing)
    navigate('/form-add', { state: { pet } });
  };

  const handleDeletePet = (petId) => {
    // Get existing pets from localStorage
    const existingPets = JSON.parse(localStorage.getItem('petProfiles') || '[]');
    
    // Filter out the pet to delete
    const updatedPets = existingPets.filter(pet => pet.id !== petId);
    
    // Save updated pets array to localStorage
    localStorage.setItem('petProfiles', JSON.stringify(updatedPets));
    
    // Update state
    setPets(updatedPets);
  };

  const getPetTypeIcon = (type) => {
    switch (type) {
      case 'Dog':
        return '🐕';
      case 'Cat':
        return '🐈';
      case 'Bird':
        return '🐦';
      case 'Rabbit':
        return '🐇';
      default:
        return '🐾';
    }
  };

  if (loading) {
    return (
      <div className="pet-profile-container">
        <h2>Loading Pets...</h2>
      </div>
    );
  }

  return (
    <div className="pet-profile-container">
      <div className="profile-header">
        <h2>My Pets</h2>
        <p>Manage your pet profiles and care information</p>
      </div>

      {pets.length === 0 ? (
        <div className="no-pets-container">
          <div className="no-pets-content">
            <h3>No Pets Found</h3>
            <p>You haven't added any pets to your profile yet.</p>
            <button className="add-pet-button" onClick={handleAddPet}>
              + Add Your First Pet
            </button>
          </div>
        </div>
      ) : (
        <div className="pets-list-container">
          <div className="pets-header">
            <h3>Your Pets</h3>
            <button className="add-pet-button" onClick={handleAddPet}>
              + Add Another Pet
            </button>
          </div>
          
          <div className="pets-grid">
            {pets.map((pet, index) => (
              <div key={pet.id || index} className="pet-card">
                <div className="pet-card-header">
                  <span className="pet-icon">{getPetTypeIcon(pet.type)}</span>
                  <h4>{pet.name}</h4>
                </div>
                <div className="pet-card-details">
                  <div className="pet-detail">
                    <span className="detail-label">Type:</span>
                    <span>{pet.type}</span>
                  </div>
                  <div className="pet-detail">
                    <span className="detail-label">Breed:</span>
                    <span>{pet.breed || 'Not specified'}</span>
                  </div>
                  <div className="pet-detail">
                    <span className="detail-label">Age:</span>
                    <span>{pet.age ? `${pet.age} years` : 'Not specified'}</span>
                  </div>
                  <div className="pet-detail">
                    <span className="detail-label">Weight:</span>
                    <span>{pet.weight ? `${pet.weight} kg` : 'Not specified'}</span>
                  </div>
                </div>
                <div className="pet-card-actions">
                  <button className="view-button" onClick={() => handleViewPet(pet)}>
                    View Profile
                  </button>
                  <button className="edit-button" onClick={() => handleEditPet(pet)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeletePet(pet.id)}>
                    Delete
                  </button>
                </div>
                <div className="pet-card-footer">
                  <span>Last updated: {pet.lastUpdated ? new Date(pet.lastUpdated).toLocaleDateString() : 'Never'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PetList;