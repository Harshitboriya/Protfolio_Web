import React from "react";
import Herbs from "../page2.0/Img/Img_herbs/Herbs_img.jpg"; // make sure path is correct

export default function HerbsProducts() {
  const products = [
    "Moringa Leaves",
    "Neem",
    "Ashwagandha",
    "Amla",
    "Satavari",
    "Silajit",
    "Tamarind Seeds",
    "Bringaraj",
    "Dried Orange Peels",
    "Pomegranate Peels",
    "Lemon Peels",
    "White Musli",
    "Sabja Seeds",
    "Chia Seeds",
    "Pumpkin Seeds",
    "Stevia Leaves",
    "Mint",
    "Hibiscus"
  ];

  return (
    <div
      id="portfolio"
      style={{
        position: "relative",
        padding: "50px",
        background: "#f8f9fa",
        overflow: "hidden"
      }}
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${Herbs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.2,
          zIndex: 0
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {/* Left: Image */}
        <div
          className="work"
          style={{
            flex: "1 1 400px",
            maxWidth: "400px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          }}
        >
          <img
            src={Herbs}
            alt="Herbs"
            style={{
              width: "100%",
              display: "block",
              transition: "transform 0.5s",
              borderRadius: "15px"
            }}
          />
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
            <h3 style={{ marginBottom: "10px" }}>Herbs And Ayurvedic Powder</h3>
            <p style={{ fontSize: "14px" }}>
              Natural and high-quality herbal powders for health and wellness.
            </p>
          </div>
        </div>

        {/* Right: Product List */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ marginBottom: "20px" }}>Our Products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "15px",
              maxHeight: "500px",
              overflowY: "auto",
              paddingRight: "5px"
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px 20px",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "transform 0.3s, background 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.background = "#e6f0ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                <span style={{ fontWeight: "500", color: "#333" }}>{product}</span>
                <span style={{ color: "#007bff", fontWeight: "bold" }}>→</span>
              </div>
            ))}
          </div>
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
