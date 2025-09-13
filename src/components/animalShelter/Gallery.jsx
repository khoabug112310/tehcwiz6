import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import petsData from '../../data/pets.json';
import '../../css/Gallery.css';

const Gallery = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPet, setSelectedPet] = useState(null); // Thêm state cho popup

  // Load pets from JSON file
  useEffect(() => {
    setPets(petsData);
    setFilteredPets(petsData);
  }, []);

  // Filter pets based on selected type and search term
  useEffect(() => {
    let filtered = pets;
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(pet => pet.type === selectedType);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(pet => 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPets(filtered);
  }, [selectedType, searchTerm, pets]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Get unique pet types for filter buttons
  const getPetTypes = () => {
    const types = pets.map(pet => pet.type);
    return [...new Set(types)];
  };

  // Get pet type icon
  const getPetTypeIcon = (type) => {
    switch(type) {
      case 'dog': return '🐕';
      case 'cat': return '🐈';
      case 'rabbit': return '🐇';
      default: return '🐾';
    }
  };

  // Handle adoption request
  const handleAdopt = (pet) => {
    Swal.fire({
      title: 'Adopt a Pet',
      html: `
        <p>You are interested in adopting <strong>${pet.name}</strong>.</p>
        <p>Please provide your email address so we can contact you about the adoption process.</p>
        <input type="email" id="email" class="swal2-input" placeholder="Enter your email address">
      `,
      confirmButtonText: 'Submit Request',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      preConfirm: () => {
        const email = Swal.getPopup().querySelector('#email').value;
        if (!email) {
          Swal.showValidationMessage('Please enter your email address');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Please enter a valid email address');
        }
        return { email: email };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Adoption Request Submitted!',
          html: `Thank you for your interest in adopting <strong>${pet.name}</strong>.<br>We will contact you at <strong>${result.value.email}</strong> soon to discuss the adoption process.`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Close the popup modal after the user clicks OK
          setSelectedPet(null);
        });
      }
    });
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className='fs-2 fw-bold'>Pet Adoption Gallery</h2>
        <p>Find your new best friend from our available pets for adoption.</p>
      </div>
      
      <div className="gallery-filter">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search pets by name, breed, or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        
        <div className="filter-buttons">
          <button 
            className={selectedType === 'all' ? 'active' : ''}
            onClick={() => handleTypeChange('all')}
          >
            All Pets
          </button>
          {getPetTypes().map((type, index) => (
            <button 
              key={index}
              className={selectedType === type ? 'active' : ''}
              onClick={() => handleTypeChange(type)}
            >
              {getPetTypeIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}s
            </button>
          ))}
        </div>
      </div>
      
      <div className="gallery-grid">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet, index) => (
            <div key={pet.id} className="gallery-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="gallery-image">
                <img src={pet.image} alt={pet.name} />
                <div className="gallery-overlay">
                  <button className="view-button" onClick={() => setSelectedPet(pet)}>
                    View Details
                  </button>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{pet.name}</h3>
                <p>{pet.description}</p>
                <div className="pet-meta">
                  <span className="pet-age">Age: {pet.age}</span>
                  <span className="pet-breed">Breed: {pet.breed}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-pets">
            <h3>No Pets Found</h3>
            <p>There are no pets matching your selected filters or search term. Please try different filters or search terms.</p>
          </div>
        )}
      </div>
      
      {/* Popup modal hiển thị thông tin thú cưng */}
      {selectedPet && (
        <div className="modal-overlay" onClick={() => setSelectedPet(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPet(null)}>&times;</button>
            <img src={selectedPet.image} alt={selectedPet.name} style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
            <h2>{selectedPet.name}</h2>
            <form action=" ">
              <div className="pet-info-grid">
            <p className="label"><strong>Type:</strong> </p><p className="value">{selectedPet.type}</p>
            <p className="label"><strong>Breed:</strong> </p><p className="value">{selectedPet.breed}</p>
            <p className="label"><strong>Gender: </strong></p><p className="value">{selectedPet.gender }</p>
            <p className="label"><strong>Age:</strong> </p><p className="value">{selectedPet.age}</p>
            <p className="label"><strong>Weight:</strong></p><p className="value">{selectedPet.weight}</p>
            <p className="label"><strong>Description:</strong></p><p className="value"> {selectedPet.description}</p>
            <p className="label"><strong>Health Status:</strong> </p><p className="value">{selectedPet.healthStatus}</p>
            <p className="label"><strong>Distinguishing Marks:</strong></p><p className="value"> {selectedPet.distinguishingMarks}</p>
            <p className="label"><strong>Vaccination History:</strong> </p><p className="value">{selectedPet.vaccinationHistory}</p>
            <p className="label"><strong>Medical History:</strong> </p><p className="value">{selectedPet.medicalHistory}</p>
            <p className="label"  ><strong>Personality Traits:</strong> </p><p className="value">{selectedPet.personalityTraits}</p>
            </div>
            </form>
            <div className="modal-actions" style={{textAlign: 'center', marginTop: '1rem'}}>
              <button className="adopt-button" onClick={() => handleAdopt(selectedPet)} style={{
                background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                fontSize: '1rem'
              }}>
                Adopt {selectedPet.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;