import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/Footer.css';

const Footer = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [userLocation, setUserLocation] = useState({
    city: '',
    region: '',
    country: '',
    loading: true,
    error: false
  });

  // Fetch user location using IP-API
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ip-api.com/json/');
        const data = await response.json();
        
        if (data.status === 'success') {
          setUserLocation({
            city: data.city,
            region: data.regionName,
            country: data.country,
            loading: false,
            error: false
          });
        } else {
          setUserLocation(prev => ({
            ...prev,
            loading: false,
            error: true
          }));
        }
      } catch (error) {
        console.error('Error fetching location:', error);
        setUserLocation(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
      }
    };

    fetchLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    
    // Show success message to user
    Swal.fire({
      title: 'Thank you for subscribing!',
      html: `Email: ${email}<br><br>We will send notifications to your email when we have new information about:<br>• Pet care products<br>• Pet care tips and guides<br>• Special offers and discounts<br>• Veterinary service updates<br><br>Please check your inbox to confirm your subscription!`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
    setEmail('');
  };

  const handleLogoClick = () => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-newsletter-section">
          <h3 className="newsletter-title">Get Updates</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="email-input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="email-input"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Go
            </button>
          </form>
          <div className="social-media">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://quora.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-quora"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-section footer-info-section">
          <div className="company-logo">
            <Link to="/" onClick={handleLogoClick}>
              <img 
                src="/assets/home/logo1.png" 
                alt="FurEver Care Logo" 
                className="footer-logo-img"
              />
            </Link>
          </div>
          <div className="company-description">
            <p>
              FurEver Care - Where love meets expertise. Providing comprehensive pet care 
              solutions, expert guidance, and unwavering support for every furry family member. 
              Because every pet deserves a lifetime of health, happiness, and unconditional love.
            </p>
          </div>
        </div>

        <div className="footer-section footer-map-section">
          <h3 className="find-us-title">Find Us</h3>

          <div className="footer-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0636479687845!2d106.62663331533507!3d10.79904399230163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c1c8c8c8c5%3A0x1234567890abcdef!2s21%20H%E1%BA%ADu%20Giang%2C%20T%C3%A2n%20B%C3%ACnh%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1642345678901!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FurEver Care Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 FurEver Care. They Deserve Forever Love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;