import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Factory from "../components/Video/Factory.mp4";
import Herbs from "../page2.0/Img/Img_herbs/Herbs_img.jpg"; // make sure path is correct

export default class Mainpage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <div
        style={{
            backgroundImage: `linear-gradient(rgba(114, 175, 147, 0.73), rgba(255, 255, 255, 0.87)),url(${Herbs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>

        {/* Centered Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center", // vertical center
          }}
        >
          <div className="row align-items-center w-100">
            {/* Left Video - 60% */}
            <div
              className="col-12 col-md-7 mb-4 mb-md-0"
              data-aos="fade-right"
            >
              <video
                src={Factory}
                autoPlay
                loop
                muted
                playsInline
                className="img-fluid rounded"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  borderRadius: "15px",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            {/* Right Content - 40% */}
            <div
              className="col-12 col-md-5 text-white text-center text-md-start"
              data-aos="fade-left"
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                Your Trusted Partner
              </h2>
              <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
                Whether you're looking for customized solutions or large-scale
                supplies, we're committed to delivering exceptional quality and
                service. Our team is dedicated to understanding your needs and
                providing tailored solutions that exceed your expectations.
              </p>
              <button className="btn btn-primary btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
