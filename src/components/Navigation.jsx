import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

const Navigation = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getMenuItems = () => {
    switch (userType) {
      case 'pet-owner':
        return [
          { name: 'About Us', path: '/about' },
          { name: 'Pet Care', path: '/pet-list' },
          { name: 'Product Showcase', path: '/products' },
          { name: 'Emergency Help', path: '/emergency' },
          { name: 'Feedback', path: '/feedback' },
          { name: 'Contact Us', path: '/contact' }
        ];
      case 'veterinarian':
        return [
          { name: 'My Profile', path: '/vet-profile' },
          { name: 'Time Slots', path: '/time-slots' },
          { name: 'Case Studies', path: '/case-studies' }
        ];
      case 'animal-shelter':
        return [
          { name: 'Adoption Gallery', path: '/gallery' },
          { name: 'Success Stories', path: '/stories' },
          { name: 'Events', path: '/events' },
          { name: 'Contact', path: '/shelter-contact' }
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      {/* Hamburger Menu Button for Mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu when item is clicked
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;