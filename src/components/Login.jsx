import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../css/Login.css";

const Login = ({ onLoginSuccess }) => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!name.trim()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your name',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    if (!userType) {
      Swal.fire({
        title: 'Error!',
        text: 'Please select a user type',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    // Special validation for veterinarians
    if (userType === "veterinarian") {
      const validNames = ["Phong", "Tai", "Hung", "Phuc"];
      if (!validNames.includes(name)) {
        Swal.fire({
          title: 'Veterinarian Access',
          text: 'For veterinarians, please enter one of the following names: Phong, Tai, Hung, or Phuc',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        return;
      }
    }
    
    // If validation passes, call the success callback and store user info
    onLoginSuccess(name, userType);
    
    // Store user info in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userType", userType);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                /> &nbsp; &nbsp; 
                Pet Owner
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="veterinarian"
                  checked={userType === "veterinarian"}
                  onChange={(e) => setUserType(e.target.value)}
                /> &nbsp; &nbsp; 
                Veterinarian
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="animal-shelter"
                  checked={userType === "animal-shelter"}
                  onChange={(e) => setUserType(e.target.value)}
                /> &nbsp; &nbsp; 
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