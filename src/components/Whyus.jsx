import React from "react";
import './css/whyus.css';

export default function WhyUs() {
  const points = [
    "Trusted global trading partner",
    "High-quality products and services",
    "Customized solutions for every client",
    "Sustainable and eco-friendly practices",
    "Experienced and professional team",
    "Fast and reliable delivery worldwide"
  ];

  return (
    <section className="whyus-section">
      <div className="whyus-container">
        {/* Left Image */}
        <div className="whyus-image">
          <img 
            src="https://images.unsplash.com/photo-1709136059789-d61700284d5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Farmer or Product"
          />
        </div>

        {/* Right Content */}
        <div className="whyus-content">
          <h2 className="fade-in">Why Choose Us?</h2>
          <p className="fade-in delay-1">
            We offer exceptional solutions and services for our clients. Here’s why businesses trust us:
          </p>
          <ul>
            {points.map((point, index) => (
              <li key={index} className={`fade-in delay-${index + 2}`}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
