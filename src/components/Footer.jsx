import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
     
     <>
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Logo / Company Name */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5>MyPortfolio 21/09</h5>
            <p className="mb-0">© 2025 All Rights Reserved</p>
          </div>

          {/* Center: Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <a href="#home" className="text-white mx-2 text-decoration-none">India</a>
            <a href="#about" className="text-white mx-2 text-decoration-none">USA</a>
            <a href="#projects" className="text-white mx-2 text-decoration-none">Japan</a>
            <a href="#contact" className="text-white mx-2 text-decoration-none">Russia</a>
          </div>

          {/* Right: Social Icons */}
          <div className="col-md-4 text-center text-md-end">
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

        </div>
      </div>
      </div>
      

    </>

   
    )
  }
}

  