import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './cash-over-sdk.css'

const CashOverSDK = (props) => {
  return (
    <div className="cash-over-sdk-container">
      <Helmet>
        <title>CashOver-SDK - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="CashOver-SDK - CashOver Pay | Ultimate Finance App"
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
      <nav className="cash-over-sdk-navigation-bar-sdk">
        <header
          data-thq="thq-navbar"
          className="cash-over-sdk-navbar-interactive"
        >
          <Link to="/" className="cash-over-sdk-navlink">
            <img className="cash-over-sdk-image1" alt="CashOver Logo" src="/cashover%20banner%20dark.png" />
          </Link>
          <div data-thq="thq-navbar-nav" className="cash-over-sdk-desktop-menu">
            <nav className="cash-over-sdk-links">
              <a
                href={`https://docs.${window.location.host}/web`}
                target="_blank"
                rel="noreferrer noopener"
                className="cash-over-sdk-link1 thq-link thq-body-small"
              >
                Web SDK
              </a>
              <a
                href={`https://docs.${window.location.host}/ios`}
                target="_blank"
                rel="noreferrer noopener"
                className="cash-over-sdk-link2 thq-link thq-body-small"
              >
                iOS SDK
              </a>
              <a
                href={`https://docs.${window.location.host}/android`}
                target="_blank"
                rel="noreferrer noopener"
                className="cash-over-sdk-link3 thq-link thq-body-small"
              >
                Android SDK
              </a>
              <a
                href={`https://${window.location.host}/cash-over-fees/#SDK`}
                className="cash-over-sdk-link4 thq-link thq-body-small"
              >
                Pricing
              </a>
              <Link
                to="/support"
                className="cash-over-sdk-link5 thq-link thq-body-small"
              >
                Support
              </Link>
            </nav>
            <div className="cash-over-sdk-buttons">
            <Link to="/Signup" className="thq-button-filled-dark">Create Account</Link>
                <Link to="/Signup" className="thq-button-outline-dark">Login</Link>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="cash-over-sdk-burger-menu">
            <svg viewBox="0 0 1024 1024" className="cash-over-sdk-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navigation-bar-dark-mobile-menu"
          >
            <div className="navigation-bar-dark-nav">
              <div className="navigation-bar-dark-top">
                <Link to="/" className="navigation-bar-dark-navlink1">
                  <img
                    alt="CashOver Logo"
                    src="/cashover%20banner%20dark.png"
                    className="navigation-bar-dark-logo"
                  />
                </Link>
                <div
                  data-thq="thq-close-menu"
                  className="navigation-bar-dark-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navigation-bar-dark-icon02"
                  >
                    <path
                      d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
              <nav className="navigation-bar-dark-links1">
                <a
                  href={`https://docs.${window.location.host}/web`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navigation-bar-dark-link11 thq-link thq-body-small"
                >
                  Web SDK
                </a>
                <Link
                  to="/merchant"
                  className="navigation-bar-dark-link21 thq-link thq-body-small"
                >
                  Merchant
                </Link>
                <Link
                  to="/business"
                  className="navigation-bar-dark-link31 thq-link thq-body-small"
                >
                  Business
                </Link>
                <Link
                  to="/work-with-us"
                  className="navigation-bar-dark-link41 thq-link thq-body-small"
                >
                  Agent
                </Link>
                <Link
                  to="/cash-over-sdk"
                  className="navigation-bar-dark-link51 thq-link thq-body-small"
                >
                  <span className="navigation-bar-dark-text2">SDK</span>
                  <br className=""></br>
                </Link>
                <Link
                  to="/cash-over-fees"
                  className="navigation-bar-dark-link61 thq-link thq-body-small"
                >
                  <span className="navigation-bar-dark-text4">Fees</span>
                  <br className=""></br>
                </Link>
              </nav>
              <div className="navigation-bar-dark-buttons1">
                <Link to="/Signup" className="thq-button-filled-dark">Create Account</Link>
                <Link to="/Signup" className="thq-button-outline-dark">Login</Link>
              </div>
            </div>
            <div className="navigation-bar-dark-icon-group">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-bar-dark-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="navigation-bar-dark-icon04 thq-icon-x-small"
                >
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                    className=""
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-bar-dark-link1 thq-link thq-body-small navigation-bar-dark-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="navigation-bar-dark-icon06 thq-icon-x-small"
                >
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                    className=""
                  ></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-bar-dark-link2 thq-link thq-body-small navigation-bar-dark-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="navigation-bar-dark-icon08 thq-icon-x-small"
                >
                  <path
                    d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </nav>
      <header className="cash-over-sdk-column">
        <div className="cash-over-sdk-dummy"></div>
        <div className="cash-over-sdk-column1">
          <h1 className="cash-over-sdk-text">CASHOVER PAY SDK</h1>
          <div className="cash-over-sdk-row">
            <h2 className="cash-over-sdk-text01">
              ACCEPT PAYMENTS ON ALL PLATFORMS
            </h2>
            <svg
              viewBox="0 0 796.0137142857142 1024"
              className="cash-over-sdk-icon10"
            >
              <path d="M796 694.286c-14.286 45.143-37.143 93.143-70.286 142.857-49.143 74.857-98.286 112-146.857 112-19.429 0-45.714-6.286-80-18.286-33.714-12.571-62.857-18.286-86.286-18.286-22.857 0-50.286 6.286-81.143 18.857-31.429 13.143-56.571 19.429-75.429 19.429-58.857 0-115.429-49.714-172-148-55.429-98.286-84-193.714-84-287.429 0-87.429 21.714-158.286 64.571-213.714 42.857-54.857 96.571-82.286 162.286-82.286 28 0 61.143 5.714 101.143 17.143 39.429 11.429 65.714 17.143 78.857 17.143 16.571 0 44-6.286 81.714-19.429 37.714-12.571 70.857-19.429 98.857-19.429 45.714 0 86.286 12.571 121.714 37.143 20 13.714 40 33.143 59.429 57.143-29.714 25.143-51.429 47.429-65.143 67.429-24.571 35.429-37.143 74.857-37.143 118.286 0 46.857 13.143 89.714 39.429 127.429s56.571 61.714 90.286 72zM581.143 24c0 23.429-5.714 49.714-16.571 77.714-11.429 28.571-29.143 54.857-53.143 78.857-20.571 20.571-41.143 34.286-61.714 41.143-13.143 4-32.571 7.429-59.429 9.714 1.143-56.571 16-105.714 44.571-146.857s76.571-69.143 142.857-84.571c1.143 5.143 2.286 9.143 2.857 12.571 0 4 0.571 7.429 0.571 11.429z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="cash-over-sdk-icon12">
              <path d="M640 214v-44h-42v44h42zM426 214v-44h-42v44h42zM662 92q106 76 106 206h-512q0-54 30-114t74-92l-56-56q-16-16 0-30t30 0l64 64q52-28 114-28 52 0 112 28l64-64q16-14 30 0t0 30zM874 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM150 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM256 768v-426h512v426q0 18-12 30t-30 12h-44v150q0 28-19 46t-45 18-45-18-19-46v-150h-84v150q0 28-19 46t-45 18-45-18-19-46v-150h-44q-18 0-30-12t-12-30z"></path>
            </svg>
            <svg viewBox="0 0 1280 1024" className="cash-over-sdk-icon14">
              <path d="M832 736l96 96 320-320-320-320-96 96 224 224z"></path>
              <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
              <path d="M701.298 150.519l69.468 18.944-191.987 704.026-69.468-18.944 191.987-704.026z"></path>
            </svg>
          </div>
          <div className="cash-over-sdk-container1">
            <a
               href={`https://docs.${window.location.host}`}
              target="_blank"
              rel="noreferrer noopener"
              className="cash-over-sdk-action12 thq-button-filled-dark"
            >
              Get Started
            </a>
            <a
              href="#Features"
              className="cash-over-sdk-action22 thq-button-outline-dark"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="cash-over-sdk-row1">
          <svg viewBox="0 0 1024 1024" className="cash-over-sdk-icon18">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="cash-over-sdk-text02">
            Scroll Down to Learn The Features
          </span>
          <svg viewBox="0 0 1024 1024" className="cash-over-sdk-icon20">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <main id="Features" className="cash-over-sdk-column2">
        <h2 className="cash-over-sdk-text03">
          <span className="cash-over-sdk-text04">
            CASHOVER PAY IS WHAT YOUR BUSINESS
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="cash-over-sdk-text05">LACKS!</span>
          <br></br>
        </h2>
        <p className="cash-over-sdk-text07">
          <span>
            Get the most out of your services and products, evolve your business
            to be online friendly and embrace the future
          </span>
          <br></br>
        </p>
        <div className="cash-over-sdk-row2">
          <div className="cash-over-sdk-feature">
            <img alt="image" src="/cart.png" className="cash-over-sdk-image" />
            <div className="cash-over-sdk-box">
              <div className="cash-over-sdk-column3">
                <h3 className="cash-over-sdk-text10">Accept Payments</h3>
                <p className="cash-over-sdk-text11">
                  Use your merchant account to receive payments from customers
                  buying your products or services online.
                </p>
              </div>
            </div>
          </div>
          <div className="cash-over-sdk-feature1">
            <img
              alt="image"
              src="/features.png"
              className="cash-over-sdk-image1 cash-over-sdk-image1"
            />
            <div className="cash-over-sdk-box1">
              <div className="cash-over-sdk-column4">
                <h3 className="cash-over-sdk-text12">
                  Cheap, Like Really Cheap!
                </h3>
                <p className="cash-over-sdk-text13">
                  With CashOver, transactions and cash-outs are the cheapest you
                  can imagine. Get the most out of your money.
                </p>
              </div>
            </div>
          </div>
          <div className="cash-over-sdk-feature2">
            <img
              alt="image"
              src="/online.png"
              className="cash-over-sdk-image2"
            />
            <div className="cash-over-sdk-box2">
              <div className="cash-over-sdk-column5">
                <h3 className="cash-over-sdk-text14">Merchant Account</h3>
                <p className="cash-over-sdk-text15">
                  Benefit from the perks of merchant accounts, ranging from
                  employee management to free product menu for your store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name7"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default CashOverSDK
