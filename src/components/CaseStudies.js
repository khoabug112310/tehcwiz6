import React from 'react';

const CaseStudies = () => {
  // Mock data for case studies
  const caseStudies = [
    {
      id: 1,
      title: "Successful Hip Surgery on Golden Retriever",
      description: "A 6-year-old Golden Retriever presented with severe hip dysplasia. After corrective surgery and rehabilitation, the dog made a full recovery and returned to normal activity levels.",
      outcome: "Full recovery after 3 months"
    },
    {
      id: 2,
      title: "Treatment of Feline Diabetes",
      description: "A 12-year-old domestic cat was diagnosed with diabetes. Through insulin therapy and dietary changes, the cat's condition was managed successfully.",
      outcome: "Condition managed successfully with ongoing treatment"
    },
    {
      id: 3,
      title: "Emergency Treatment for Poisoned Dog",
      description: "A 2-year-old Beagle ingested chocolate and showed signs of poisoning. Immediate treatment including induced vomiting and activated charcoal saved the dog's life.",
      outcome: "Full recovery within 24 hours"
    }
  ];

  return (
    <div>
      <h2>Veterinary Case Studies</h2>
      <p>Examples of pet medical cases and treatments:</p>
      
      <div className="case-studies">
        {caseStudies.map(study => (
          <div key={study.id} className="case-study">
            <h3>{study.title}</h3>
            <p>{study.description}</p>
            <p><strong>Outcome:</strong> {study.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;