import React, { useState, useEffect } from 'react';
import '../css/ScrollingTicker.css';

const ScrollingTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get user's location and convert to address
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // const locationData = {
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude
          // };
          // setLocation(locationData);
          
          // Convert coordinates to address using BigDataCloud API
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
              // Extract detailed address components
              const street = data.locality || '';
              const city = data.city || data.locality || '';
              const country = data.countryName || '';
              
              // Create detailed address string
              const addressParts = [street, city, country].filter(part => part);
              if (addressParts.length > 0) {
                setAddress(addressParts.join(', '));
              } else {
                setAddress('Address unavailable');
              }
            })
            .catch(error => {
              console.error('Error getting address:', error);
              setAddress('Address unavailable');
            });
        },
        (error) => {
          console.error('Error getting location:', error);
          setAddress('Location unavailable');
        }
      );
    } else {
      setAddress('Geolocation not supported');
    }
  }, []);

  // Sample updates for the ticker
  const updates = [
    "Free vaccination clinic next Monday",
    `${currentTime.toLocaleDateString()} - ${currentTime.toLocaleTimeString()} - Location: ${address || 'Getting location...'}`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate through updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % updates.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [updates.length, address, currentTime]);

  return (
    <div className="scrolling-ticker">
      <div className="ticker-content">
        <span className="ticker-item">{updates[currentIndex]}</span>
      </div>
    </div>
  );
};

export default ScrollingTicker;