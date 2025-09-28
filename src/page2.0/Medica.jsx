import React from "react";

export default function Medica() {
  const products = [
  {
    name: "Medical Equipment",
    img: "https://images.unsplash.com/photo-1758621518748-bde9e586ef9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "High-quality medical instruments for healthcare facilities."
  },
  {
    name: "Laboratory Equipment",
    img: "https://images.unsplash.com/photo-1758621518748-bde9e586ef9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Precise lab tools and devices for accurate analysis."
  },
  {
    name: "Surgical Tools",
    img: "https://images.unsplash.com/photo-1758621518748-bde9e586ef9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Professional surgical instruments for medical procedures."
  },
  {
    name: "Diagnostic Machines",
    img: "https://images.unsplash.com/photo-1758621518748-bde9e586ef9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Advanced diagnostic machines for accurate results."
  },
  {
    name: "Patient Care Equipment",
    img: "https://images.unsplash.com/photo-1758621518748-bde9e586ef9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Comfortable and safe equipment for patient care."
  }
];

  return (
    <div
      id="portfolio"
      style={{
        position: "relative",
        padding: "50px",
        background: "#f8f9fa"
      }}
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1950&auto=format&fit=crop')",
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
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop"
            alt="Medical"
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
            <h3 style={{ marginBottom: "10px" }}>Medical</h3>
            <p style={{ fontSize: "14px" }}>
              Providing top-notch healthcare services with experienced professionals.
            </p>
          </div>
        </div>

        {/* Right: Product List with images & descriptions */}
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
                  e.currentTarget.style.background = "#fff";
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ width: "60px", height: "60px", borderRadius: "10px", objectFit: "cover" }}
                />
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

      {/* Bottom: Video Section */}
      <div style={{ width: "100%", marginTop: "50px", textAlign: "center" }}>
        <h2>Product Video</h2>
        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
          <video width="100%" height="auto" controls style={{ borderRadius: "15px" }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
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
