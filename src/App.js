import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import ScrollingTicker from './components/ScrollingTicker.jsx';
import './css/Global.css';

// Import page components
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import PetCare from './components/PetCare.jsx';
import PetProfile from './components/PetProfile.jsx';
import Products from './components/Products.jsx';
import Emergency from './components/Emergency.jsx';
import Feedback from './components/Feedback.jsx';
import Contact from './components/Contact.jsx';
import VetProfile from './components/VetProfile.jsx';
import TimeSlots from './components/TimeSlots.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Gallery from './components/Gallery.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import Events from './components/Events.jsx';
import ShelterContact from './components/ShelterContact.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Form submitted', { userName, userType }); // Debug log
    
    // Trim whitespace from inputs
    const trimmedName = userName.trim();
    const trimmedType = userType.trim();
    
    if (trimmedName && trimmedType) {
      console.log('Login successful'); // Debug log
      setIsLoggedIn(true);
      setShowPopup(false);
      // Save to localStorage for persistence
      localStorage.setItem('userName', trimmedName);
      localStorage.setItem('userType', trimmedType);
    } else {
      console.log('Login failed: missing data', { userName: trimmedName, userType: trimmedType }); // Debug log
      // Show an alert if form is incomplete
      if (!trimmedName) {
        alert('Please enter your name');
      } else if (!trimmedType) {
        alert('Please select a user type');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserType('');
    setShowPopup(true);
    // Clear localStorage
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
  };

  // Check if user is already logged in
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    const savedType = localStorage.getItem('userType');
    if (savedName && savedType) {
      setUserName(savedName);
      setUserType(savedType);
      setIsLoggedIn(true);
      setShowPopup(false);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-form">
              <div className="popup-logo-container">
                <img src="/logo_furever_care_nonbackground.png" alt="FurEver Care Logo" className="popup-logo" />
              </div>
              <p className="popup-subtitle">They Deserve Forever Love</p>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="userName">Enter Your Name:</label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Select User Type:</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="pet-owner"
                        checked={userType === 'pet-owner'}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Pet Owner
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="veterinarian"
                        checked={userType === 'veterinarian'}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Veterinarian
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="animal-shelter"
                        checked={userType === 'animal-shelter'}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Animal Shelter
                    </label>
                  </div>
                </div>
                <button type="submit">Enter</button>
              </form>
            </div>
          </div>
        )}
        
        {isLoggedIn && (
          <div>
            <header className="app-header">
              <div className="header-logo-container">
                <img src="/logo_furever_care_nonbackground.png" alt="FurEver Care Logo" className="header-logo" />
              </div>
              <div className="user-info">
                <span>Welcome, {userName}!</span>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            </header>
            <Navigation userType={userType} />
            <main>
              <Routes>
                <Route path="/" element={<Home userName={userName} userType={userType} />} />
                <Route path="/about" element={<About />} />
                <Route path="/pet-care" element={<PetCare />} />
                <Route path="/pet-profile" element={<PetProfile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vet-profile" element={<VetProfile />} />
                <Route path="/time-slots" element={<TimeSlots />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/stories" element={<SuccessStories />} />
                <Route path="/events" element={<Events />} />
                <Route path="/shelter-contact" element={<ShelterContact />} />
              </Routes>
            </main>
            <footer className="app-footer">
              <div className="footer-content">
                <div className="footer-logo-container">
                  <img src="/logo_furever_care_icon.png" alt="FurEver Care Icon" className="footer-logo" />
                  <p className="footer-copyright">&copy; 2025 FurEver Care. They Deserve Forever Love.</p>
                </div>
                <div className="footer-links">
                  <a href="/about">About Us</a>
                  <a href="/contact">Contact</a>
                  <a href="/feedback">Feedback</a>
                </div>
              </div>
            </footer>
            <ScrollingTicker />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;