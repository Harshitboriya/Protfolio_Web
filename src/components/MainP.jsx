import React from "react";
import './css/mainp.css'; // We'll create this CSS

// import HeroImg from './1b39b759-5247-4323-adba-a9797f308925.png'; // your uploaded image

export default function MainP() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Text */}
        <div className="hero-text">
          <h1>
            We  <br />
            Exporting <br />
            From The <br />
            Farmers and Medica
          </h1>
          <p>
            <strong>WE Make  Posibil </strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, provident. Autem explicabo, aut sed voluptatum sint repellendus ex eum iure ratione soluta! Consectetur.
          
          </p>
          <a href="/learn-more" className="hero-btn">
            See More  &rarr;
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Farmer with ship" />
        </div>
      </div>
    </section>
  );
}
