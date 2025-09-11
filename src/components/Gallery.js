import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  // Load pets from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockPets = [
      {
        id: 1,
        name: "Buddy",
        age: "2 years",
        breed: "Golden Retriever",
        description: "Friendly and energetic dog who loves to play fetch",
        type: "dog",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 2,
        name: "Whiskers",
        age: "1 year",
        breed: "Domestic Shorthair",
        description: "Playful kitten who enjoys cuddles and chasing toys",
        type: "cat",
        image: "https://images.unsplash.com/photo-1589924671690-7c1d4ce9718d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 3,
        name: "Oreo",
        age: "3 years",
        breed: "Mixed Breed",
        description: "Calm and gentle dog who is great with children",
        type: "dog",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 4,
        name: "Luna",
        age: "6 months",
        breed: "Rabbit",
        description: "Sweet bunny who loves fresh vegetables and hopping around",
        type: "rabbit",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      }
    ];
    
    setPets(mockPets);
    setFilteredPets(mockPets);
  }, []);

  // Filter pets based on selected type
  useEffect(() => {
    if (selectedType === 'all') {
      setFilteredPets(pets);
    } else {
      const filtered = pets.filter(pet => pet.type === selectedType);
      setFilteredPets(filtered);
    }
  }, [selectedType, pets]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h2>Pet Adoption Gallery</h2>
      <p>Find your new best friend from our available pets for adoption.</p>
      
      <div className="filter-buttons">
        <button 
          className={selectedType === 'all' ? 'active' : ''}
          onClick={() => handleTypeChange('all')}
        >
          All Pets
        </button>
        <button 
          className={selectedType === 'dog' ? 'active' : ''}
          onClick={() => handleTypeChange('dog')}
        >
          Dogs
        </button>
        <button 
          className={selectedType === 'cat' ? 'active' : ''}
          onClick={() => handleTypeChange('cat')}
        >
          Cats
        </button>
        <button 
          className={selectedType === 'rabbit' ? 'active' : ''}
          onClick={() => handleTypeChange('rabbit')}
        >
          Rabbits
        </button>
      </div>
      
      <div className="pet-gallery">
        {filteredPets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;