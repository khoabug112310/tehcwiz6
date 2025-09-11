import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to FurEver Care - They Deserve Forever Love.</p>
      <p>
        FurEver Care is a responsive web application dedicated to pet care, providing a platform for 
        managing pet profiles, appointments, related products, and community support. The website is 
        designed as a Single Page Application (SPA) with a user-friendly interface, focusing on three 
        main types of users: Pet Owners, Veterinarians, and Animal Shelters.
      </p>
      <h3>Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <h4>Alex Johnson</h4>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <h4>Maria Garcia</h4>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <h4>David Smith</h4>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;