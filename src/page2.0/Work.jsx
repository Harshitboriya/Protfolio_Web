import React from "react";
import { useNavigate } from "react-router-dom";

export default function Work() {
  const navigate = useNavigate();

  const workData = [
    {
      img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop",
      title: "Medical",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/Medica", // first image route
    },
    {
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop",
      title: "Agriculture",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/Agric", // second image route
    },
    {
      img: "https://images.unsplash.com/photo-1571175419967-b8cff792febd?q=80&w=687&auto=format&fit=crop",
      title: "Need to add",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/Other", // third image route
    },
  ];

  return (
    <div id="portfolio" style={{ padding: "50px 0", background: "#f8f9fa" }}>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Over Services</h1>
        <div
          className="workl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            justifyItems: "center",
            marginTop: "50px",
          }}
        >
          {workData.map((work, index) => (
            <div
              key={index}
              className="work"
              style={{
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
              onClick={() => navigate(work.link)} // navigate based on link
            >
              <img
                src={work.img}
                alt={work.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  display: "block",
                  transition: "transform 0.5s",
                }}
              />
              <div
                className="layer"
                style={{
                  width: "100%",
                  height: "150px",
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "0 0 10px 10px",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 20px",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "14px",
                  transition: "height 0.5s",
                }}
              >
                <h3 style={{ fontWeight: "500", marginBottom: "10px" }}>{work.title}</h3>
                <p>{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .work:hover img { transform: scale(1.05); }
        .work:hover .layer { height: 200px; }
      `}</style>
    </div>
  );
}
