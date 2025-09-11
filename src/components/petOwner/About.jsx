import React from "react";
import "../../css/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header container">
        <h2 className="fw-bold">About FurEver Care</h2>
        <p className="tagline">
          I’ll be honest—before 2020, I wasn’t exactly a pet person. The idea of
          having a furry friend around seemed like a lot of work, and I just
          didn’t see myself as a pet owner. But then, COVID happened, and like
          many, I found myself stuck at home with way too much time on my hands.
          The loneliness started to creep in, and that’s when we decided to take
          the plunge and get a dog. Enter Coco, the male Labrador who turned my
          world upside down. When I first brought Coco into my life, I was on
          cloud nine. But let me tell you, Coco is no ordinary dog—he’s a
          walking contradiction. One minute, he’s zooming around the house like
          a tiny tornado, and the next, he’s sprawled out on the floor, snoring
          louder than a freight train. As for his eating habits? Total mystery.
          He’s a foodie who can go from begging for treats to turning his nose
          up at gourmet meals faster than you can say “good boy.”
        </p>
      </div>

      <div className="about-section our-mission d-flex flex-column justify-content-center h-100">
        <h3 className="text-white container fw-bold fs-1">Our Mission</h3>
        <p className="text-white container">
          At FurEver Care, our mission is to enhance the lives of pets and their
          owners by providing comprehensive care solutions, fostering
          responsible pet ownership, and supporting animal welfare
          organizations. We believe every pet deserves a loving, healthy life
          and every owner deserves the resources they need to provide it.
        </p>
      </div>

      <div className="about-section container">
        <h3 className="fw-bold fs-1">What We Offer</h3>
        <div className="services-grid">
          <div className="service-card">
            <h4>Pet Owner Resources</h4>
            <p>
              Comprehensive tools for managing your pet's health, nutrition, and
              wellness.
            </p>
          </div>
          <div className="service-card">
            <h4>Veterinary Support</h4>
            <p>
              Professional resources for veterinarians to better serve their
              patients.
            </p>
          </div>
          <div className="service-card">
            <h4>Animal Shelter Network</h4>
            <p>
              Supporting shelters with adoption services and community outreach
              programs.
            </p>
          </div>
        </div>
      </div>

      <div className="about-section container">
        <h3 className="fw-bold fs-1">Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image">
              <img
                src="./assets/image-pet-owner/tai.jpg"
                alt="Minh Tài - Project Manager"
              />
              \n
            </div>
            <h4>Minh Tài</h4>
            <p className="team-role">Project Manager</p>
            <p className="team-bio">
              With over 5 years of experience in project management, Tài ensures
              our development process runs smoothly and efficiently.
            </p>
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img
                src="./assets/image-pet-owner/hung.jpg"
                alt="Hùng - Lead/Senior Veterinarian"
              />
            </div>
            <h4>Hùng</h4>
            <p className="team-role">Lead/Senior Veterinarian</p>
            <p className="team-bio">
              A Lead Veterinarian with over 8 years of hands-on experience in
              diagnosing, treating, and managing complex medical cases in small
              animals
            </p>
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img
                src="./assets/image-pet-owner/phong.jpg"
                alt="Lâm Phong - Medical Director"
              />
            </div>
            <h4>Lâm Phong</h4>
            <p className="team-role">Medical Director</p>
            <p className="team-bio">
              A Medical Director with 6 years of clinical experience and 3 years
              in veterinary hospital management and operations
            </p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h3 className="fw-bold fs-1">Find Us</h3>
        <div className="location-info">
          <div className="location-details">
            <p className="address-text">
              📍 <strong>Our Location:</strong> 21 Hậu Giang, Tân Bình, Hồ Chí
              Minh, Việt Nam
            </p>
            <p>🚗 Parking is available nearby for your convenience.</p>
            <p>🏥 Close to several veterinary clinics and pet supply stores.</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0636479687845!2d106.62663331533507!3d10.79904399230163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c1c8c8c8c5%3A0x1234567890abcdef!2s21%20H%E1%BA%ADu%20Giang%2C%20T%C3%A2n%20B%C3%ACnh%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1642345678901!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FurEver Care Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
