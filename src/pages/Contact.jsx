import React from "react";
import "../App.css";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            name="email"
          />
          <textarea
            name="message"
            className="form-control"
            autoComplete="false"
            rows="10"
            placeholder="Enter your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
