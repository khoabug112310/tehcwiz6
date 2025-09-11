import React, { useState, useEffect } from 'react';
import petsData from '../data/pets.json';
import '../css/Gallery.css';

const Gallery = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Pet Adoption Gallery</h2>
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
                  <button className="view-button">View Details</button>
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
    </div>
  );
};

export default Gallery;