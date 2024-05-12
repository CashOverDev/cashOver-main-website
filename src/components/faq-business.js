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
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
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
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
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
        <div className="faq-business-content thq-flex-column thq-section-max-width">
          <h2 className="faq-business-text5">{props.heading2}</h2>
          <p className="faq-business-text6">{props.content2}</p>
        </div>
      </div>
    </div>
  )
}

FAQBusiness.defaultProps = {
  faq2Question: 'Frequently Asked Questions',
  faq5Question: 'Frequently Asked Questions',
  heading2: 'Still have a question?',
  faq1Question: 'Frequently Asked Questions',
  faq3Question: 'Frequently Asked Questions',
  content2: 'Do not hesitate to contact us to answer your inquiries',
  faq4Question: 'Frequently Asked Questions',
  rootClassName: '',
}

FAQBusiness.propTypes = {
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
