import React from "react";
import './css/mainp.css';

export default function MainP() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Text */}
        <div className="hero-text">
          <h1 className="fade-in">
            We provide  <br />
            custom brand creation  <br />
            solutions<br />
            for your company
          </h1>
          <p className="fade-in delay-1">
            <strong>We Make It Possible</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, provident. Autem explicabo, aut sed voluptatum sint repellendus ex eum iure ratione soluta!
          </p>
          <a href="/learn-more" className="hero-btn fade-in delay-2">
            See More &rarr;
          </a>
        </div>
        

        {/* Right Image */}
        <div className="hero-image fade-in-right">
          <img 
            src={"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
            alt="Farmer with ship" 
          />
        </div>
      </div>
    </section>
  );
}
