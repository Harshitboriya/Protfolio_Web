import React, { useState } from 'react';
import './css/header.css';
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-static px-3 shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand ms-2" href="#/">
          <img
            src="https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Logo"
            className="logo"
          />
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto d-flex gap-3 header-links">
            <li className="nav-item"><a className="nav-link" href="#/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#/Certificat">Certificate</a></li>
            <li className="nav-item"><a className="nav-link" href="#/Page1">Vession</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Other Product
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#/Medica">Medical</a></li>
                <li><a className="dropdown-item" href="#/Agric">Agriculture</a></li>
                <li><a className="dropdown-item" href="#/Other">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <a href="#/inquiry">
            <button type="button" className="btn btn-primary btn-hover me-2">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
