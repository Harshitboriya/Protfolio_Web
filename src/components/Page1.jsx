import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/page1.css';

export default function Page1() {
  // Array of slides
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "First Slide Label",
      desc: "Some representative placeholder content for the first slide."
    },
    {
      img: "https://images.unsplash.com/photo-1606445095898-16c730da5732?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Second Slide Label",
      desc: "Some representative placeholder content for the second slide."
    },
    {
      img: "https://images.unsplash.com/photo-1741851374582-79f4ac123442?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Third Slide Label",
      desc: "Some representative placeholder content for the third slide."
    }
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
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
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img
              src={slide.img}
              className="d-block w-100"
              style={{ height: '100vh', objectFit: 'cover', objectPosition: 'center' }}
              alt={`Slide ${idx + 1}`}
            />
            <div className="carousel-caption d-block text-shadow">
              <h5>{slide.title}</h5>
              <p>{slide.desc}</p>
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
