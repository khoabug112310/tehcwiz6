import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home = ({ userName, userType }) => {
  const [petProfile, setPetProfile] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    dietaryNeeds: "",
    medicalHistory: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  // Load saved profile from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("petProfile");
    if (saved) {
      setPetProfile(JSON.parse(saved));
      setShowPreview(true);
    }
  }, []);

  const getUserTypeText = () => {
    switch (userType) {
      case "pet-owner":
        return "Pet Owner";
      case "veterinarian":
        return "Veterinarian";
      case "animal-shelter":
        return "Animal Shelter";
      default:
        return "User";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const profileToSave = {
      ...petProfile,
      lastUpdated: new Date().toISOString(),
    };

    localStorage.setItem("petProfile", JSON.stringify(profileToSave));
    setShowPreview(true);

    // Navigate to PetProfile page after saving
    navigate("/pet-profile");
  };

  const getPetTypeIcon = (type) => {
    switch (type) {
      case "Dog":
        return "🐕";
      case "Cat":
        return "🐈";
      case "Bird":
        return "🐦";
      case "Rabbit":
        return "🐇";
      default:
        return "🐾";
    }
  };

  return (
    <div>
      <div class="carousel home-container">
        <div class="carousel-left d-flex flex-column justify-content-center">
          <div class="title">
            <h3>Explore professional pet service</h3>
          </div>
          <div class="content">
            <p>
              We provide a variety of services such as bathing, trimming,
              daytime care and periodic health care, with experienced staff and
              modern facilities, ensuring your pet is always healthy, clean and
              happy.
            </p>
            <a href="about.html">
              <button class="button1">get started</button>
            </a>
          </div>
        </div>
        <div class="carousel-right">
          <img
            src="https://petservicehcm.com/wp-content/uploads/2024/08/pet-care-slide3-img-1.webp"
            alt=""
          />
        </div>
      </div>

      <div className="intro-section home-container">
        <div className="title2">
          <h3>About FurEver Care</h3>
          <p>
            FurEver Care is your comprehensive pet care companion, designed to
            help you provide the best possible care for your beloved animals.
            Whether you're a pet owner, veterinarian, or animal shelter worker,
            our platform offers tailored solutions to meet your specific needs.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><img src="/assets/pet-medicine.png" alt="" /></div>
            <h4>Pet Medicines</h4>
            <p>
              Access comprehensive guides on pet nutrition, grooming, and
              health.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><img src="/assets/pet-food.png" alt="" /></div>
            <h4>Pet Food</h4>
            <p>
              Purr-fect Bites, Wag-Worthy Delights!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><img src="/assets/pet-treat.png" alt="" /></div>
            <h4>Pet Treats</h4>
            <p>Purr-fect Nibbles, Wag-Worthy Thrills!</p>
          </div>
        </div>
      </div>

      <section class="carousel2">
        <div class="content title2 home-container">
          <h3 className="text-white">
            We are true to ourselves, and commit to always perform at our best.
          </h3>
          <p className="text-white my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, doloribus atque. Corrupti exercitationem voluptatem
            ipsum iste consequuntur et vitae voluptas temporibus? Maxime dolores
            amet voluptatum illo consequatur placeat fugit ducimus.
          </p>
          <a href="about.html">
            <button class="button2">Read more</button>
          </a>
        </div>
      </section>

      <div class="promise d-flex align-items-center home-container">
        <div class="promise-left w-50 d-flex flex-column align-items-start">
          <div class="title me-1 mt-5">
            <h3>The Furever Care Promise</h3>
          </div>
          <div class="content me-2">
            <div class="accordion-menu">
              <ul>
                <li className="d-flex flex-column align-items-start ">
                  <h2>TOP NOTCH QUALITY</h2>
                  <p className="text-start">
                    Vet-approved food, supplements, and medicines from top
                    brands, ensuring your pet's health and happiness.
                  </p>
                </li>
                <li className="d-flex flex-column align-items-start ">
                  <h2>FUR-TASTIC SERVICES</h2>
                  <p className="text-start">
                    Our friendly and knowledgeable team is here to help with
                    expert advice and 24/7 support.
                  </p>
                </li>
                <li className="d-flex flex-column align-items-start ">
                  <h2>Paw-some Deals</h2>
                  <p className="text-start">
                    Enjoy exclusive discounts and special offers on premium
                    products, making pet care affordable and fun.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="promise-right w-50">
          <figure>
            <video autoPlay loop muted src="/assets/0911.mp4"></video>
          </figure>
        </div>
      </div>

      <section class="ready">
        <div class="container">
          <div class="title text-center">
            <h3>Ready to make your pet happy</h3>
          </div>
          <div class="content text-center my-3">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </p>
          </div>
          <div class="items d-flex justify-content-center">
            <a href="contact.html">
              <button class="button1 mx-2">Book now</button>
            </a>
            <a href="contact.html">
              <button class="button2 mx-2">get started</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
