import React from "react";
import './css/whyus.css';
import Why from '../components/Photo/Why.jpg'
export default function WhyUs() {
  const points = [
   
"Quality Focus: We adhere to stringent quality standards, ensuring our products meet international regulations and exceed client expectations.",
"Reliable Supply Chain: Our direct connection with farmers and efficient logistics ensure timely and efficient delivery of products.",
"Customized Solutions: We work closely with our clients to understand their specific requirements and provide tailored solutions."

  ];

  return (
    <section className="whyus-section">
      <div className="whyus-container">
        {/* Left Image */}
        <div className="whyus-image">
          <img 
            src={Why}
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
