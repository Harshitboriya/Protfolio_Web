import React, { useEffect, useState } from 'react';
import './css/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top px-3 shadow-sm"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.5)',
        color: scrolled ? '#000' : '#fff',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container-fluid">
        {/* Left - Brand */}
        <a className="navbar-brand ms-2" href="/" style={{ color: 'inherit' }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
            style={{ height: '50px', width: 'auto' }}
          />
        </a>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255,255,255,0.7)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center + Right */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto d-flex gap-3 header-links">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: 'inherit' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Certificat" style={{ color: 'inherit' }}>
                Certificate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Page1" style={{ color: 'inherit' }}>
                Vession
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'inherit' }}
              >
                Other Product
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Medica">
                    Medical
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Agric">
                    Agriculture
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Other">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <a href="/inquiry">
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
