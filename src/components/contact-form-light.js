import React, { useState } from "react";
import PropTypes from "prop-types";
import packageJson from '../../package.json';
import "./contact-form-light.css";

const ContactFormLight = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "Support", // Default topic
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://us-central1-cashover-staging.cloudfunctions.net/routes-createContactFormSubmission",
        {
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
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      window.alert(
        "Your message has been received, our team will get back to you within 3 business days!"
      );
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to send message");
    }
  };

  return (
    <main
      id="contactForm"
      className={`contact-form-light-contact11 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form-light-max-width thq-section-max-width">
        <div className="contact-form-light-section-title thq-card">
          <span 
          className="thq-body-small">{props.content2}</span>
          <div className="contact-form-light-content">
            <h2 className="contact-form-light-text01 thq-heading-2">
              {props.heading1}
            </h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-form-light-content1">
          <form
            className="contact-form-light-form thq-card"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-light-container">
              <div className="contact-form-light-input">
                <label htmlFor="contact-form-9-name" className="thq-body-small">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required={true}
                  className="contact-form-light-text-input thq-input"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-light-input1">
                <label htmlFor="contact-form-9-name" className="thq-body-small">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required={true}
                  className="contact-form-light-text-input1 thq-input"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-form-light-container">
              <div className="contact-form-light-input2">
                <label htmlFor="email" className="thq-body-small">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  className="thq-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-light-input2">
                <label htmlFor="phone" className="thq-body-small">
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={true}
                  className="contact-form-light-text-input1 thq-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="contact-form-light-container1">
              <div className="contact-form-light-input3">
                <label
                  htmlFor="contact-form-9-options"
                  className="thq-body-small"
                >
                  Choose your topic
                </label>
                <select
                  id="topic"
                  className="thq-select"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required={true}
                >
                  <option value="Support" className="">
                    Support
                  </option>
                  <option value="ATMs" className="">
                    ATMs
                  </option>
                  <option value="Agent" className="">
                    Agent
                  </option>
                  <option value="Career" className="">
                    Career
                  </option>
                  <option value="Merchant" className="">
                    Merchant
                  </option>
                  <option value="Business" className="">
                    Business
                  </option>
                </select>
              </div>
            </div>
            <div className="contact-form-light-input4">
              <label
                htmlFor="contact-form-9-message"
                className="thq-body-small"
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
                className="contact-form-light-textarea thq-input"
              ></textarea>
            </div>
            <div className="contact-form-light-checkbox">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required={true}
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-9-check" className="thq-body-small">
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form-light-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
          <div className="contact-form-light-content2 thq-card">
            <div className="contact-form-light-row thq-flex-row">
              <div className="contact-form-light-content3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form-light-icon"
                >
                  <path
                    d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                    className=""
                  ></path>
                </svg>
                <div className="contact-form-light-contact-info">
                  <h3 className="contact-form-light-text09 thq-heading-3">
                    Email
                  </h3>
                  <a
                    href="mailto:contactus@overlab.io?subject="
                    className="contact-form-light-email thq-body-small"
                  >
                    {props.email}
                  </a>
                </div>
              </div>
              <div className="contact-form-light-content4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form-light-icon2"
                >
                  <path
                    d="M981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
                    className=""
                  ></path>
                </svg>
                <div className="contact-form-light-contact-info1">
                  <h3 className="contact-form-light-text10 thq-heading-3">
                    Phone
                  </h3>
                  <a
                    href="tel:+96181350616"
                    className="contact-form-light-phone thq-body-small"
                  >
                    {props.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-light-row1 thq-flex-row">
              <div className="contact-form-light-content5">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form-light-icon4"
                >
                  <path
                    d="M512 213.333c68.651 0 133.12 26.197 181.504 73.813 48.043 47.232 74.496 110.037 74.496 176.64s-26.453 129.28-74.453 176.597l-181.547 178.517-181.504-178.603c-48-47.232-74.453-109.909-74.453-176.597s26.453-129.365 74.453-176.683c48.427-47.488 112.939-73.685 181.504-73.685M512 128c-87.339 0-174.763 32.768-241.365 98.347-133.291 131.157-133.291 343.765 0 474.923l241.365 237.355 241.365-237.44c133.291-131.072 133.291-343.723 0-474.837-66.603-65.579-153.984-98.347-241.365-98.347z"
                    className=""
                  ></path>
                  <path
                    d="M512 362.624c28.501 0 55.296 11.093 75.435 31.189 41.643 41.643 41.643 109.312 0 150.912-20.181 20.139-46.933 31.189-75.435 31.189s-55.253-11.093-75.435-31.189c-41.643-41.643-41.643-109.312 0-150.912 20.181-20.096 46.976-31.189 75.435-31.189M512 319.957c-38.229 0-76.459 14.592-105.6 43.691-58.325 58.325-58.325 152.917 0 211.243 29.184 29.184 67.328 43.691 105.6 43.691s76.459-14.592 105.6-43.691c58.283-58.325 58.283-152.917 0-211.243-29.141-29.141-67.371-43.691-105.6-43.691z"
                    className=""
                  ></path>
                </svg>
                <div className="contact-form-light-contact-info2">
                  <h3 className="contact-form-light-text11 thq-heading-3">
                    Office
                  </h3>
                  <span className="thq-body-small">{props.address}</span>
                </div>
              </div>
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="contact-form-light-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

ContactFormLight.defaultProps = {
  content2: "Get in touch with us today!",
  address: "Lebanon, Tripoli, Ashir Dayeh Street",
  imageAlt1: "image",
  phone: "+961 81 350 616",
  content1: "Our team will get back to you within 3 business days",
  imageSrc: "cbe1a1f7-849f-4747-a82a-71fc226cdd4e",
  heading1: "REACH OUT TO US",
  imageAlt: "image",
  email: "support@cashover.money",
  rootClassName: "",
  imageSrc1: "/cashover-200w.png",
  action: "SUBMIT",
};

ContactFormLight.propTypes = {
  content2: PropTypes.string,
  address: PropTypes.string,
  imageAlt1: PropTypes.string,
  phone: PropTypes.string,
  content1: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  email: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  action: PropTypes.string,
};

export default ContactFormLight;
