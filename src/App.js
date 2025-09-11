import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import ScrollingTicker from "./components/ScrollingTicker.jsx";
import "./App.css";

// Import page components
import Home from "./components/Home.jsx";
import About from "./components/petOwner/About.jsx";
import PetCare from "./components/petOwner/PetCare.jsx";
import PetProfile from "./components/petOwner/PetProfile.jsx";
import PetList from "./components/petOwner/PetList.jsx";
import FormAdd from "./components/petOwner/FormAdd.jsx";
import Products from "./components/petOwner/Products.jsx";
import Emergency from "./components/petOwner/Emergency.jsx";
import Feedback from "./components/petOwner/Feedback.jsx";
import Contact from "./components/petOwner/Contact.jsx";
import VetProfile from "./components/veterinarian/VetProfile.jsx";
import TimeSlots from "./components/veterinarian/TimeSlots.jsx";
import CaseStudies from "./components/veterinarian/CaseStudies.jsx";
import Gallery from "./components/animalShelter/Gallery.jsx";
import SuccessStories from "./components/animalShelter/SuccessStories.jsx";
import Events from "./components/animalShelter/Events.jsx";
import ShelterContact from "./components/animalShelter/ShelterContact.jsx";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted", { userName, userType }); // Debug log

    // Trim whitespace from inputs
    const trimmedName = userName.trim();
    const trimmedType = userType.trim();

    if (trimmedName && trimmedType) {
      console.log("Login successful"); // Debug log
      setIsLoggedIn(true);
      setShowPopup(false);
      // Save to localStorage for persistence
      localStorage.setItem("userName", trimmedName);
      localStorage.setItem("userType", trimmedType);
    } else {
      console.log("Login failed: missing data", {
        userName: trimmedName,
        userType: trimmedType,
      }); // Debug log
      // Show an alert if form is incomplete
      if (!trimmedName) {
        alert("Please enter your name");
      } else if (!trimmedType) {
        alert("Please select a user type");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserType("");
    setShowPopup(true);
    // Clear localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userType");
  };

  // Check if user is already logged in
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedType = localStorage.getItem("userType");
    if (savedName && savedType) {
      setUserName(savedName);
      setUserType(savedType);
      setIsLoggedIn(true);
      setShowPopup(false);
    }
  }, []);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App">
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-form">
              <div className="popup-logo-container">
                <img
                  src="./assets/home/logo1.png"
                  alt="FurEver Care Logo"
                  className="popup-logo"
                />
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
                        checked={userType === "pet-owner"}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Pet Owner
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="veterinarian"
                        checked={userType === "veterinarian"}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Veterinarian
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="userType"
                        value="animal-shelter"
                        checked={userType === "animal-shelter"}
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      Animal Shelter
                    </label>
                  </div>
                </div>
                <button className="button4" type="submit">
                  Enter
                </button>
              </form>
            </div>
          </div>
        )}

        {isLoggedIn && (
          <div>
            <header className="app-header">
              <div className="header-logo-container">
                <Link to="/">
                  <img
                    src="./assets/home/logo1.png"
                    alt="FurEver Care Logo"
                    className="header-logo"
                  />
                </Link>
              </div>
              <Navigation userType={userType} />
              <div className="user-info">
                <span>Welcome, {userName}!</span>
                <button onClick={handleLogout} className="button1">
                  Logout
                </button>
              </div>
            </header>
            <main>
              <Routes>
                <Route
                  path="/"
                  element={<Home userName={userName} userType={userType} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/pet-care" element={<PetCare />} />
                <Route path="/pet-profile" element={<PetProfile />} />
                <Route path="/pet-list" element={<PetList />} />
                <Route path="/form-add" element={<FormAdd />} />
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
            <footer class="footer">
              <div class="container">
                <div class="items d-flex justify-content-between">
                  <div class="footer-items">
                    <h3 class="fw-bold fs-5 mb-4">Company</h3>
                    <div class="footer-list d-flex flex-column">
                      <a href="">Home</a>
                      <a href="">About</a>
                      <a href="">Services</a>
                      <a href="">Blog</a>
                      <a href="">Contact Us</a>
                    </div>
                  </div>

                  <div class="footer-items">
                    <h3 class="fw-bold fs-5 mb-4">Useful Links</h3>
                    <div class="footer-list d-flex flex-column">
                      <a href="">Case Studies</a>
                      <a href="">Our Branches</a>
                      <a href="">Latest Media</a>
                      <a href="">About Company</a>
                      <a href="">Our People</a>
                    </div>
                  </div>

                  <div class="footer-items">
                    <h3 class="fw-bold fs-5 mb-4">Our Services</h3>
                    <div class="footer-list d-flex flex-column">
                      <a href="">Privacy Policy</a>
                      <a href="">Our Terms</a>
                      <a href="">Services</a>
                      <a href="">Landing Page</a>
                      <a href="">Our People</a>
                    </div>
                  </div>

                  <div class="footer-items">
                    <h3 class="fw-bold fs-5 mb-4">Newsletter</h3>
                    <div class="footer-form">
                      <p>Get latest updates and offers.</p>
                      <form
                        action="#"
                        class="d-flex justify-content-between mb-4"
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                        <button type="submit" class="button2">
                          GO
                        </button>
                      </form>
                      <span>
                        Sign up for our latest news & articles. We won’t give
                        you spam mails.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="copyright d-flex justify-content-between align-items-center">
                  <div class="content">
                    © 2025 FurEver Care. All rights reserved | Designed by
                    <a href="#"> Up and Down team</a>
                  </div>
                  <div class="icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-github"></i>
                  </div>
                </div>
              </div>
            </footer>
            <ScrollingTicker />

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button className="scroll-to-top button2 p-4" onClick={scrollToTop}>
                ↑
              </button>
            )}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
