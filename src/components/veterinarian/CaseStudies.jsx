import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import veterinariansData from '../../data/veterinarians.json';
import '../../css/VetProfile.css';

const CaseStudies = () => {
  const navigate = useNavigate();
  const [vetData, setVetData] = useState(null);

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
    },
    {
      id: 3,
      title: "Emergency Treatment for Poisoned Parrot",
      petType: "Bird",
      description: "A rare African Grey Parrot was brought to our clinic after ingesting toxic houseplants. The bird showed signs of distress including difficulty breathing and lethargy. Our avian specialist team provided immediate supportive care including oxygen therapy, fluid administration, and specific antidotes. The bird was closely monitored for 48 hours and gradually recovered.",
      outcome: "Full recovery after intensive 48-hour care and ongoing monitoring",
      image: "https://images.unsplash.com/photo-1552191308-19c0e0779dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Emergency toxicology treatment with oxygen therapy and antidotes",
      duration: "48 hours intensive care"
    },
    {
      id: 4,
      title: "Dental Surgery for Rabbit with Malocclusion",
      petType: "Small Animal",
      description: "A 3-year-old Holland Lop rabbit presented with severe dental malocclusion causing difficulty eating and weight loss. The rabbit required specialized dental surgery to correct the overgrown teeth and restore proper jaw alignment. Post-operative care included a special diet and regular dental checkups.",
      outcome: "Improved eating ability and weight gain within 2 weeks",
      image: "https://images.unsplash.com/photo-1591355982336-00ae6f1de6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Dental surgery and corrective procedures for malocclusion",
      duration: "2 weeks recovery"
    },
    {
      id: 5,
      title: "Rehabilitation of Injured Sea Turtle",
      petType: "Reptile",
      description: "A rescuedLoggerhead sea turtle was brought to our marine veterinary facility with severe shell injuries from a boat strike. Our team performed complex shell repair surgery using specialized materials and provided long-term rehabilitation including wound care, nutritional support, and physical therapy. The turtle was eventually released back into the wild after 8 months of care.",
      outcome: "Successful rehabilitation and release back to natural habitat",
      image: "https://images.unsplash.com/photo-1544581005-09a3a8f4a7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Shell repair surgery and comprehensive rehabilitation program",
      duration: "8 months"
    },
    {
      id: 6,
      title: "Behavioral Modification for Aggressive Dog",
      petType: "Dog",
      description: "A 4-year-old German Shepherd was referred to our behavior clinic due to severe aggression toward other dogs and family members. Through a comprehensive behavior assessment, we developed a customized modification plan including positive reinforcement training, environmental management, and owner education. Regular follow-ups were conducted to monitor progress.",
      outcome: "Significant reduction in aggressive behaviors and improved family integration",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      treatment: "Behavioral modification program with positive reinforcement techniques",
      duration: "6 months"
    }
  ];

  // Function to find veterinarian by name (fuzzy matching)
  const findVeterinarianByName = (name) => {
    if (!name) return null;
    
    // Normalize the name for comparison
    const normalizedName = name.toLowerCase().trim();
    
    // Try exact match first
    let vet = veterinariansData.find(v => 
      v.name.toLowerCase() === normalizedName || 
      v.name.toLowerCase() === `dr. ${normalizedName}`
    );
    
    // If no exact match, try partial match
    if (!vet) {
      vet = veterinariansData.find(v => 
        v.name.toLowerCase().includes(normalizedName) ||
        normalizedName.includes(v.name.toLowerCase())
      );
    }
    
    return vet;
  };

  useEffect(() => {
    // Get user name from localStorage
    const savedUserName = localStorage.getItem('userName');
    
    if (savedUserName) {
      // Try to find matching veterinarian data
      const matchedVet = findVeterinarianByName(savedUserName);
      
      if (matchedVet) {
        setVetData(matchedVet);
      } else {
        // If no match found, show a message
        console.log("No matching veterinarian found for:", savedUserName);
      }
    }
  }, []);

  if (!vetData) {
    return (
      <div className="vet-container">
        <div className="no-data-message">
          <h2>No Veterinarian Data Found</h2>
          <p>Sorry, we couldn't find profile information for your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="vet-container">
      <div className="vet-profiles">
        <div className="vet-profile-card">
          <div className="profile-header">
            <h2>{vetData.name}</h2>
            <p>Medical Case Studies</p>
          </div>
        </div>
      </div>
      
      <div className="case-studies-intro">
        <h3>About Our Case Studies</h3>
        <p>
          This collection showcases real examples of pet medical cases treated by our veterinary practice. 
          Each case study demonstrates our approach to diagnosis, treatment, and patient care. 
          These examples highlight the diverse range of conditions we treat and the successful outcomes we achieve for our patients.
        </p>
        <p>
          Our case studies are selected to represent the breadth of veterinary medicine, from routine procedures to complex surgical interventions. 
          They illustrate our commitment to evidence-based medicine and continuous learning in the field of veterinary care.
        </p>
      </div>
      
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
      </div>
      
      <div className="research-section">
        <h3>Research & Publications</h3>
        <div className="research-content">
          <div className="research-item">
            <h4>Academic Contributions</h4>
            <p>
              Our practice actively contributes to the veterinary community through research and publication. 
              We regularly publish findings in peer-reviewed journals and present at national veterinary conferences.
            </p>
          </div>
          
          <div className="research-item">
            <h4>Continuing Education</h4>
            <p>
              Our veterinarians participate in ongoing education to stay current with the latest advances in veterinary medicine. 
              This ensures we provide the most effective treatments for our patients.
            </p>
          </div>
          
          <div className="research-item">
            <h4>Collaborative Studies</h4>
            <p>
              We collaborate with veterinary schools and research institutions on studies related to animal health and welfare. 
              These partnerships enhance our clinical capabilities and contribute to the advancement of veterinary science.
            </p>
          </div>
        </div>
      </div>
      
      <div className="methodology-section">
        <h3>Our Methodology</h3>
        <div className="methodology-content">
          <div className="methodology-steps">
            <div className="methodology-step">
              <h4>1. Comprehensive Assessment</h4>
              <p>Thorough evaluation of the patient's condition through physical examination, diagnostics, and history review.</p>
            </div>
            
            <div className="methodology-step">
              <h4>2. Collaborative Treatment Planning</h4>
              <p>Development of customized treatment plans in consultation with pet owners and specialists when needed.</p>
            </div>
            
            <div className="methodology-step">
              <h4>3. Evidence-Based Interventions</h4>
              <p>Implementation of treatments supported by scientific research and clinical experience.</p>
            </div>
            
            <div className="methodology-step">
              <h4>4. Continuous Monitoring</h4>
              <p>Ongoing assessment of patient progress and treatment adjustments as necessary.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;