import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          padding: "50px 0",
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

        {/* Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="row align-items-center">
            {/* Left Image */}
            <div
              className="col-12 col-md-6 mb-4 mb-md-0"
              data-aos="fade-right"
            >
              <img
                src="https://images.unsplash.com/photo-1606445095898-16c730da5732?q=80&w=2080&auto=format&fit=crop"
                alt="Left Side"
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Right Content */}
            <div className="col-12 col-md-6 text-white text-center text-md-start" data-aos="fade-left">
              <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                Our Amazing Feature
              </h2>
              <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
                This content will animate every time you scroll to this section.
              </p>
              <button className="btn btn-primary btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
