import React from 'react';
import caseStudiesData from '../../data/caseStudies.json';
import treatmentsData from '../../data/treatments.json';
import '../../css/CaseStudies.css';

const CaseStudies = () => {
  // Statistics for the stats section
  const stats = [
    { value: "500+", label: "Successful Surgeries" },
    { value: "98%", label: "Patient Recovery Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="case-studies-container">
      <div className="case-studies-header">
        <h2>Veterinary Case Studies</h2>
        <p>Explore real examples of pet medical cases and treatments from our veterinary practice.</p>
      </div>

      <div className="case-studies-intro">
        <h3>Learning from Experience</h3>
        <p>Our case studies showcase the diverse medical conditions we've successfully treated and the innovative approaches we've used. Each case represents our commitment to providing the highest quality veterinary care through evidence-based medicine and compassionate treatment.</p>
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
  );
};

export default CaseStudies;