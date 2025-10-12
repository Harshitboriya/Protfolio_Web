import React from "react";
import common_f from "../page2.0/Img/Img_frozen/common_f.jpg";
import main_f from "../page2.0/Img/Img_frozen/main_f.jpg"


export default function Medica() {
  const products = [
    { name: "Green Peas", src: main_f },
    { name: "Green Chana", src: main_f },
    { name: "Diced Carrot", src:main_f },
    { name: "Drumstick", src: main_f },
    { name: "Sweet Corn", src: main_f },
    { name: "Mango", src: main_f },
    { name: "Custard Apple", src: main_f },
    { name: "Strawberry", src:main_f },
    { name: "Raspberry", src:main_f },
    { name: "Jamun", src: main_f },
    { name: "Spinach", src: main_f },
  ];
  return (
    <div
      id="portfolio"
      style={{
        position: "relative",
        padding: "50px",
        background: "#deffcf6c"
      }}
    >
      {/* Background image */}
      <div
        style={{
         backgroundImage: `url(${main_f})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity:0.1,
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
            boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)"
          }}
        >
          <img
            src={common_f}
            alt="Medical"
            style={{
            height: "100% ",
              display: "block",
              transition: "transform 0.5s",
              borderRadius: "15px",
              paddingTop:"20px",
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
              color: "#ffffffff",
              transition: "height 0.5s"
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Frozen Fruits And Vegetables</h3>
            <p style={{ fontSize: "14px" }}>
              {/* Providing top-notch healthcare services with experienced professionals. */}
            </p>
          </div>
        </div>

        {/* Right: Product List with images & descriptions */}
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ marginBottom: "20px",color: "#000000ff", }}>Our Products</h2>
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
                  gap: "15px",
                  padding: "10px 15px",
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
                  e.currentTarget.style.background = "#ffffffff";
                }}
              >
               
                <div>
                  <div style={{ fontWeight: "600", color: "#333" }}>{product.name}</div>
                  <div style={{ fontSize: "12px", color: "#555" }}>{product.desc}</div>
                </div>
                <span style={{ color: "#007bff", fontWeight: "bold", marginLeft: "auto" }}>→</span>
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
