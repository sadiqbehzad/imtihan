
  
  
  
import React from "react";
import "../comparison/comparison.css";
import Button from '../button/Button';

const Comparison = () => {
  return (
    <section className="comparisonSection">
    <div className="comparison-container">
      <div className="text-container">
        <div className="comparisonTitle">
          <h1 className="title-why-different">WHY WE ARE DIFFERENT?</h1>
        </div>
        <div className="comparisonMainText">
          <p className="text-why-different">
            Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis
            aenean diam. Quisque tincidunt. Vitae elit lacus lobortis aenean
            diam. Quisque tincidunt.
          </p>
          <div className="comparisonButton">
            <Button label="CONTACT US" />
          </div>
        </div>
      </div>
      
      <div className="white-container">
        <h3 className="">TRADITIONAL CONSTRUCTION MANAGEMENT</h3>
        <ul style={{ listStyleType: 'square' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>Lorem ipsum dolor sit amet consectetur.</li>
          ))}
        </ul>
      </div>

      <div className="dark-container">
        <h3 className="">COLLEGIUM CONSTRUCTION MANAGEMENT</h3>
        <ul style={{ listStyleType: 'square' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>Lorem ipsum dolor sit amet consectetur.</li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
};

export default Comparison;
