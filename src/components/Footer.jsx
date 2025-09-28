import React from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/company', label: 'Our Company' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const handleSocialClick = (platform) => {
    alert(`Redirect to ${platform} (not implemented yet)`);
  };

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Logo & About */}
          <div className="col-md-3 mb-4">
            <h5>MyPortfolio</h5>
            <p>Your trusted partner in providing quality solutions.</p>
            <div className="d-flex gap-3">
              <button onClick={() => handleSocialClick('Facebook')} className="btn btn-outline-light btn-sm"><i className="bi bi-facebook"></i></button>
              <button onClick={() => handleSocialClick('Twitter')} className="btn btn-outline-light btn-sm"><i className="bi bi-twitter"></i></button>
              <button onClick={() => handleSocialClick('LinkedIn')} className="btn btn-outline-light btn-sm"><i className="bi bi-linkedin"></i></button>
              <button onClick={() => handleSocialClick('Instagram')} className="btn btn-outline-light btn-sm"><i className="bi bi-instagram"></i></button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-light text-decoration-none">{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><button onClick={() => handleSocialClick('Privacy Policy')} className="btn btn-link text-light p-0">Privacy Policy</button></li>
              <li><button onClick={() => handleSocialClick('Terms of Service')} className="btn btn-link text-light p-0">Terms of Service</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Trade Street, Global City, 12345</li>
              <li>contact@myportfolio.com</li>
              <li>+1 (234) 567-8900</li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-4 pt-3 border-top border-secondary">
          &copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
