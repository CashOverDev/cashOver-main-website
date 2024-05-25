import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-column">
        <p className="footer-text">{props.text18}</p>
        <div className="footer-row">
          <div className="footer-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image"
            />
            <h2 className="footer-text01">{props.text1}</h2>
            <div className="footer-stores">
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="footer-image1"
                />
              </a>
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link01"
              >
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="footer-image2"
                />
              </a>
            </div>
          </div>
          <div className="footer-links-container">
            <div className="footer-product-container">
              <h4 className="footer-text02">{props.text2}</h4>
              <Link to="/" className="footer-navlink">
                {props.text3}
              </Link>
              <Link to="/agent-atm-hosting" className="footer-navlink1">
                {props.text4}
              </Link>
              <span className="footer-text03">{props.text5}</span>
              <Link to="/our-fees" className="footer-navlink2">
                {props.text19}
              </Link>
              <Link to="/support" className="footer-navlink3">
                {props.text6}
              </Link>
              <Link to="/faq" className="footer-navlink4">
                {props.text7}
              </Link>
            </div>
            <div className="footer-company-container">
              <h4 className="footer-text04">{props.text8}</h4>
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link02"
              >
                {props.text9}
              </a>
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link03"
              >
                {props.text10}
              </a>
              <Link to="/support" className="footer-navlink5">
                {props.text11}
              </Link>
              <Link to="/blog" className="footer-navlink6">
                {props.text12}
              </Link>
              <Link to="/terms-of-service" className="footer-navlink7">
                {props.text13}
              </Link>
            </div>
            <div className="footer-location-container">
              <h4 className="footer-text05">Visit Us</h4>
              <span className="footer-text06">
                <span className="">Lebanon, </span>
                <span className="">Tripoli</span>
                <br className=""></br>
                <span className="">Ashir Dayeh Street</span>
                <br className=""></br>
              </span>
              <span className="footer-text12">8:00 AM - 2:00 PM</span>
              <span className="footer-text13">Monday to Saturday</span>
            </div>
            <div className="footer-contact-container">
              <div className="footer-contact">
                <h4 className="footer-text14">{props.text14}</h4>
                <a
                  href="mailto:contactus@overlab.io?subject=CashOver Contact Form"
                  className="footer-link04"
                >
                  {props.text15}
                </a>
                <a href="tel:+96181350616" className="footer-link05">
                  <span className="">+961 81 350 616</span>
                  <br className=""></br>
                </a>
                <a href="tel:+96191454297" className="footer-link06">
                  <span className="">+961 81 454 297</span>
                  <br className=""></br>
                </a>
              </div>
              <div className="footer-socials">
                <h4 className="footer-text19">{props.text16}</h4>
                <div className="footer-icon-group">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link07"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="footer-icon"
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
                    className="footer-link08"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon2"
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
                    className="footer-link09"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="footer-icon4"
                    >
                      <path
                        d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <a
          href="https://overlab.io"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link10"
        >
          {props.text}
        </a>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text12: 'Blog',
  rootClassName: '',
  text10: 'Careers',
  text18:
    'CashOver, as a company utilizing Tether (USD₮) within its platform, acknowledges that it does not bear responsibility for the devaluation of Tether. CashOver acts as a facilitator for users to transact and store Tether, but the stability and value of Tether are determined by external market factors, such as supply and demand dynamics and the performance of the underlying reserve assets. CashOver does not have control over the reserve backing or the mechanics of Tethers operation. Therefore, any potential devaluation or fluctuations in the value of Tether should be attributed to broader market forces and not to the actions or responsibilities of CashOver as a company.',
  text15: 'support@cashover.money',
  text4: 'Agent - ATM',
  text: '© 2024 CashOver by Overlab, All Rights Reserved.',
  imageAlt: 'logo',
  text5: 'Business Solutions',
  text9: 'About',
  text13: 'Terms of Service',
  text14: 'Contact Us',
  imageSrc2: '/apple-badge.png',
  text6: 'Support',
  imageSrc1: '/play-badge.png',
  text1: 'Make your money do more!\n',
  text19: 'Our Fees & Pricing',
  imageSrc: '/cashover%20banner%20dark.png',
  imageAlt2: 'image',
  imageAlt1: 'image',
  text16: 'Follow Us',
  text2: 'Product',
  text8: 'Company',
  text11: 'Contact',
  text7: 'FAQ',
  text3: 'Home',
}

Footer.propTypes = {
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  text10: PropTypes.string,
  text18: PropTypes.string,
  text15: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  text5: PropTypes.string,
  text9: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  imageSrc2: PropTypes.string,
  text6: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
  text19: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  text16: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
}

export default Footer
