import React, { useState } from 'react';
import '../css/Login.css';

const Login = ({ onLoginSuccess }) => {
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted", { userName, userType }); // Debug log

    // Trim whitespace from inputs
    const trimmedName = userName.trim();
    const trimmedType = userType.trim();

    // For veterinarians, validate that the name is one of the allowed names
    if (trimmedType === "veterinarian") {
      const validVetNames = ["Phong", "Tai", "Hung", "Phuc"];
      const normalizedInputName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
      
      if (!validVetNames.includes(normalizedInputName)) {
        alert("For veterinarians, please enter one of the following names: Phong, Tai, Hung, or Phuc");
        return;
      }
    }

    if (trimmedName && trimmedType) {
      console.log("Login successful"); // Debug log
      // Save to localStorage for persistence
      localStorage.setItem("userName", trimmedName);
      localStorage.setItem("userType", trimmedType);
      
      // Notify the parent App component about successful login
      // The App component will handle navigation based on user type
      if (onLoginSuccess) {
        onLoginSuccess(trimmedName, trimmedType);
      }
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

  return (
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
            {userType === "veterinarian" && (
              <small className="vet-name-hint">Veterinarians must enter: Phong, Tai, Hung, or Phuc</small>
            )}
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
  );
};

export default Login;