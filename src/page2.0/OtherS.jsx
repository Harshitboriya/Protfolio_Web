import React from "react";

export default function OtherS() {
  return (
    <div
      id="portfolio"
      style={{
        position: "relative",
        padding: "50px 0",
        overflow: "hidden",
        color: "#070606ff"
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589002771170-9692b81b05da?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.2, // low opacity
          zIndex: 0
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Other Services Will Add in Future
        </h1>
        <div
          className="workl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            justifyItems: "center"
          }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1571175419967-b8cff792febd?q=80&w=687&auto=format&fit=crop",
              title: "Medical",
              desc: "Providing top-notch healthcare services with experienced professionals."
            }
          ].map((work, index) => (
            <div
              key={index}
              className="work"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
              }}
            >
              <img
                src={work.img}
                alt={work.title}
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.5s",
                  borderRadius: "15px"
                }}
              />
              {/* Layer always visible */}
              <div
                className="layer"
                style={{
                  width: "100%",
                  height: "150px",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "0 0 15px 15px",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  padding: "20px",
                  textAlign: "center",
                  color: "#fff",
                  transition: "height 0.5s"
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{work.title}</h3>
                <p style={{ fontSize: "14px" }}>{work.desc}</p>
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
