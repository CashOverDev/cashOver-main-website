import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq-work-with-us.css'

const FAQWorkWithUs = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div
      className={`faq-work-with-us-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="faq-work-with-us-column">
        <span className="faq-work-with-us-text">{props.text}</span>
        <div className="faq-work-with-us-max-width thq-section-max-width">
          <div className="faq-work-with-us-container thq-flex-column">
            <div className="thq-flex-column thq-section-max-width">
              <div className="thq-divider-horizontal"></div>
              <div className="faq-work-with-us-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq-work-with-us-trigger"
                >
                  <p className="faq-work-with-us-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="faq-work-with-us-icons-container">
                    {!faq1Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon"
                        >
                          <path
                            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon02"
                        >
                          <path
                            d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq-work-with-us-container03">
                    <span className="thq-body-small">
                      <span className="">
                        To become a CashOver Agent, simply give us a call on
                        phone -
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="tel:+96181350616"
                        className="faq-work-with-us-link"
                      >
                        +961 81 350 616
                      </a>
                      <span className="">
                        {' '}
                        - or fill the contact form below. You will be asked some
                        questions, and if eligible, we will get back to you.
                      </span>
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-work-with-us-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq-work-with-us-trigger1"
                >
                  <p className="faq-work-with-us-faq2-question thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="faq-work-with-us-icons-container1">
                    {!faq2Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon04"
                        >
                          <path
                            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon06"
                        >
                          <path
                            d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="faq-work-with-us-container06">
                    <span className="thq-body-small">
                      <span className="">
                        To host an ATM, simply give us a call on phone -
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="tel:+961 81 350 616"
                        className="faq-work-with-us-link1"
                      >
                        +961 81 350 616
                      </a>
                      <span className="">
                        {' '}
                        - or fill the contact form below. You need to pass a set
                        of requirements before getting accepted.
                      </span>
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-work-with-us-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq-work-with-us-trigger2"
                >
                  <p className="faq-work-with-us-faq2-question1 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="faq-work-with-us-icons-container2">
                    {!faq3Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon08"
                        >
                          <path
                            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-work-with-us-icon10"
                        >
                          <path
                            d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="faq-work-with-us-container09">
                    <span className="thq-body-small">
                      How much money you make depends on several factors, like
                      volume processed, invoices processed and overall behavior.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
          <div className="faq-work-with-us-content thq-flex-column thq-section-max-width">
            <h2 className="faq-work-with-us-text08">{props.heading2}</h2>
            <p className="faq-work-with-us-text09">{props.content2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQWorkWithUs.defaultProps = {
  faq3Question: 'How much many can I make?',
  faq1Question: 'How can I become an Agent?',
  heading2: 'Still have a question?',
  text: 'FAQ',
  rootClassName: '',
  faq2Question: 'How can I host a CashOver ATM?',
  content2: 'Do not hesitate to contact us to answer your inquiries',
}

FAQWorkWithUs.propTypes = {
  faq3Question: PropTypes.string,
  faq1Question: PropTypes.string,
  heading2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  faq2Question: PropTypes.string,
  content2: PropTypes.string,
}

export default FAQWorkWithUs
