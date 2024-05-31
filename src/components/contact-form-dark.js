import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import packageJson from "../../package.json";
import "./contact-form-dark.css";

const ContactFormDark = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "Support",
    message: "",
    termsAccepted: false,
  });
  const [formLoading, setFormLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    setFormLoading(true);
    e.preventDefault();
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/createContactFormSubmission`, {
        method: "POST",
        headers: {
          "api-version": "v1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          topic: formData.topic,
          message: formData.message,
          email: formData.email,
          phoneNumber: formData.phone,
          termsAccepted: formData.termsAccepted,
          websiteVersion: packageJson.version,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      window.alert(
        "Your message has been received, our team will get back to you within 3 business days!"
      );
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to send message");
    }
    setFormLoading(false);
  };

  return (
    <main
      className={`contact-form-dark-contact1 thq-section-padding ${props.rootClassName}`}
    >
      <div className="contact-form-dark-max-width thq-flex-row thq-section-max-width">
        <div className="contact-form-dark-section-title thq-flex-column">
          <Link to="/" className="">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="contact-form-dark-logo"
            />
          </Link>
          <span className="contact-form-dark-text thq-body-small">
            {props.content2}
          </span>
          <div className="contact-form-dark-content">
            <h2 className="contact-form-dark-text01 thq-heading-2">
              {props.heading}
            </h2>
            <span className="contact-form-dark-text02 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="contact-form-dark-content1">
            <div className="contact-form-dark-row">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form-dark-icon thq-icon-small"
              >
                <path
                  d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
              <span className="contact-form-dark-email thq-body-small">
                {props.email}
              </span>
            </div>
            <div className="contact-form-dark-row1">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form-dark-icon2 thq-icon-small"
              >
                <path
                  d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                  className=""
                ></path>
              </svg>
              <span className="contact-form-dark-phone thq-body-small">
                {props.phone}
              </span>
            </div>
            <div className="contact-form-dark-row2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form-dark-icon4 thq-icon-small"
              >
                <path
                  d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  className=""
                ></path>
              </svg>
              <span className="contact-form-dark-address thq-body-small">
                {props.address}
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="contact-form-dark-form thq-flex-column"
        >
          {/* Form inputs */}
          <div className="contact-form-dark-container">
            <div className="contact-form-dark-input">
              <label
                htmlFor="firstName"
                className="contact-form-dark-text03 thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required={true}
                placeholder="Enter your first name"
                className="contact-form-dark-text-input thq-input-dark"
              />
            </div>
            <div className="contact-form-dark-input1">
              <label
                htmlFor="lastName"
                className="contact-form-dark-text04 thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required={true}
                placeholder="Enter your last name"
                className="contact-form-dark-text-input1 thq-input-dark"
              />
            </div>
          </div>
          <div className="contact-form-dark-container1">
            <div className="contact-form-dark-input2">
              <label
                htmlFor="email"
                className="contact-form-dark-text05 thq-body-small"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={true}
                placeholder="Enter your email"
                className="contact-form-dark-text-input2 thq-input-dark"
              />
            </div>
            <div className="contact-form-dark-input3">
              <label
                htmlFor="phone"
                className="contact-form-dark-text06 thq-body-small"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required={true}
                placeholder="Enter your phone number"
                className="contact-form-dark-text-input3 thq-input-dark"
              />
            </div>
          </div>
          <div className="contact-form-dark-container2">
            <div className="contact-form-dark-input4">
              <label
                htmlFor="topic"
                className="contact-form-dark-text07 thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required={true}
                className="thq-select-dark"
              >
                <option value="Support">Support</option>
                <option value="ATMs">ATMs</option>
                <option value="Agent">Agent</option>
                <option value="Career">Career</option>
                <option value="Merchant">Merchant</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className="contact-form-dark-container3">
            <div className="contact-form-dark-input5">
              <label
                htmlFor="message"
                className="contact-form-dark-text08 thq-body-small"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Explain your request"
                className="contact-form-dark-textarea thq-input-dark"
              ></textarea>
            </div>
          </div>
          <div className="contact-form-dark-checkbox">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required={true}
              className="thq-checkbox"
            />
            <label
              htmlFor="termsAccepted"
              className="contact-form-dark-text09 thq-body-small"
            >
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form-dark-button thq-button-filled-dark"
          >
            {formLoading ? (
              <div className="loadingIndicator"></div>
            ) : (
              <span className="thq-body-small">{props.action}</span>
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

ContactFormDark.defaultProps = {
  address: "Lebanon, Tripoli, Ashir Dayeh Street",
  rootClassName: "",
  logoAlt: "image",
  action: "SUBMIT",
  logoSrc: "/cashover-1500h.png",
  content1: "Our team will get back to you within 3 business days",
  phone: "+961 81 350 616",
  heading: "CONTACT US",
  email: "support@cashover.money",
  content2: "Get in touch with us today!",
};

ContactFormDark.propTypes = {
  address: PropTypes.string,
  rootClassName: PropTypes.string,
  logoAlt: PropTypes.string,
  action: PropTypes.string,
  logoSrc: PropTypes.string,
  content1: PropTypes.string,
  phone: PropTypes.string,
  heading: PropTypes.string,
  email: PropTypes.string,
  content2: PropTypes.string,
};

export default ContactFormDark;
