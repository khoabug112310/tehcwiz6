import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = ({ userName, userType }) => {
  const handleReadMoreClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
      <div className="carousel home-container">
        <div className="carousel-left d-flex flex-column justify-content-center">
          <div className="title">
            <h3>Explore professional pet service</h3>
          </div>
          <div className="content">
            <p>
              We provide a variety of services such as bathing, trimming,
              daytime care and periodic health care, with experienced staff and
              modern facilities, ensuring your pet is always healthy, clean and
              happy.
            </p>
            <Link to="/about">
              <button className="button1">get started</button>
            </Link>
          </div>
        </div>
        <div className="carousel-right">
          <img
            src="https://petservicehcm.com/wp-content/uploads/2024/08/pet-care-slide3-img-1.webp"
            alt="Professional pet care service"
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
            <div className="feature-icon"><img src="/assets/pet-medicine.png" alt="Pet medicine" /></div>
            <h4>Pet Medicines</h4>
            <p>
              Access comprehensive guides on pet nutrition, grooming, and
              health.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><img src="/assets/pet-food.png" alt="Pet food" /></div>
            <h4>Pet Food</h4>
            <p>
              Purr-fect Bites, Wag-Worthy Delights!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><img src="/assets/pet-treat.png" alt="Pet treats" /></div>
            <h4>Pet Treats</h4>
            <p>Purr-fect Nibbles, Wag-Worthy Thrills!</p>
          </div>
        </div>
      </div>

      <section className="carousel2">
        <div className="content title2 home-container">
          <h3 className="text-white">
            We are true to ourselves, and commit to always perform at our best.
          </h3>
          <p className="text-white my-3">
            Grounded in authenticity, we commit to delivering excellence. Being true to ourselves means you get genuine partnership. Performing at our best means you get superior results. This is our promise—a foundation of integrity and quality you can trust.
          </p>
          <Link to="/about" onClick={handleReadMoreClick}>
            <button className="button2">Read more</button>
          </Link>
        </div>
      </section>

      <div className="promise d-flex align-items-center">
        <div className="promise-left w-50 d-flex flex-column align-items-start">
          <div className="title me-1 mt-5">
            <h3>The Furever Care Promise</h3>
          </div>
          <div className="content me-2">
            <div className="accordion-menu">
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
        <div className="promise-right w-50">
          <figure>
            <video autoPlay loop muted src="/assets/0911.mp4">
              Your browser does not support the video tag.
            </video>
          </figure>
        </div>
      </div>

      <section className="ready">
        <div className="container">
          <div className="title text-center">
            <h3>Ready to make your pet happy</h3>
          </div>
          <div className="content text-center my-3">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </p>
          </div>
          <div className="items d-flex justify-content-center">
            <Link to="/contact" className="mx-2">
              <button className="button1">Book now</button>
            </Link>
            <Link to="/contact" className="mx-2">
              <button className="button2">get started</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;