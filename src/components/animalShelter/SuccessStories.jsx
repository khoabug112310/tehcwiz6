import React, { useState, useEffect } from 'react';
import storiesData from '../../data/success_stories.json';
import '../../css/SuccessStories.css';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  // Load success stories from JSON file
  useEffect(() => {
    setStories(storiesData);
  }, []);

  return (
    <div className="success-stories-container">
      <div className="success-stories-header">
        <h2>Success Stories</h2>
        <p>Hear about the happy endings for pets who found their forever homes.</p>
      </div>
      
      <div className="stories-intro">
        <h3>Making Tails Wag and Hearts Happy</h3>
        <p>Every adoption is a celebration of love and compassion. These heartwarming stories showcase the incredible bonds formed between our rescued animals and their new families. Each tale is a testament to the transformative power of giving a pet a second chance at happiness.</p>
        <p>From scared and lonely to loved and cherished, these journeys remind us why we do what we do. Browse through these inspiring stories and perhaps find motivation to open your heart and home to a furry friend in need.</p>
      </div>
      
      <div className="stories-grid">
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <div key={story.id} className="story-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <h3>{story.title}</h3>
                <p className="story-text">{story.story}</p>
                <div className="story-meta">
                  <button className="read-more" onClick={() => setSelectedStory(story)}>Read Full Story</button>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-stories">
            <h3>No Stories Available</h3>
            <p>There are currently no success stories to display. Please check back later.</p>
          </div>
        )}
      </div>
      
      {selectedStory && (
        <div className="modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedStory.title}</h2>
            <img
              src={selectedStory.image}
              alt={selectedStory.title}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <div>
              {selectedStory.details
                ? selectedStory.details.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))
                : <p>No details available for this story.</p>
              }
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SuccessStories;