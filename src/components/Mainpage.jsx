import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Mainpage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // <-- ensures animation happens every scroll
    });
    AOS.refresh(); // refresh AOS calculations
  }

  componentDidUpdate() {
    AOS.refresh(); // refresh again if component updates
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            <div className="col-md-6" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1606445095898-16c730da5732?q=80&w=2080&auto=format&fit=crop"
                alt="Left Side"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 text-white" data-aos="fade-left">
              <h2>Our Amazing Feature</h2>
              <p>
                This content will animate every time you scroll to this section.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
