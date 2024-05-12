import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FAQMerchant from '../components/faq-merchant'
import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './merchant.css'

const Merchant = (props) => {
  return (
    <div className="merchant-container">
      <Helmet>
        <title>Merchant - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Merchant - CashOver Pay | Ultimate Finance App"
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
      <header data-thq="thq-navbar" className="merchant-navigation-bar-home">
        <img
          alt="logo"
          src="/cashover%20banner%20light.png"
          className="merchant-image"
        />
        <div data-thq="thq-navbar-nav" className="merchant-desktop-menu">
          <nav className="merchant-links">
            <a href="#Services" className="merchant-link">
              <span>Home</span>
              <br></br>
            </a>
            <Link to="/agent-atm-hosting" className="merchant-navlink">
              Agent - ATM
            </Link>
            <span className="merchant-text02">Merchant</span>
            <span className="merchant-text03">
              <span>Business</span>
              <br></br>
            </span>
            <a
              href="https://overlab.io"
              target="_blank"
              rel="noreferrer noopener"
              className="merchant-link1"
            >
              Careers
            </a>
          </nav>
          <div className="merchant-buttons">
            <button type="button" className="merchant-login button">
              Login
            </button>
            <button className="merchant-register button">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="merchant-burger-menu">
          <svg viewBox="0 0 1024 1024" className="merchant-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="merchant-mobile-menu">
          <div className="merchant-nav">
            <div className="merchant-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="merchant-logo"
              />
              <div data-thq="thq-close-menu" className="merchant-close-menu">
                <svg viewBox="0 0 1024 1024" className="merchant-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="merchant-links1">
              <span className="merchant-text06">About</span>
              <span className="merchant-text07">Features</span>
              <span className="merchant-text08">Pricing</span>
              <span className="merchant-text09">Team</span>
              <span className="merchant-text10">Blog</span>
            </nav>
            <div className="merchant-buttons1">
              <button className="merchant-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="merchant-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="merchant-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="merchant-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <header className="merchant-column">
        <img alt="image" src="/hero.png" className="merchant-image1" />
        <div className="merchant-row">
          <div className="merchant-column1">
            <h1 className="merchant-title">
              GO DIGITAL - GROW YOUR BUSINESS WITH CASHOVER!
            </h1>
            <h2 className="merchant-subtitle">
              Not only can you exchange US Dollars and Lebanese Pound, but you
              can also trade cryptocurrencies at competitive market rates. Put
              those USDTs to work!
            </h2>
            <div className="merchant-stores">
              <img
                alt="image"
                src="/play-badge.png"
                className="merchant-image2"
              />
              <img
                alt="image"
                src="/apple-badge.png"
                className="merchant-image3"
              />
            </div>
          </div>
          <img alt="image" src="/hero.png" className="merchant-phone-image" />
        </div>
        <div className="merchant-row1">
          <svg viewBox="0 0 1024 1024" className="merchant-icon10">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="merchant-text11">Scroll Down to Learn More</span>
          <svg viewBox="0 0 1024 1024" className="merchant-icon12">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <FAQMerchant rootClassName="faq-merchant-root-class-name"></FAQMerchant>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name1"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default Merchant
