import React from "react";
import { useNavigate } from "react-router-dom";
import './css/work1.css'
import main_frozen from '../page2.0/Img/Img_frozen/common_f.jpg'
import main_Deh from '../page2.0/Img/Img_Dehydrated/Dehydrated_img.jpg'
import main_herbs from '../page2.0/Img/Img_herbs/Herbs_img.jpg'

export default function Work() {
  const navigate = useNavigate();

  const workData = [
    { src : main_frozen, title: "Frozen Fruits And Vegetables ",  link: "/Medica" },
    { src: main_Deh,title: "Dehydrated Fruits and vegetables powder", link: "/Agric" },
    { src: main_herbs, title: "Herbs And ayurvedic powder ",  link: "/Other" },
    ];

  return (
    <div id="portfolio" className="portfolio-section">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <div className="work-grid">
          {workData.map((work, index) => (
            <div
              key={index}
              className="work-card"
              onClick={() => navigate(work.link)}
            >
              <img src={work.src} alt={work.title} className="work-img" />
              <div className="layer">
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline hover & responsiveness styles */}
   <style>{`
  .portfolio-section {
    padding: 50px 20px;
    background: linear-gradient(1300deg, #8ffd8bff, #00ffe182);
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: clamp(1.5rem, 4vw, 2.5rem); /* responsive font */
    line-height: 1.2;
    word-wrap: break-word;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .work-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .work-card:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  }

  .work-img {
    width: 100%;
    display: block;
    border-radius: 10px;
    transition: transform 0.5s;
  }

  .work-card:hover .work-img {
    transform: scale(1.05);
  }

  .layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px; /* smaller base height for mobile */
    background: rgba(0,0,0,0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    transition: height 0.3s;
  }

  .work-card:hover .layer {
    height: 180px; /* reduced hover height */
  }

  /* Responsive for tablets */
  @media (max-width: 992px) {
    .work-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Responsive for mobile */
  @media (max-width: 600px) {
    .work-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }
    .layer {
      height: 100px;
      padding: 8px 15px;
    }
    .work-card:hover .layer {
      height: 140px;
    }
  }
`}</style>

    </div>
  );
}
