import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq-business.css'

const FAQBusiness = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div
      className={`faq-business-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="faq-business-column">
        <span className="faq-business-text">{props.text}</span>
        <div className="faq-business-max-width thq-section-max-width">
          <div className="faq-business-container thq-flex-column">
            <div className="thq-flex-column thq-section-max-width">
              <div className="thq-divider-horizontal"></div>
              <div className="faq-business-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq-business-trigger"
                >
                  <p className="faq-business-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="faq-business-icons-container">
                    {!faq1Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-business-icon"
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
                          className="faq-business-icon02"
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
                  <div className="faq-business-container03">
                    <span className="thq-body-small">
                      CashOver is an integrated payroll system that you can
                      manage directly from your account, anywhere and anytime.
                      Assign permissions and decrease administrative and
                      accounting workload. One tap to pay everyone.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-business-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq-business-trigger1"
                >
                  <p className="faq-business-faq2-question thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="faq-business-icons-container1">
                    {!faq2Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-business-icon04"
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
                          className="faq-business-icon06"
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
                  <div className="faq-business-container06">
                    <span className="thq-body-small">
                      CashOver Business supports a minimum of 5 employees, all
                      the way up to 10,000. With detailed payment slips and 24/7
                      support.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-business-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq-business-trigger2"
                >
                  <p className="faq-business-faq2-question1 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="faq-business-icons-container2">
                    {!faq3Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-business-icon08"
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
                          className="faq-business-icon10"
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
                  <div className="faq-business-container09">
                    <span className="thq-body-small">
                      Employees can cash-out their money either through an ATM
                      (Contact support to apply for an ATM inside your business)
                      or an agent. They can also use their account to buy from
                      store, purchase in-app services and much more.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-business-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="faq-business-trigger3"
                >
                  <p className="faq-business-faq2-question2 thq-body-large">
                    {props.faq4Question}
                  </p>
                  <div className="faq-business-icons-container3">
                    {!faq4Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-business-icon12"
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
                          className="faq-business-icon14"
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
                  <div className="faq-business-container12">
                    <span className="thq-body-small">
                      CashOver covers 3 currencies. US Dollars, Lebanese Lira
                      and USDT crypto-currency. You can pay employees in
                      multiple currencies in one salary divided between LBP or
                      USD for example.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="faq-business-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="faq-business-trigger4"
                >
                  <p className="faq-business-faq1-question1 thq-body-large">
                    {props.faq5Question}
                  </p>
                  <div className="faq-business-icons-container4">
                    {!faq5Visible && (
                      <div className="">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="faq-business-icon16"
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
                          className="faq-business-icon18"
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
                  <div className="faq-business-container15">
                    <span className="thq-body-small">
                      No, CashOver is not a bank. CashOver is a digital platform
                      that facilitates secure and efficient transactions,
                      including cashing out USDT, transferring USDT, USD, and
                      LBP between users, and managing payments for merchants. It
                      provides services similar to those of a bank but operates
                      as a financial technology company.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
          <div className="faq-business-content thq-flex-column thq-section-max-width">
            <h2 className="faq-business-text6">{props.heading2}</h2>
            <p className="faq-business-text7">{props.content2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQBusiness.defaultProps = {
  text: 'FAQ',
  faq2Question: 'How many employees can CashOver Business support?',
  faq5Question: 'Is CashOver a bank?',
  heading2: 'Still have a question?',
  faq1Question: 'How can my business benefit from CashOver?',
  faq3Question: 'How can my employees cash-out their money?',
  content2: 'Do not hesitate to contact us to answer your inquiries',
  faq4Question: 'What currencies does CashOver support?',
  rootClassName: '',
}

FAQBusiness.propTypes = {
  text: PropTypes.string,
  faq2Question: PropTypes.string,
  faq5Question: PropTypes.string,
  heading2: PropTypes.string,
  faq1Question: PropTypes.string,
  faq3Question: PropTypes.string,
  content2: PropTypes.string,
  faq4Question: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FAQBusiness
