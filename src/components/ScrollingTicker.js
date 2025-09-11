import React, { useState, useEffect } from 'react';

const ScrollingTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ latitude: 40.7128, longitude: -74.0060 });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get user location (simplified for demo)
  useEffect(() => {
    // In a real app, we would use the Geolocation API
    // For demo purposes, we'll use a default location
    setLocation({
      latitude: 40.7128,
      longitude: -74.0060
    });
  }, []);

  // Sample updates for the ticker
  const updates = [
    "New pet products arriving this week!",
    "Adoption event this Saturday from 10am-4pm",
    "Free vaccination clinic next Monday",
    `${currentTime.toLocaleDateString()} - ${currentTime.toLocaleTimeString()} - Location: ${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate through updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % updates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [updates.length]);

  return (
    <div className="scrolling-ticker">
      <div className="ticker-content">
        <span className="ticker-item">{updates[currentIndex]}</span>
      </div>
    </div>
  );
};

export default ScrollingTicker;