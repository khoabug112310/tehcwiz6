import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import ScrollingTicker from "./components/ScrollingTicker.jsx";
import Login from "./components/Login.jsx";
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
import Gallery from "./components/animalShelter/Gallery.jsx";
import SuccessStories from "./components/animalShelter/SuccessStories.jsx";
import Events from "./components/animalShelter/Events.jsx";
import ShelterContact from "./components/animalShelter/ShelterContact.jsx";
import FormVer from "./components/veterinarian/FormVer.jsx";

function App() {
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectTo, setRedirectTo] = useState(""); // New state for handling redirects
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setUserType("");
    setRedirectTo(""); // Reset redirect state on logout
    // Clear localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userType");
  };

  // Handle redirect after login
  useEffect(() => {
    if (isLoggedIn && redirectTo) {
      // The redirect will happen via the conditional rendering below
      // We don't need to reset redirectTo here because it will be reset after the redirect happens
    }
  }, [isLoggedIn, redirectTo]);

  // Check if user is already logged in
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedType = localStorage.getItem("userType");
    if (savedName && savedType) {
      setUserName(savedName);
      setUserType(savedType);
      setIsLoggedIn(true);
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

  // If user is not logged in, only show login routes
  if (!isLoggedIn) {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login onLoginSuccess={(name, type) => {
              setUserName(name);
              setUserType(type);
              setIsLoggedIn(true);
              
              // Set redirect based on user type
              switch (type) {
                case "pet-owner":
                  setRedirectTo("/home");
                  break;
                case "veterinarian":
                  setRedirectTo("/form-ver");
                  break;
                case "animal-shelter":
                  setRedirectTo("/gallery");
                  break;
                default:
                  setRedirectTo("/home");
              }
            }} />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // Handle redirects after login
  if (redirectTo) {
    // Reset the redirectTo state after the redirect happens
    setTimeout(() => {
      setRedirectTo("");
    }, 100); // Small delay to ensure redirect happens first
    
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="*" element={<Navigate to={redirectTo} replace />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // If user is logged in, show the main application
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-logo-container">
            <Link to="/home">
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
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stories" element={<SuccessStories />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shelter-contact" element={<ShelterContact />} />
            <Route path="/form-ver" element={<FormVer />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
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
                    Sign up for our latest news & articles. We won't give
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
    </Router>
  );
}

export default App;