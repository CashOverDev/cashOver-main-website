import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq-merchant.css'

const FAQMerchant = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div className={`faq-merchant-faq8 ${props.rootClassName} `}>
      <div className="faq-merchant-box">
        <span className="faq-merchant-text">{props.text}</span>
        <div className="faq-merchant-max-width thq-section-max-width">
          <div className="faq-merchant-container thq-flex-column">
            <div className="thq-flex-column thq-section-max-width">
              <div className="thq-divider-horizontal"></div>
              <div className="faq-merchant-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq-merchant-trigger"
                >
                  <p className="faq-merchant-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="faq-merchant-icons-container">
                    {!faq1Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon"
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
                          className="faq-merchant-icon02"
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
                  <div className="faq-merchant-container03">
                    <span className="thq-body-small">
                      Becoming a CashOver Merchant is pretty easy. Tap on create
                      account at the top of the screen or inside the menu
                      button. From the sign up page, tap Merchant. Follow the
                      instructions and you are ready to start selling and
                      receiving money.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-merchant-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq-merchant-trigger1"
                >
                  <p className="faq-merchant-faq2-question thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="faq-merchant-icons-container1">
                    {!faq2Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon04"
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
                          className="faq-merchant-icon06"
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
                  <div className="faq-merchant-container06">
                    <span className="thq-body-small">
                      <span className="">
                        For info about fees and our services, tap
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <Link
                        to="/cash-over-fees"
                        className="faq-merchant-navlink"
                      >
                        here
                      </Link>
                      <span className="">.</span>
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-merchant-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq-merchant-trigger2"
                >
                  <p className="faq-merchant-faq2-question1 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="faq-merchant-icons-container2">
                    {!faq3Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon08"
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
                          className="faq-merchant-icon10"
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
                  <div className="faq-merchant-container09">
                    <span className="thq-body-small">
                      CashOver Merchants benefit from secure and efficient
                      payment processing by scanning QR codes for USDT, USD, and
                      LBP transactions. The platform enables detailed income
                      pattern analysis, reduces theft risk by securing funds as
                      e-money, and offers low-fee withdrawals. Additionally,
                      merchants can create and manage product lists and assign
                      employees to handle payments on their behalf.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-merchant-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="faq-merchant-trigger3"
                >
                  <p className="faq-merchant-faq2-question2 thq-body-large">
                    {props.faq4Question}
                  </p>
                  <div className="faq-merchant-icons-container3">
                    {!faq4Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon12"
                        >
                          <path
                            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon14"
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
                {faq4Visible && (
                  <div className="faq-merchant-container12">
                    <span className="thq-body-small">
                      Yes, you can integrate CashOver into your website or
                      mobile app using our flexible API and SDK. This allows you
                      to seamlessly offer secure payment services and enhance
                      your platform&apos;s functionality with CashOver&apos;s
                      features.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-merchant-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="faq-merchant-trigger4"
                >
                  <p className="faq-merchant-faq1-question1 thq-body-large">
                    {props.faq5Question}
                  </p>
                  <div className="faq-merchant-icons-container4">
                    {!faq5Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon16"
                        >
                          <path
                            d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                            className=""
                          ></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-merchant-icon18"
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
                {faq5Visible && (
                  <div className="faq-merchant-container15">
                    <span className="thq-body-small">
                      Yes, as a CashOver Merchant, you can create and manage a
                      free menu or product list. This feature is easily
                      accessible through our platform and can be viewed on the
                      web and edited in-app, helping you efficiently manage your
                      offerings.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
          <div className="faq-merchant-content thq-flex-column thq-section-max-width">
            <h2 className="faq-merchant-text08">{props.heading2}</h2>
            <p className="faq-merchant-text09 thq-body-large">
              {props.content2}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQMerchant.defaultProps = {
  faq3Question: 'What are the benefits CashOver Merchants have?',
  rootClassName: '',
  faq1Question: 'How can I become a CashOver Merchant?',
  faq4Question: 'Can I use CashOver on my website or mobile app?',
  heading2: 'Still have a question?',
  faq2Question: 'What are the fees applied on Merchant accounts?',
  text: 'FAQ',
  faq5Question: 'Do I get a free menu or product list as a Merchant?',
  content2: 'Do not hesitate to contact us to answer your inquiries',
}

FAQMerchant.propTypes = {
  faq3Question: PropTypes.string,
  rootClassName: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  heading2: PropTypes.string,
  faq2Question: PropTypes.string,
  text: PropTypes.string,
  faq5Question: PropTypes.string,
  content2: PropTypes.string,
}

export default FAQMerchant
