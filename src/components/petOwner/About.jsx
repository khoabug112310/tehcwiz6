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

      </div>
    
  );
};

export default About;