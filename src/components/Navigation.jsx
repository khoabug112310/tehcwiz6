import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

const Navigation = ({ userType }) => {
  const getMenuItems = () => {
    switch (userType) {
      case 'pet-owner':
        return [
          { name: 'About Us', path: '/about' },
          { name: 'Pet Care', path: '/pet-care' },
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

  return (
    <nav className="navigation">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              className="nav-link"
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