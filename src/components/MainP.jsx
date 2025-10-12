import React from "react";
import './css/mainp.css';
import mainI from '../components/Photo/main.jpg'


export default function MainP() {
  return (
 <section
  className="hero-section"
  style={{
    // backgroundImage: `linear-gradient(rgba(213, 252, 220, 0.69), rgba(6, 66, 79, 1)), url(${mainI})`,
   
  }}
>

      <div className="hero-container">
        {/* Left Text */}
        <div className="hero-text">
          <h1 className="fade-in">
            Welcome to Bharat Exims<br/>
          </h1>
          <p className="fade-in delay-1">
            <strong>Connecting the Richness of Central India to the World</strong><br/>

At Bharat Exims, we're passionate about delivering the finest quality products, sourced directly from the heart of Central India. Our journey began with a vision to empower local farmers and manufacturers, while providing our global clients with the best products that meet their specific need</p>
          <a href="/learn-more" className="hero-btn fade-in delay-2">
            See More &rarr;
          </a>
        </div>
        

        {/* Right Image */}
        <div className="hero-image fade-in-right">
          <img 
            // src={"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
            src={mainI}
            alt="Farmer with ship" 
          />
        </div>
      </div>
    </section>
  );
}
