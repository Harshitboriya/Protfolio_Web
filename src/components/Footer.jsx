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
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/lavish-patidar-a63032320/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-outline-light btn-sm fs-4"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/bharatexims_/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-outline-light btn-sm fs-4"
  >
    <i className="bi bi-instagram"></i>
  </a>
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
              <li>8, Market Yard Badnawar, Near Varco City Badnawar (MP), India (454660)</li>
              <li>bharatexims8@gmail.com</li>
              <li>+91 9174180598</li>
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
