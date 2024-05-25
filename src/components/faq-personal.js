import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq-personal.css'

const FAQPersonal = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div
      className={`faq-personal-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="faq-personal-max-width thq-section-max-width">
        <div className="faq-personal-container thq-flex-column">
          <div className="thq-flex-column thq-section-max-width">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-personal-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq-personal-trigger"
              >
                <p className="faq-personal-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq-personal-icons-container">
                  {!faq1Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="faq-personal-icon"
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
                        className="faq-personal-icon02"
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
                <div className="faq-personal-container03">
                  <span className="thq-body-small">
                    <span className="">
                      For fees and details about our services, tap
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link to="/our-fees" className="faq-personal-navlink">
                      here
                    </Link>
                    <span className="">
                      . Always refer to this list to be updated about the fees
                      and changes in pricing of any service.
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-personal-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq-personal-trigger1"
              >
                <p className="faq-personal-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq-personal-icons-container1">
                  {!faq2Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="faq-personal-icon04"
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
                        className="faq-personal-icon06"
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
                <div className="faq-personal-container06">
                  <span className="thq-body-small">
                    <span className="">
                      CashOver supports Binance Smart Chain network. Make sure
                      that every deposit that you do is over the BSC network. If
                      you are not familiar with BSC network, refer to this
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="faq-personal-link"
                    >
                      guide here
                    </a>
                    <span className=""> for more info to get you started.</span>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-personal-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq-personal-trigger2"
              >
                <p className="faq-personal-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq-personal-icons-container2">
                  {!faq3Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="faq-personal-icon08"
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
                        className="faq-personal-icon10"
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
                <div className="faq-personal-container09">
                  <span className="thq-body-small">
                    <span className="">
                      There are 3 simple ways to topup your USDT balance. One,
                      you can send copy your CashOver wallet address and send
                      USDT from an external wallet (non-cashover wallet), the
                      app will automatically update your balance. Two, you can
                      receive USDT from another CashOver user. Finally, you can
                      buy USDT using USD in your app. For any issues, contact us
                      at
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="mailto:support@cashover.money?subject="
                      className="faq-personal-link1"
                    >
                      support@cashover.money
                    </a>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-personal-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq-personal-trigger3"
              >
                <p className="faq-personal-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq-personal-icons-container3">
                  {!faq4Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="faq-personal-icon12"
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
                        className="faq-personal-icon14"
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
                <div className="faq-personal-container12">
                  <span className="thq-body-small">
                    In CashOver app, swaps are called Buy or Sell. You can
                    either buy USDT using USD or sell your USDT to increase your
                    USD balance. All with one tap!
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq-personal-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq-personal-trigger4"
              >
                <p className="faq-personal-faq1-question1 thq-body-large">
                  {props.faq5Question}
                </p>
                <div className="faq-personal-icons-container4">
                  {!faq5Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="faq-personal-icon16"
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
                        className="faq-personal-icon18"
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
                <div className="faq-personal-container15">
                  <span className="thq-body-small">
                    Transferring any currency in CashOver app is pretty
                    straightforward. You can scan the recipient QR-Code and
                    input the amount to send or you can use their phone number
                    to to do so.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq-personal-content thq-flex-column thq-section-max-width">
          <h2 className="faq-personal-text10">{props.heading2}</h2>
          <p className="faq-personal-text11">{props.content2}</p>
        </div>
      </div>
    </div>
  )
}

FAQPersonal.defaultProps = {
  faq5Question: 'How can I transfer money to another user?',
  content2: 'Do not hesitate to contact us to answer your inquiries',
  faq1Question: 'Where can I check CashOver fees?',
  heading2: 'Still have a question?',
  faq3Question: 'How can I topup my USDT balance in CashOver app?',
  faq4Question: 'How can I swap my USDT for USD or vice-versa?',
  faq2Question: 'What network does CashOver support?',
  rootClassName: '',
}

FAQPersonal.propTypes = {
  faq5Question: PropTypes.string,
  content2: PropTypes.string,
  faq1Question: PropTypes.string,
  heading2: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FAQPersonal
