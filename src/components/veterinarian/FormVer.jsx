import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/FormVer.css';

const FormVer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    email: '',
    phone: '',
    office: '',
    image: '/assets/image-pet-owner/phong.jpg' // Default image
  });

  // Load user name from localStorage when component mounts
  // Also check if we're editing existing data
  useEffect(() => {
    // Check if we're editing existing data
    if (location.state && location.state.vetData) {
      setFormData(location.state.vetData);
    } else {
      // Load user name from localStorage when component mounts
      const savedUserName = localStorage.getItem('userName');
      if (savedUserName) {
        setFormData(prevState => ({
          ...prevState,
          name: savedUserName
        }));
      }
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('vetData', JSON.stringify(formData));
    // Navigate to the veterinarian profile page
    navigate('/vet-profile');
  };

  // Determine if we're in edit mode
  const isEditMode = location.state && location.state.vetData;

  return (
    <div className="form-ver-container">
      <div className="form-ver-header">
        <h2 className='fw-bold fs-1'>{isEditMode ? 'Edit Veterinarian Information' : 'Veterinarian Information Form'}</h2>
        <p>{isEditMode ? 'Update your professional details below' : 'Please fill in your professional details below'}</p>
      </div>

      <div className="form-ver-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="office">Office Location:</label>
            <input
              type="text"
              id="office"
              name="office"
              value={formData.office}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Profile Image URL (optional):</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="submit-button">
            {isEditMode ? 'Update Profile' : 'Save and View Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormVer;