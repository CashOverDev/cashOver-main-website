import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq-merchant.css'

const FAQMerchant = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div
      className={`faq-merchant-faq8 thq-section-padding ${props.rootClassName} `}
    >
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
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
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
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
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
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
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
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
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
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq-merchant-content thq-flex-column thq-section-max-width">
          <h2 className="faq-merchant-text5">{props.heading2}</h2>
          <p className="faq-merchant-text6 thq-body-large">{props.content2}</p>
        </div>
      </div>
    </div>
  )
}

FAQMerchant.defaultProps = {
  faq3Question: 'Frequently Asked Questions',
  rootClassName: '',
  faq1Question: 'Frequently Asked Questions',
  faq4Question: 'Frequently Asked Questions',
  heading2: 'Still have a question?',
  faq2Question: 'Frequently Asked Questions',
  faq5Question: 'Frequently Asked Questions',
  content2: 'Do not hesitate to contact us to answer your inquiries',
}

FAQMerchant.propTypes = {
  faq3Question: PropTypes.string,
  rootClassName: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  heading2: PropTypes.string,
  faq2Question: PropTypes.string,
  faq5Question: PropTypes.string,
  content2: PropTypes.string,
}

export default FAQMerchant
