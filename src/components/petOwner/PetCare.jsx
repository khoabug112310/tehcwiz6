import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/PetCare.css';

const PetCare = () => {
  const [savedProfile, setSavedProfile] = useState(null);
  const navigate = useNavigate();
  
  // Load saved profile from localStorage on component mount
  useEffect(() => {
    // For backward compatibility, check for single pet profile
    const singlePet = localStorage.getItem('petProfile');
    if (singlePet) {
      setSavedProfile(JSON.parse(singlePet));
      return;
    }
    
    // Check for multi-pet profiles
    const pets = JSON.parse(localStorage.getItem('petProfiles') || '[]');
    if (pets.length > 0) {
      // Use the first pet as the default
      setSavedProfile(pets[0]);
    }
  }, []);
  
  const handleAddPet = () => {
    navigate('/form-add');
  };
  
  const handleViewProfile = () => {
    navigate('/pet-profile');
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
        <h3>Your Pet Profile</h3>
        {savedProfile ? (
          <div className="saved-profile">
            <div className="profile-header">
              <h4>{savedProfile.name}'s Profile</h4>
            </div>
            <div className="profile-details">
              <p><strong>Type:</strong> {savedProfile.type}</p>
              <p><strong>Breed:</strong> {savedProfile.breed || 'Not specified'}</p>
              <p><strong>Age:</strong> {savedProfile.age ? `${savedProfile.age} years` : 'Not specified'}</p>
              <p><strong>Weight:</strong> {savedProfile.weight ? `${savedProfile.weight} kg` : 'Not specified'}</p>
              <p><strong>Dietary Needs:</strong> {savedProfile.dietaryNeeds || 'None specified'}</p>
              <p><strong>Medical History:</strong> {savedProfile.medicalHistory || 'No medical history recorded'}</p>
            </div>
            <div className="profile-actions">
              <button onClick={handleViewProfile} className="view-profile-button">
                View Full Profile
              </button>
              <button onClick={handleAddPet} className="edit-button">
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          <div className="no-profile">
            <p>You haven't added a pet profile yet.</p>
            <button onClick={handleAddPet} className="add-pet-button">
              Add Pet Profile
            </button>
          </div>
        )}
      </div>
      
      <div className="pet-care-section">
        <h3>Feeding Guide</h3>
        {savedProfile ? (
          <div className="feeding-guide-content">
            <div className="feeding-top-section">
              <div className="nutritional-requirements">
                <h4>Nutritional Requirements for {savedProfile.type}s</h4>
                <div className="nutritional-info">
                  <p>{feedingGuide.content}</p>
                  <div className="nutrition-highlights">
                    <div className="nutrition-item">
                      <span className="nutrition-label">Protein:</span>
                      <span className="nutrition-value">25-30%</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutrition-label">Fat:</span>
                      <span className="nutrition-value">15-20%</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutrition-label">Carbs:</span>
                      <span className="nutrition-value">50-55%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="feeding-recommendations">
                <h4>Feeding Recommendations</h4>
                <div className="feeding-tips">
                  <ul>
                    <li>Always provide fresh, clean water</li>
                    <li>Feed at consistent times to establish a routine</li>
                    <li>Monitor your pet's weight and adjust portions accordingly</li>
                    <li>Avoid feeding table scraps or human foods that may be harmful</li>
                    <li>Consult your veterinarian about special dietary needs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="feeding-video-section">
              <div className="feeding-video">
                <h5>Feeding Demonstration:</h5>
                <video 
                  controls 
                  width="100%" 
                  style={{ maxWidth: '100%', borderRadius: '12px' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./assets/Videos/feed_cat.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-description">
                  Learn proper feeding techniques and portion control for your {savedProfile.type}.
                </p>
              </div>
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
            <div className="grooming-video">
              <h5>Grooming Tutorial:</h5>
              <video 
                controls 
                width="100%" 
                style={{ maxWidth: '500px', borderRadius: '8px' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./assets/Videos/Brushing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-description">
                Learn proper brushing techniques to keep your {savedProfile.type} healthy and comfortable.
              </p>
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
              <div className="health-video">
                <h6>Health Care Demonstration:</h6>
                <video 
                  controls 
                  width="100%" 
                  style={{ maxWidth: '500px', borderRadius: '8px' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./assets/Videos/health-tips.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-description">
                  Essential health care and wellness tips for your {savedProfile.type}.
                </p>
              </div>
              <div className="audio-placeholder">
                <button className="audio-button">🔊 Listen to health care tips</button>
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
              <div className="training-video">
                <h6>Training Demonstration:</h6>
                <video 
                  controls 
                  width="100%" 
                  style={{ maxWidth: '500px', borderRadius: '8px' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="./assets/Videos/trainning_dog.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-description">
                  Interactive training techniques and exercises for your {savedProfile.type}.
                </p>
              </div>
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