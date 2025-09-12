import React, { useState, useEffect } from 'react';
import '../css/ScrollingTicker.css';

const ScrollingTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState({
    city: '',
    region: '',
    country: '',
    loading: true,
    error: false
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch user location using IP-API
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        
        if (data.status === 'success') {
          setUserLocation({
            city: data.city,
            region: data.regionName,
            country: data.country,
            loading: false,
            error: false
          });
        } else {
          setUserLocation(prev => ({
            ...prev,
            loading: false,
            error: true
          }));
        }
      } catch (error) {
        console.error('Error fetching location:', error);
        setUserLocation(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
      }
    };

    fetchLocation();
  }, []);

  const getLocationDisplay = () => {
    if (userLocation.loading) {
      return 'Loading location...';
    }
    
    if (userLocation.error) {
      return 'Location unavailable';
    }
    
    const { city, region, country } = userLocation;
    if (city && region && country) {
      return `${city}, ${region}, ${country}`;
    } else if (city && country) {
      return `${city}, ${country}`;
    } else if (country) {
      return country;
    } else {
      return 'Location unavailable';
    }
  };

  // Sample updates for the ticker
  const updates = [
    "New pet products arriving this week!",
    "Adoption event this Saturday from 10am-4pm",
    "Free vaccination clinic next Monday",
    `${currentTime.toLocaleDateString()} - ${currentTime.toLocaleTimeString()} - Location: ${getLocationDisplay()}`
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