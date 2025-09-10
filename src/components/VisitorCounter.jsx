import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count (in a real app, this would come from a backend)
    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 1000) + 100;
    setCount(initialCount);
    
    // Increment count on each visit
    const newCount = initialCount + 1;
    setCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <div className="visitor-counter">
      <span>Visitor #{count}</span>
    </div>
  );
};

export default VisitorCounter;