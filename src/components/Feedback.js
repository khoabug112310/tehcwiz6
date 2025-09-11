import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    // For now, we'll just show an alert
    alert('Thank you for your feedback! This is a demonstration, so no data was actually submitted.');
    // Reset form
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div>
      <h2>Feedback</h2>
      <p>We value your feedback! Please let us know how we can improve our services.</p>
      
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows="5"
          ></textarea>
        </div>
        
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;