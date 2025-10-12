import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/page1.css';
import main_frozen from '../page2.0/Img/Img_frozen/common_f.jpg';
import main_Deh from '../page2.0/Img/Img_Dehydrated/Dehydrated_img.jpg';
import main_herbs from '../page2.0/Img/Img_herbs/Herbs_img.jpg';
import { href, Link } from 'react-router-dom';

export default function Page1() {
  const slides = [
    { img: main_frozen,title: "Frozen Fruits And Vegetables" },
    { img: main_Deh, title: "Dehydrated Fruits And Vegetables Powder" },
    { img: main_herbs, title: "Herbs And Ayurvedic Powders" }
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide" style={{ height: '100vh' }}>
      
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : undefined}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner" style={{ height: '100vh' }}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`} style={{ height: '100vh', position: 'relative' }}>
            
            {/* Background blurred image */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(10px) brightness(0.3)',
                zIndex: 1,
              }}
            ></div>

            {/* Main center image */}
            <img
              src={slide.img}
              alt={`Slide ${idx + 1}`}
              style={{
                width: '60%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                borderRadius: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
              }}
            />

            {/* Caption at bottom */}
            <div
              className="carousel-caption d-block"
              style={{
                position: 'absolute',
                bottom: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                textAlign: 'center',
                background: 'rgba(0,0,0,0.5)',
                padding: '15px 25px',
                borderRadius: '10px',
                color: '#fff',
                maxWidth: '80%',
              }}
            >
              <h2 style={{ fontSize: '30px', fontWeight: '700', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
}
