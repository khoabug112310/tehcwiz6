import React, { useState, useEffect } from 'react';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  // Load success stories from JSON file
  useEffect(() => {
    // In a real app, we would fetch from a JSON file
    // For now, we'll use mock data
    const mockStories = [
      {
        id: 1,
        title: "Buddy Finds His Forever Home",
        story: "After spending 6 months at our shelter, Buddy was adopted by a loving family with two children. He now enjoys long walks in the park and has become a loyal companion.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 2,
        title: "Whiskers' Journey to Recovery",
        story: "Whiskers was found injured on the streets but made a full recovery with our veterinary team's care. She was adopted by a kind elderly woman who adores her.",
        image: "https://images.unsplash.com/photo-1589924671690-7c1d4ce9718d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 3,
        title: "Luna's New Family",
        story: "Luna was surrendered by her previous owners but quickly found a new home with a family who already had two rabbits. She now lives happily with her new companions.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
      }
    ];
    
    setStories(mockStories);
  }, []);

  return (
    <div>
      <h2>Success Stories</h2>
      <p>Hear about the happy endings for pets who found their forever homes.</p>
      
      <div className="success-stories">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;