import React, { useState, useEffect } from 'react';
import '../../css/PetProfile.css';

const PetProfile = () => {
  const [petProfile, setPetProfile] = useState(null);
  const [location, setLocation] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpdated, setLastUpdated] = useState(null);

  // Load saved profile from localStorage on component mount
  useEffect(() => {
    // For backward compatibility, check for single pet profile
    const singlePet = localStorage.getItem('petProfile');
    if (singlePet) {
      const petData = JSON.parse(singlePet);
      setPetProfile(petData);
      setLastUpdated(new Date(petData.lastUpdated || Date.now()));
      return;
    }
    
    // Check for multi-pet profiles
    const pets = JSON.parse(localStorage.getItem('petProfiles') || '[]');
    if (pets.length > 0) {
      // Use the first pet as the default
      setPetProfile(pets[0]);
      setLastUpdated(new Date(pets[0].lastUpdated || Date.now()));
    }
  }, []);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!petProfile) {
    return (
      <div className="pet-profile-container">
        <h2>No Pet Profile Found</h2>
        <p>Please create a pet profile first.</p>
      </div>
    );
  }

  // Function to get vaccination schedule based on pet type
  const getVaccinationSchedule = (petType) => {
    const schedules = {
      Dog: [
        { vaccine: "DHPP", description: "Distemper, Hepatitis, Parainfluenza, Parvovirus", frequency: "Puppy series, then every 3 years" },
        { vaccine: "Rabies", description: "Legal requirement in most areas", frequency: "Every 1-3 years" },
        { vaccine: "Bordetella", description: "Kennel Cough", frequency: "Annually or every 6 months" },
        { vaccine: "Leptospirosis", description: "Bacterial infection", frequency: "Annually" }
      ],
      Cat: [
        { vaccine: "FVRCP", description: "Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia", frequency: "Kitten series, then every 3 years" },
        { vaccine: "Rabies", description: "Legal requirement in most areas", frequency: "Every 1-3 years" },
        { vaccine: "FeLV", description: "Feline Leukemia (for outdoor cats)", frequency: "Annually" }
      ],
      Bird: [
        { vaccine: "Polyomavirus", description: "Virus affecting young birds", frequency: "As recommended by avian vet" },
        { vaccine: "Poxvirus", description: "For certain species", frequency: "As recommended by avian vet" }
      ],
      Rabbit: [
        { vaccine: "RHDV", description: "Rabbit Hemorrhagic Disease (in endemic areas)", frequency: "Annually" },
        { vaccine: "Myxomatosis", description: "Viral disease (in endemic areas)", frequency: "Seasonally" }
      ]
    };
    
    return schedules[petType] || [
      { vaccine: "Core vaccines", description: "As recommended by your veterinarian", frequency: "According to schedule" }
    ];
  };

  // Function to get feeding recommendations based on pet type
  const getFeedingRecommendations = (petType) => {
    const recommendations = {
      Dog: [
        "Puppies: 22-32% protein, 8-18% fat",
        "Adults: 18-26% protein, 8-16% fat",
        "Seniors: 16-24% protein, 6-14% fat",
        "Feed 2-3% of body weight daily",
        "Divide meals into 2-3 portions"
      ],
      Cat: [
        "Kittens: 30-40% protein, 20-30% fat",
        "Adults: 26-40% protein, 9-20% fat",
        "Seniors: 28-35% protein, 10-18% fat",
        "Feed 2-4% of body weight daily",
        "Always provide fresh water"
      ],
      Bird: [
        "Pellets should make up 75% of diet",
        "Fresh fruits and vegetables: 20%",
        "Seeds and treats: 5%",
        "Avoid avocado, chocolate, caffeine",
        "Provide cuttlebone for calcium"
      ],
      Rabbit: [
        "Unlimited timothy hay",
        "1/4 cup pellets per 5 lbs body weight",
        "2 cups leafy greens per 5 lbs daily",
        "Limited fruits as treats",
        "Fresh water always available"
      ]
    };
    
    return recommendations[petType] || [
      "Follow your veterinarian's recommendations",
      "Provide species-appropriate nutrition",
      "Monitor weight and adjust portions",
      "Always provide fresh water"
    ];
  };

  // Function to get grooming tips based on pet type
  const getGroomingTips = (petType) => {
    const tips = {
      Dog: [
        "Brush 2-3 times per week (daily for long-haired breeds)",
        "Bathe every 1-2 months or as needed",
        "Trim nails every 2-3 weeks",
        "Clean ears weekly",
        "Brush teeth daily"
      ],
      Cat: [
        "Brush 1-2 times per week (daily for long-haired breeds)",
        "Most cats self-bathe, but occasional baths may be needed",
        "Trim nails every 2-3 weeks",
        "Clean ears monthly",
        "Brush teeth daily"
      ],
      Bird: [
        "Provide bathing opportunities 2-3 times per week",
        "Trim wings and nails as needed (every 4-6 weeks)",
        "Clean cage daily",
        "Provide perches of varying diameters",
        "Offer natural branches for beak health"
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
      "Make grooming a positive experience",
      "Check for parasites, lumps, or skin issues",
      "Consult your veterinarian for professional grooming"
    ];
  };

  // Function to get health tips based on pet type
  const getHealthTips = (petType) => {
    const tips = {
      Dog: [
        "Regular exercise: 30-60 minutes daily",
        "Dental care: Brush teeth daily",
        "Weight management: Monitor body condition",
        "Parasite prevention: Flea, tick, and heartworm prevention",
        "Mental stimulation: Interactive toys and training"
      ],
      Cat: [
        "Provide vertical spaces for climbing",
        "Litter box hygiene: Scoop daily",
        "Scratching posts to prevent furniture damage",
        "Regular play sessions for exercise",
        "Stress reduction: Consistent routine and safe spaces"
      ],
      Bird: [
        "12 hours of sleep in quiet, dark environment",
        "UV light exposure for vitamin D synthesis",
        "Fresh air (non-toxic) and proper ventilation",
        "Social interaction daily",
        "Mental enrichment with toys and activities"
      ],
      Rabbit: [
        "Unlimited grass hay for digestive health",
        "Spacious living area for exercise",
        "Litter training possible with proper setup",
        "Temperature control: 60-70°F ideal",
        "Regular veterinary checkups with exotic vet"
      ]
    };
    
    return tips[petType] || [
      "Regular veterinary checkups are essential",
      "Monitor appetite, energy, and behavior changes",
      "Maintain proper hygiene and cleanliness",
      "Provide appropriate exercise and mental stimulation",
      "Keep up with preventive care"
    ];
  };

  // Function to get training tips based on pet type
  const getTrainingTips = (petType) => {
    const tips = {
      Dog: [
        "Start with basic commands: sit, stay, come, down",
        "Use positive reinforcement with treats and praise",
        "Keep training sessions short (5-10 minutes)",
        "Be consistent with commands and rewards",
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
        "Target training for stepping up",
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

  const vaccinationSchedule = getVaccinationSchedule(petProfile.type);
  const feedingRecommendations = getFeedingRecommendations(petProfile.type);
  const groomingTips = getGroomingTips(petProfile.type);
  const healthTips = getHealthTips(petProfile.type);
  const trainingTips = getTrainingTips(petProfile.type);

  return (
    <div className="pet-profile-container">
      <div className="profile-header">
        <h2>{petProfile.name}'s Care Profile</h2>
        <div className="profile-meta">
          <div className="location-info">
            <span className="meta-label">Location:</span>
            {location ? (
              <span>{location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}</span>
            ) : (
              <span>Location unavailable</span>
            )}
          </div>
          <div className="time-info">
            <span className="meta-label">Current Time:</span>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
          <div className="update-info">
            <span className="meta-label">Last Updated:</span>
            <span>{lastUpdated ? lastUpdated.toLocaleString() : 'Never'}</span>
          </div>
        </div>
      </div>

      {/* Pet Profile Section */}
      <div className="pet-care-section">
        <h3>Pet Profile</h3>
        <div className="profile-details-grid">
          <div className="profile-detail-card">
            <h4>Species</h4>
            <p>{petProfile.type}</p>
          </div>
          <div className="profile-detail-card">
            <h4>Breed</h4>
            <p>{petProfile.breed || 'Not specified'}</p>
          </div>
          <div className="profile-detail-card">
            <h4>Age</h4>
            <p>{petProfile.age ? `${petProfile.age} years` : 'Not specified'}</p>
          </div>
          <div className="profile-detail-card">
            <h4>Weight</h4>
            <p>{petProfile.weight ? `${petProfile.weight} kg` : 'Not specified'}</p>
          </div>
          <div className="profile-detail-card full-width">
            <h4>Dietary Needs</h4>
            <p>{petProfile.dietaryNeeds || 'No specific dietary needs'}</p>
          </div>
          <div className="profile-detail-card full-width">
            <h4>Medical History</h4>
            <p>{petProfile.medicalHistory || 'No medical history recorded'}</p>
          </div>
        </div>
        
        {/* Vaccination Schedule */}
        <div className="vaccination-section">
          <h4>Vaccination Schedule</h4>
          <div className="vaccination-table">
            <div className="table-header">
              <div>Vaccine</div>
              <div>Description</div>
              <div>Frequency</div>
            </div>
            {vaccinationSchedule.map((vaccine, index) => (
              <div className="table-row" key={index}>
                <div>{vaccine.vaccine}</div>
                <div>{vaccine.description}</div>
                <div>{vaccine.frequency}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feeding Guide Section */}
      <div className="pet-care-section">
        <h3>Feeding Guide</h3>
        <div className="feeding-guide-content">
          <div className="feeding-chart">
            <h4>Nutritional Requirements for {petProfile.type}s</h4>
            <div className="chart-placeholder">
              <p>Nutritional chart for {petProfile.type} would be displayed here</p>
              <div className="chart-visualization">
                <div className="chart-bar protein">Protein: 25%</div>
                <div className="chart-bar fat">Fat: 15%</div>
                <div className="chart-bar carbs">Carbs: 60%</div>
              </div>
            </div>
          </div>
          
          <div className="feeding-recommendations">
            <h4>Feeding Recommendations</h4>
            <ul>
              {feedingRecommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
          
          <div className="feeding-video">
            <h5>Feeding Demonstration:</h5>
            <video 
              controls 
              width="100%" 
              style={{ maxWidth: '500px', borderRadius: '8px' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./assets/Videos/feed_cat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-description">
              Learn proper feeding techniques and portion control for your {petProfile.type}.
            </p>
          </div>
        </div>
      </div>

      {/* Grooming Videos Section */}
      <div className="pet-care-section">
        <h3>Grooming Guide</h3>
        <div className="grooming-content">
          <div className="video-card">
            <h4>Brushing Techniques</h4>
            <div className="grooming-video">
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
                Learn proper brushing techniques to keep your {petProfile.type} healthy and comfortable.
              </p>
            </div>
            <div className="grooming-tips">
              <h5>Grooming Tips:</h5>
              <ul>
                {groomingTips.slice(0, 3).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="video-card">
            <h4>Bathing Instructions</h4>
            <div className="bathing-video">
              <video 
                controls 
                width="100%" 
                style={{ maxWidth: '500px', borderRadius: '8px' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./assets/Videos/bathing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-description">
                Step-by-step bathing instructions to keep your {petProfile.type} clean and healthy.
              </p>
            </div>
            <div className="grooming-tips">
              <h5>Additional Tips:</h5>
              <ul>
                {groomingTips.slice(3).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Health Tips Section */}
      <div className="pet-care-section">
        <h3>Health Tips</h3>
        <div className="health-tips-content">
          <div className="tip-card">
            <h4>General Health</h4>
            <p>Maintaining your {petProfile.type}'s health requires attention to several key areas:</p>
            <ul>
              {healthTips.slice(0, 3).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="audio-placeholder">
              <button className="audio-button">🔊 Listen to detailed health guide</button>
            </div>
          </div>
          
          <div className="tip-card">
            <h4>Preventive Care</h4>
            <p>Regular preventive care can help catch issues early:</p>
            <ul>
              {healthTips.slice(3).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="health-video">
              <video 
                controls 
                width="100%" 
                style={{ maxWidth: '400px', borderRadius: '8px' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./assets/Videos/health-tips.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-description">
                Essential health care and wellness tips for your {petProfile.type}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Tips Section */}
      <div className="pet-care-section">
        <h3>Training Tips</h3>
        <div className="training-tips-content">
          <div className="tip-card">
            <h4>Basic Training</h4>
            <p>Effective training for {petProfile.type}s requires patience and consistency:</p>
            <ul>
              {trainingTips.slice(0, 3).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="audio-placeholder">
              <button className="audio-button">🔊 Listen to training instructions</button>
            </div>
          </div>
          
          <div className="tip-card">
            <h4>Advanced Techniques</h4>
            <p>Building on basic commands:</p>
            <ul>
              {trainingTips.slice(3).map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
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
                Interactive training techniques and exercises for your {petProfile.type}.
              </p>
            </div>
            <div className="text-tip">
              <p>Remember: Training is an ongoing process that strengthens the bond between you and your {petProfile.type}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;