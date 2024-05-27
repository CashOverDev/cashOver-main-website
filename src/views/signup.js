import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>Signup - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Signup - CashOver Pay | Ultimate Finance App"
        />
        <meta
          property="og:description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8b3094c7-7cdb-40f6-a719-0ee8bc9f46ba/ccd6fb98-7341-44f7-9ed0-1111ae5917eb?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="signup-bar">
        <Link to="/" className="signup-navlink">
          <img className='signup-image1' alt="CashOver Logo" src="/cashover%20banner%20dark.png" />
        </Link>
        <a
          href={`https://agent.${window.location.host}`}
          target="_blank"
          rel="noreferrer noopener"
          className="signup-action2 thq-button-outline-dark"
        >
          <span className="signup-text">Agent Portal</span>
          <svg viewBox="0 0 1024 1024" className="signup-icon">
            <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </a>
      </div>
      <div className="signup-container1">
        <div className="signup-choices">
          <a
           href={`https://merchant.${window.location.host}`}
            target="_blank"
            rel="noreferrer noopener"
            className="signup-link"
          >
            <label className="signup-text1">MERCHANT</label>
          </a>
          <label className="signup-text2">PERSONAL</label>
          <a
          href={`https://business.${window.location.host}`}
            target="_blank"
            rel="noreferrer noopener"
            className="signup-link1"
          >
            <label className="signup-text3">BUSINESS</label>
          </a>
        </div>
        <div className="signup-box">
          <Link to="/" className="signup-navlink1">
            <img
              alt="image"
              src="/cashover-200w.png"
              className="signup-image"
            />
          </Link>
          <h2 className="signup-text4">
            <span>Create a personal account or login using our app.</span>
            <br></br>
            <span>Scan to Download CashOver Pay!</span>
          </h2>
          <img
            alt="image"
            src="/cashover-qr-code.png"
            loading="eager"
            className="signup-image-qr-code"
          />
          <div className="signup-row">
            <div className="signup-divider"></div>
            <span className="signup-text8">or</span>
            <div className="signup-divider1"></div>
          </div>
          <div className="signup-stores">
            <a
              href="https://overlab.io"
              target="_blank"
              rel="noreferrer noopener"
              className="signup-link2"
            >
              <img
                alt="image"
                src="/play-badge.png"
                className="signup-image2"
              />
            </a>
            <a
              href="https://overlab.io"
              target="_blank"
              rel="noreferrer noopener"
              className="signup-link3"
            >
              <img
                alt="image"
                src="/apple-badge.png"
                className="signup-image3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
