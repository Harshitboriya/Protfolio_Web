import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import "./css/Inquriy.css"; // We'll add animation styles here

export default class Inquiry extends Component {
  state = {
    formData: { name: "", email: "", message: "" },
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state.formData;

    // EmailJS send
    emailjs
      .send(
        "service_568gbue", // replace with your EmailJS service ID
        "template_jjv2xtu", // replace with your EmailJS template ID
        { name, email, message },
        "Y5RaPDVEzzgMs3VYp" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          this.setState({
            submitted: true,
            formData: { name: "", email: "", message: "" },
          });
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Oops! Something went wrong. Try again.");
        }
      );
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="container my-5 inquiry-form">
        <h2 className="text-center mb-4 animate-title">Inquiry Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {submitted && (
              <div className="alert alert-success animate-alert" role="alert">
                Thank you! We will reach out to you soon.
              </div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 animate-input">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3 animate-input">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="mb-3 animate-input">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 animate-button">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
