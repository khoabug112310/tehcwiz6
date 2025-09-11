import React, { useState, useEffect } from 'react';

const VetProfile = () => {
  const [vets, setVets] = useState([]);

  // Load veterinarian profiles from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockVets = [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialization: "Small Animal Medicine",
        contact: "sarah.johnson@vethospital.com | (555) 123-4567",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea811ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialization: "Veterinary Surgery",
        contact: "michael.chen@vethospital.com | (555) 234-5678",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      }
    ];
    
    setVets(mockVets);
  }, []);

  return (
    <div>
      <h2>Veterinarian Profiles</h2>
      
      <div className="vet-profiles">
        {vets.map(vet => (
          <div key={vet.id} className="vet-profile-card">
            <img src={vet.image} alt={vet.name} />
            <h3>{vet.name}</h3>
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Contact:</strong> {vet.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetProfile;