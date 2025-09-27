import React, { useRef, useEffect, useState } from "react";
import "./css/Certificat.css";

export default function Certificat() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // Trigger animation
          observer.unobserve(sectionRef.current); // Stop observing
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const logos = [
    {
      src: "https://krshakexports.com/wp-content/uploads/2022/02/MSME_certificate_logo-150x150.png",
      alt: "MSME Certificate",
      link: "https://msme.gov.in/"
    },
    {
      src: "https://krshakexports.com/wp-content/uploads/2022/02/FSSAi-logo-image-1-150x150.png",
      alt: "FSSAI Logo",
      link: "https://www.fssai.gov.in"
    },
    {
      src: "https://krshakexports.com/wp-content/uploads/2022/02/Spices_Board_of_India-Logo-1-150x150.png",
      alt: "Spices Board of India",
      link: "https://www.indianspices.com/"
    },
    {
      src: "https://krshakexports.com/wp-content/uploads/2022/02/FIEO-logo-image-1-150x150.png",
      alt: "FIEO Logo",
      link: null
    }
  ];

  return (
    <section ref={sectionRef} className="certificate-container py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Certifications</h2>
        <div className="row g-4 justify-content-center align-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 text-center">
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`img-fluid certificate-logo ${visible ? "visible" : ""}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`img-fluid certificate-logo ${visible ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
