import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import './css/footer.css'; // We'll create this CSS

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Logo / Company Name */}
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="mb-1">MyPortfolio</h5>
            <small>© 2025 All Rights Reserved</small>
          </div>

          {/* Center: Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <nav className="d-flex justify-content-center flex-wrap">
              <a href="#home" className="text-white mx-2 my-1 text-decoration-none">India</a>
              <a href="#about" className="text-white mx-2 my-1 text-decoration-none">USA</a>
              <a href="#projects" className="text-white mx-2 my-1 text-decoration-none">Japan</a>
              <a href="#contact" className="text-white mx-2 my-1 text-decoration-none">Russia</a>
            </nav>
          </div>

          {/* Right: Social Icons */}
          <div className="col-md-4 text-center text-md-end">
            <a href="https://facebook.com" className="text-white mx-2 social-icon">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2 social-icon">
              <i className="bi bi-twitter fs-5"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2 social-icon">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href="https://instagram.com" className="text-white mx-2 social-icon">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
