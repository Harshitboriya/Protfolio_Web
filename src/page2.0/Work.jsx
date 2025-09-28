import React from "react";
import { useNavigate } from "react-router-dom";
import './css/work1.css'

export default function Work() {
  const navigate = useNavigate();

  const workData = [
    { img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop", title: "Medical", desc: "Lorem ipsum dolor sit amet.", link: "/Medica" },
    { img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop", title: "Agriculture", desc: "Lorem ipsum dolor sit amet.", link: "/Agric" },
    { img: "https://images.unsplash.com/photo-1571175419967-b8cff792febd?q=80&w=687&auto=format&fit=crop", title: "Other", desc: "Lorem ipsum dolor sit amet.", link: "/Other" },
    { img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop", title: "Medical", desc: "Lorem ipsum dolor sit amet.", link: "/Medica" },
    { img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop", title: "Agriculture", desc: "Lorem ipsum dolor sit amet.", link: "/Agric" },
    { img: "https://images.unsplash.com/photo-1571175419967-b8cff792febd?q=80&w=687&auto=format&fit=crop", title: "Other", desc: "Lorem ipsum dolor sit amet.", link: "/Other" },
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
              <img src={work.img} alt={work.title} className="work-img" />
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
          background: linear-gradient(1300deg, #baffb8ff, #ffcdcdff);
        }
        .section-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2rem;
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
          height: 150px;
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
          height: 200px;
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
          }
          .section-title {
            font-size: 1.6rem;
          }
          .layer {
            font-size: 14px;
            padding: 8px 15px;
          }
        }
      `}</style>
    </div>
  );
}
