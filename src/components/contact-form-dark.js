import React from 'react'

import PropTypes from 'prop-types'

import './contact-form-dark.css'

const ContactFormDark = (props) => {
  return (
    <main
      className={`contact-form-dark-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form-dark-max-width thq-flex-row thq-section-max-width">
        <div className="contact-form-dark-section-title thq-flex-column">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="contact-form-dark-logo"
          />
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
        <form className="contact-form-dark-form thq-flex-column">
          <div className="contact-form-dark-container">
            <div className="contact-form-dark-input">
              <label
                htmlFor="contact-form-8-first-name"
                className="contact-form-dark-text03 thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-8-first-name"
                placeholder="Enter your first name"
                className="contact-form-dark-text-input thq-input"
              />
            </div>
            <div className="contact-form-dark-input1">
              <label
                htmlFor="contact-form-8-last-name"
                className="contact-form-dark-text04 thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-8-last-name"
                placeholder="Enter your last name"
                className="contact-form-dark-text-input1 thq-input"
              />
            </div>
          </div>
          <div className="contact-form-dark-container1">
            <div className="contact-form-dark-input2">
              <label
                htmlFor="contact-form-8-email"
                className="contact-form-dark-text05 thq-body-small"
              >
                Email
              </label>
              <input
                type="text"
                id="contact-form-8-email"
                required="true"
                placeholder="Enter your email"
                className="contact-form-dark-text-input2 thq-input"
              />
            </div>
            <div className="contact-form-dark-input3">
              <label
                htmlFor="contact-form-8-phone"
                className="contact-form-dark-text06 thq-body-small"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="contact-form-8-phone"
                placeholder="Enter your phone number"
                className="contact-form-dark-text-input3 thq-input"
              />
            </div>
          </div>
          <div className="contact-form-dark-container2">
            <div className="contact-form-dark-input4">
              <label
                htmlFor="contact-form-8-options"
                className="contact-form-dark-text07 thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-8-options"
                placeholder="Select one"
                className="thq-select-custom"
              >
                <option value="Option 1" className="">
                  Option 1
                </option>
                <option value="Option 1" className="">
                  Customer service
                </option>
                <option value="Option 1" className="">
                  Option 1
                </option>
                <option value="Option 1" className="">
                  Option 1
                </option>
                <option value="Option 2" className="">
                  Finance
                </option>
                <option value="Option 2" className="">
                  Option 2
                </option>
                <option value="Option 2" className="">
                  Option 2
                </option>
                <option value="Option 2" className="">
                  Option 2
                </option>
                <option value="Option 3" className="">
                  Option 3
                </option>
                <option value="Option 3" className="">
                  Option 3
                </option>
                <option value="Option 3" className="">
                  Feature request
                </option>
                <option value="Option 3" className="">
                  Option 3
                </option>
              </select>
            </div>
          </div>
          <div className="contact-form-dark-container3">
            <div className="contact-form-dark-input5">
              <label
                htmlFor="contact-form-8-options"
                className="contact-form-dark-text08 thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-8-message"
                rows="3"
                placeholder="Explain your request"
                className="contact-form-dark-textarea thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form-dark-checkbox">
            <input
              type="checkbox"
              id="contact-form-8-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-8-check"
              className="contact-form-dark-text09 thq-body-small"
            >
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form-dark-button thq-button-filled"
          >
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </main>
  )
}

ContactFormDark.defaultProps = {
  address: 'Lebanon, Tripoli, Boulevard',
  rootClassName: '',
  logoAlt: 'image',
  action: 'SUBMIT',
  logoSrc: '/cashover-1500h.webp',
  content1: 'Our team will get back to you within 24 hrs',
  phone: '+961 81 350 616',
  heading: 'CONTACT US',
  email: 'contactus@overlab.io',
  content2: 'Get in touch with us today!',
}

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
}

export default ContactFormDark
