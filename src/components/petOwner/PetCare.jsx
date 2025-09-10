import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/PetCare.css';

const PetCare = () => {
  const [petProfile, setPetProfile] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    weight: '',
    dietaryNeeds: '',
    medicalHistory: '',
    lastUpdated: null
  });
  
  const [savedProfile, setSavedProfile] = useState(null);
  const navigate = useNavigate();
  
  // Load saved profile from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('petProfile');
    if (saved) {
      setSavedProfile(JSON.parse(saved));
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const profileWithTimestamp = {
      ...petProfile,
      lastUpdated: Date.now()
    };
    localStorage.setItem('petProfile', JSON.stringify(profileWithTimestamp));
    setSavedProfile(profileWithTimestamp);
    // Redirect to PetProfile page
    navigate('/pet-profile');
  };
  
  const handleReset = () => {
    setPetProfile({
      name: '',
      type: '',
      breed: '',
      age: '',
      weight: '',
      dietaryNeeds: '',
      medicalHistory: '',
      lastUpdated: null
    });
    setSavedProfile(null);
    localStorage.removeItem('petProfile');
  };

  // Function to get feeding guide based on pet type
  const getFeedingGuide = (petType) => {
    const guides = {
      Dog: {
        title: "Complete Dog Feeding Guide",
        content: "Dogs require a balanced diet with appropriate protein, fat, and carbohydrates. Puppies need more frequent meals (3-4 times daily) with higher protein content, while adults do well with 2 meals per day. Senior dogs may benefit from joint-support formulas."
      },
      Cat: {
        title: "Complete Cat Feeding Guide",
        content: "Cats are obligate carnivores requiring high protein diets. Kittens need frequent small meals, while adults thrive on scheduled feeding. Wet food helps with hydration, and treats should be limited to 10% of daily calories."
      },
      Bird: {
        title: "Complete Bird Feeding Guide",
        content: "Birds need species-specific diets with pellets as the base, supplemented with fresh fruits and vegetables. Seeds should be limited, and fresh water must always be available. Avoid avocado, chocolate, and caffeine."
      },
      Rabbit: {
        title: "Complete Rabbit Feeding Guide",
        content: "Rabbits require unlimited grass hay, measured pellets, and fresh leafy greens. Treats should be rare, and fresh water must always be available. Gradually introduce new foods to prevent digestive upset."
      }
    };
    
    return guides[petType] || {
      title: "General Pet Feeding Guide",
      content: "Please consult with your veterinarian for species-specific dietary recommendations. All pets need access to fresh water and a balanced diet appropriate for their age, size, and health status."
    };
  };

  // Function to get grooming tips based on pet type
  const getGroomingTips = (petType) => {
    const tips = {
      Dog: [
        "Brush your dog's coat 2-3 times per week to prevent matting",
        "Bathe every 1-2 months using pet-safe shampoo",
        "Trim nails every 2-3 weeks to prevent overgrowth",
        "Clean ears weekly with a vet-recommended solution",
        "Brush teeth daily for optimal oral health"
      ],
      Cat: [
        "Brush long-haired cats daily to prevent hairballs",
        "Most cats self-groom, but occasional baths may be needed",
        "Trim nails every 2-3 weeks",
        "Clean ears monthly or as recommended by your vet",
        "Brush teeth daily to prevent dental disease"
      ],
      Bird: [
        "Provide bathing opportunities 2-3 times per week",
        "Trim wings and nails as needed (every 4-6 weeks)",
        "Clean cage daily and sanitize weekly",
        "Offer natural perches for foot health",
        "Provide cuttlebone or mineral blocks for beak health"
      ],
      Rabbit: [
        "Brush daily during shedding season",
        "Spot-clean soiled areas daily",
        "Trim nails every 4-6 weeks",
        "Check and clean ears weekly",
        "Provide dust bath for Rex breeds"
      ]
    };
    
    return tips[petType] || [
      "Follow species-specific grooming guidelines",
      "Regular grooming prevents matting and skin issues",
      "Make grooming a positive experience with treats and praise",
      "Check for parasites, lumps, or skin issues during grooming",
      "Consult your veterinarian for professional grooming recommendations"
    ];
  };

  // Function to get health tips based on pet type
  const getHealthTips = (petType) => {
    const tips = {
      Dog: [
        "Regular exercise: 30-60 minutes of walks or play daily",
        "Dental care: Brush teeth daily or use dental chews",
        "Weight management: Monitor body condition and adjust diet",
        "Parasite prevention: Monthly flea, tick, and heartworm prevention",
        "Mental stimulation: Interactive toys and training sessions"
      ],
      Cat: [
        "Provide vertical spaces for climbing and scratching posts",
        "Litter box hygiene: Scoop daily and change litter weekly",
        "Scratching posts to prevent destructive scratching",
        "Regular play sessions for exercise and bonding",
        "Stress reduction: Consistent routine and safe hiding spots"
      ],
      Bird: [
        "12 hours of sleep in a quiet, dark environment",
        "UV light exposure for vitamin D synthesis",
        "Fresh air (non-toxic) and proper ventilation",
        "Social interaction daily for mental health",
        "Mental enrichment with toys and activities"
      ],
      Rabbit: [
        "Unlimited grass hay for digestive health",
        "Spacious living area for exercise and exploration",
        "Litter training possible with proper setup",
        "Temperature control: 60-70°F is ideal",
        "Regular veterinary checkups with an exotic vet"
      ]
    };
    
    return tips[petType] || [
      "Regular veterinary checkups are essential for preventive care",
      "Monitor appetite, energy levels, and behavior changes",
      "Maintain proper hygiene and cleanliness in living areas",
      "Provide appropriate exercise and mental stimulation",
      "Keep up with vaccinations and preventive treatments"
    ];
  };

  // Function to get training tips based on pet type
  const getTrainingTips = (petType) => {
    const tips = {
      Dog: [
        "Start with basic commands: sit, stay, come, down",
        "Use positive reinforcement with treats and praise",
        "Keep training sessions short (5-10 minutes) and consistent",
        "Be patient and consistent with commands and rewards",
        "Socialize early with people, animals, and environments"
      ],
      Cat: [
        "Use clicker training for desired behaviors",
        "Reward with treats, not punishment",
        "Train one behavior at a time",
        "Keep sessions brief and positive",
        "Use environmental enrichment to prevent problems"
      ],
      Bird: [
        "Target training for stepping up onto your hand",
        "Use positive reinforcement with treats",
        "Teach one behavior at a time",
        "Practice regularly but keep sessions short",
        "Build trust before beginning training"
      ],
      Rabbit: [
        "Litter training with consistent placement",
        "Target training for coming when called",
        "Use treats to reward desired behaviors",
        "Be patient as rabbits learn differently than dogs",
        "Create a safe environment for exploration"
      ]
    };
    
    return tips[petType] || [
      "Use positive reinforcement techniques",
      "Be patient and consistent in training",
      "Keep sessions short and engaging",
      "Reward desired behaviors immediately",
      "Avoid punishment which can damage trust"
    ];
  };

  const feedingGuide = savedProfile ? getFeedingGuide(savedProfile.type) : null;
  const groomingTips = savedProfile ? getGroomingTips(savedProfile.type) : [];
  const healthTips = savedProfile ? getHealthTips(savedProfile.type) : [];
  const trainingTips = savedProfile ? getTrainingTips(savedProfile.type) : [];

  return (
    <div className="pet-care-container">
      <h2>Pet Care Guide</h2>
      
      <div className="pet-care-section">
        <h3>Pet Profile</h3>
        {savedProfile ? (
          <div className="saved-profile">
            <div className="profile-header">
              <h4>{savedProfile.name}'s Profile</h4>
              <button onClick={handleReset} className="edit-button">Edit Profile</button>
            </div>
            <div className="profile-details">
              <p><strong>Type:</strong> {savedProfile.type}</p>
              <p><strong>Breed:</strong> {savedProfile.breed || 'Not specified'}</p>
              <p><strong>Age:</strong> {savedProfile.age ? `${savedProfile.age} years` : 'Not specified'}</p>
              <p><strong>Weight:</strong> {savedProfile.weight ? `${savedProfile.weight} kg` : 'Not specified'}</p>
              <p><strong>Dietary Needs:</strong> {savedProfile.dietaryNeeds || 'None specified'}</p>
              <p><strong>Medical History:</strong> {savedProfile.medicalHistory || 'No medical history recorded'}</p>
            </div>
            <button onClick={() => navigate('/pet-profile')} className="view-profile-button">
              View Full Profile
            </button>
          </div>
        ) : (
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
            
            <button type="submit" className="save-button">Save Profile</button>
          </form>
        )}
      </div>
      
      <div className="pet-care-section">
        <h3>Feeding Guide</h3>
        {savedProfile ? (
          <div className="feeding-guide-content">
            <h4>{feedingGuide.title}</h4>
            <p>{feedingGuide.content}</p>
            <div className="feeding-tips">
              <h5>Feeding Tips:</h5>
              <ul>
                <li>Always provide fresh, clean water</li>
                <li>Feed at consistent times to establish a routine</li>
                <li>Monitor your pet's weight and adjust portions accordingly</li>
                <li>Avoid feeding table scraps or human foods that may be harmful</li>
                <li>Consult your veterinarian about special dietary needs</li>
              </ul>
            </div>
          </div>
        ) : (
          <p>Create a pet profile to see species-specific feeding recommendations.</p>
        )}
      </div>
      
      <div className="pet-care-section">
        <h3>Grooming Guide</h3>
        {savedProfile ? (
          <div className="grooming-guide-content">
            <p>Proper grooming keeps your {savedProfile.type} healthy and comfortable:</p>
            <ul>
              {groomingTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="grooming-video-placeholder">
              <p>Embedded videos demonstrating proper grooming techniques would appear here.</p>
              <div className="video-placeholder-icon">▶</div>
            </div>
          </div>
        ) : (
          <p>Create a pet profile to see species-specific grooming recommendations.</p>
        )}
      </div>
      
      <div className="pet-care-section">
        <h3>Health Tips</h3>
        {savedProfile ? (
          <div className="health-tips-content">
            <p>Keep your {savedProfile.type} healthy with these essential care tips:</p>
            <ul>
              {healthTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="health-resources">
              <h5>Additional Resources:</h5>
              <div className="audio-placeholder">
                <button className="audio-button">🔊 Listen to health care tips</button>
              </div>
              <div className="video-placeholder">
                <p>Video on recognizing signs of illness</p>
                <div className="play-button">▶</div>
              </div>
            </div>
          </div>
        ) : (
          <p>Create a pet profile to see species-specific health recommendations.</p>
        )}
      </div>
      
      <div className="pet-care-section">
        <h3>Training Tips</h3>
        {savedProfile ? (
          <div className="training-tips-content">
            <p>Effective training for your {savedProfile.type} requires patience and consistency:</p>
            <ul>
              {trainingTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="training-resources">
              <h5>Training Resources:</h5>
              <div className="audio-placeholder">
                <button className="audio-button">🔊 Listen to training instructions</button>
              </div>
              <div className="text-tip">
                <p>Remember: Training is an ongoing process that strengthens the bond between you and your {savedProfile.type}.</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Create a pet profile to see species-specific training recommendations.</p>
        )}
      </div>
    </div>
  );
};

export default PetCare;