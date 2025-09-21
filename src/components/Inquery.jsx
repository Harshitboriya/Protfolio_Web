import React, { Component } from "react";

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
    console.log("Form submitted:", this.state.formData);
    this.setState({
      submitted: true,
      formData: { name: "", email: "", message: "" },
    });
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Inquiry Form</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you! We will reach out to you soon.
              </div>
            )}
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
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

              <div className="mb-3">
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

              <div className="mb-3">
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

              <button type="submit" className="btn btn-primary w-100">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
