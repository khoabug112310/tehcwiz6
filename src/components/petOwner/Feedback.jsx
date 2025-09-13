import React, { useState } from "react";
import Swal from 'sweetalert2';
import "../../css/Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      rating === 0
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields and provide a rating.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Success message
    Swal.fire({
      title: 'Thank You!',
      text: 'Your feedback has been submitted successfully. We appreciate your input!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setRating(0);
  };

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Bé Ly",
      pet: "Golden",
      avatar: "SJ",
      image: "./assets/pet-owner/golden.jpg",
      rating: 5,
      content: "The pet care advice I received was exceptional. My dog's health has improved dramatically since following their recommendations."
    },
    {
      id: 2,
      name: "Sơn tùng Mtp",
      pet: "Dog",
      avatar: "MC",
      image: "./assets/pet-owner/sontung.jpg",
      rating: 5,
      content: "The grooming tips saved me hundreds of dollars. My Dog looks and feels better than ever. Highly recommend their services!"
    },
    {
      id: 3,
      name: "Snoopdog",
      pet: "Bulldog",
      avatar: "ER",
      image: "./assets/pet-owner/snoop.jpg",
      rating: 4,
      content: "Professional, caring, and knowledgeable staff. They helped me through a difficult time when my pet was sick."
    }
  ];

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2 className='fw-bold fs-1'>We Value Your Feedback</h2>
        <p>Your opinion matters to us! Help us improve our services by sharing your experience with FurEver Care.</p>
      </div>

      <div className="feedback-content">
        <div className="feedback-form-section">
          <form onSubmit={handleSubmit} className="feedback-form">
            <h3>Share Your Experience</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Enter the subject of your feedback"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Overall Rating *</label>
              <div className="rating-group">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= (hoverRating || rating) ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                  {rating === 0 && "Select a rating"}
                </p>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback *</label>
              <textarea
                id="feedback"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please share your experience with our services..."
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="button2 w-100">
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.pet} Owner</p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>{testimonial.content}</p>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;