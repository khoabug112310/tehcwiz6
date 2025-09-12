import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/VetProfile.css';

const VetProfile = () => {
  const [vetData, setVetData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Static time slots for display with detailed examples
  const timeSlots = [
    { 
      time: "9:00 AM", 
      status: "booked",
      detail: "Dental examination for dogs at HCM clinic"
    },
    { 
      time: "10:00 AM", 
      status: "available",
      detail: "General checkup for cats"
    },
    { 
      time: "11:00 AM", 
      status: "available",
      detail: "Vaccination for puppies"
    },
    { 
      time: "12:00 PM", 
      status: "booked",
      detail: "Surgery consultation for senior pets"
    },
    { 
      time: "1:00 PM", 
      status: "booked",
      detail: "Emergency care for injured animals"
    },
    { 
      time: "2:00 PM", 
      status: "available",
      detail: "Nutrition counseling for exotic pets"
    },
    { 
      time: "3:00 PM", 
      status: "available",
      detail: "Behavioral assessment for aggressive dogs"
    },
    { 
      time: "4:00 PM", 
      status: "booked",
      detail: "Dermatology treatment for allergic cats"
    }
  ];

  // Static case studies data
  const caseStudiesData = [
    {
      id: 1,
      title: "Successful Hip Surgery on Golden Retriever",
      petType: "Dog",
      description: "A 6-year-old Golden Retriever presented with severe hip dysplasia causing significant pain and mobility issues. After comprehensive evaluation, our surgical team performed a total hip replacement. The procedure was successful, and with dedicated post-operative care and physical therapy, the dog made a full recovery.",
      outcome: "Full recovery after 3 months with restored mobility and pain-free movement",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Total hip replacement surgery with post-operative physical therapy",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Treatment of Feline Diabetes",
      petType: "Cat",
      description: "A 12-year-old domestic cat was diagnosed with diabetes after showing symptoms of increased thirst, frequent urination, and weight loss. Through a combination of insulin therapy, dietary changes, and regular monitoring, our veterinary team successfully managed the cat's condition. The owner was trained to administer insulin at home and monitor blood glucose levels.",
      outcome: "Condition managed successfully with ongoing treatment and regular check-ups",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Insulin therapy and specialized diabetic diet",
      duration: "Ongoing management"
    }
  ];

  // Static treatments data
  const treatmentsData = [
    {
      id: 1,
      title: "Surgical Procedures",
      description: "Advanced surgical techniques for various conditions including orthopedic, soft tissue, and emergency surgeries.",
      icon: "🔪"
    },
    {
      id: 2,
      title: "Dental Care",
      description: "Comprehensive dental services including cleanings, extractions, and oral surgery.",
      icon: "🦷"
    },
    {
      id: 3,
      title: "Emergency Care",
      description: "24/7 emergency services with specialized equipment and critical care support.",
      icon: "🚨"
    }
  ];

  // Statistics for the stats section
  const stats = [
    { value: "500+", label: "Successful Surgeries" },
    { value: "98%", label: "Patient Recovery Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Care" }
  ];

  useEffect(() => {
    // Load veterinarian data from localStorage
    const savedVetData = localStorage.getItem('vetData');
    if (savedVetData) {
      setVetData(JSON.parse(savedVetData));
    } else {
      // If no data exists, redirect to FormVer to enter information
      navigate('/form-ver');
    }
  }, [navigate]);

  const handleBooking = () => {
    alert('Redirecting to appointment booking system. In a real application, this would take you to our online booking portal.');
  };

  // Function to edit existing profile data
  const handleEditProfile = () => {
    // Navigate to form-ver with existing data
    navigate('/form-ver', { state: { vetData } });
  };

  if (!vetData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vet-container">
      <div className="vet-profiles">
        <div className="vet-profile-card">
          <div className="profile-header">
            <h2>Dr. {vetData.name}</h2>
            <p>{vetData.specialization}</p>
          </div>
          
          <div className="profile-content">
            <div className="vet-image-container">
              <img src={vetData.image} alt={vetData.name} />
            </div>
            
            <div className="vet-info">
              <div className="vet-contact">
                <h4>Contact Information</h4>
                <p>📧 {vetData.email || 'Not provided'}</p>
                <p>📞 {vetData.phone || 'Not provided'}</p>
                <p>📍 {vetData.office || 'Not provided'}</p>
              </div>
              
              <div className="vet-education">
                <h4>Professional Certifications</h4>
                <ul>
                  <li><strong>Years of Experience:</strong> 10+ years</li>
                  <li><strong>Certification:</strong> Licensed Veterinarian</li>
                  <li><strong>Licenses:</strong> State Veterinary Medical License</li>
                  <li><strong>Certificates:</strong> Advanced Surgical Procedures, Emergency Care Certification</li>
                </ul>
                <button className="edit-profile-button" onClick={handleEditProfile}>
                  Edit Profile Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="time-slots-section">
        <h3>Time Slots</h3>
        <div className="time-slots-grid">
          {timeSlots.map((slot, index) => (
            <div 
              key={index} 
              className={`time-slot ${slot.status}`}
              title={slot.status === 'booked' ? `Appointment booked for ${slot.time}: ${slot.detail}` : `${slot.time} is available: ${slot.detail}`}
            >
              <span className="time">{slot.time}</span>
              <span className="status">
                {slot.status === 'available' ? 'Available' : 'Booked'}
              </span>
              <span className="detail">{slot.detail}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 3. Hiển thị các mẫu bệnh án thú cưng dưới dạng nghiên cứu trường hợp tĩnh hoặc ví dụ */}
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className='fs-1 fw-bold'>Case Studies</h2>
          <p>Explore real examples of pet medical cases and treatments from our veterinary practice.</p>
        </div>
        <div className="case-studies-grid">
          {caseStudiesData.map(study => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-header">
                <span className="pet-category">{study.petType}</span>
                <h3>{study.title}</h3>
              </div>
              <div className="pet-image">
                <img src={study.image} alt={study.title} />
              </div>
              <div className="case-study-content">
                <p>{study.description}</p>
                <div className="outcome">
                  <strong>Outcome:</strong> <span className="outcome-text">{study.outcome}</span>
                  <p><strong>Treatment:</strong> {study.treatment}</p>
                  <p><strong>Duration:</strong> {study.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="treatment-section">
          <h3>Our Treatment Approaches</h3>
          <div className="treatment-grid">
            {treatmentsData.map(treatment => (
              <div key={treatment.id} className="treatment-card">
                <div className="treatment-icon">{treatment.icon}</div>
                <h4>{treatment.title}</h4>
                <p>{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Our Success in Numbers</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="vet-services">
        <h3>Account Settings</h3>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h4>Privacy Settings</h4>
            <p>Manage your privacy preferences and control who can see your information.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔔</div>
            <h4>Notifications</h4>
            <p>Customize your notification preferences for updates and alerts.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h4>Payment Methods</h4>
            <p>Manage your payment methods and billing information.</p>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <h3>Need Help?</h3>
        <p>If you need assistance with your account or have any questions, our support team is here to help.</p>
        <button className="booking-button" onClick={handleBooking}>
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default VetProfile;