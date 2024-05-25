import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationBarDark from '../components/navigation-bar-dark'
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
      <NavigationBarDark rootClassName="navigation-bar-dark-root-class-name"></NavigationBarDark>
      <header className="merchant-column">
        <div className="merchant-dummy"></div>
        <img alt="image" src="/hero.png" className="merchant-image" />
        <div className="merchant-row">
          <div className="merchant-column1">
            <h1 className="merchant-title">
              GO DIGITAL - GROW YOUR BUSINESS WITH CASHOVER!
            </h1>
            <h2 className="merchant-subtitle">
              Receive payments instantly, get a free store menu, and manage
              employees, all at almost no expense or hidden fees. Available all
              over Lebanon!
            </h2>
            <div className="merchant-stores">
              <img
                alt="image"
                src="/play-badge.png"
                className="merchant-image01"
              />
              <img
                alt="image"
                src="/apple-badge.png"
                className="merchant-image02"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/merchant%20hero.png"
            className="merchant-phone-image"
          />
        </div>
        <div className="merchant-row1">
          <svg viewBox="0 0 1024 1024" className="merchant-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="merchant-text">Scroll Down to Learn More</span>
          <svg viewBox="0 0 1024 1024" className="merchant-icon2">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <div className="merchant-column2">
        <h2 className="merchant-text01">
          Thousands of Businesses Use Cashover
        </h2>
        <h2 className="merchant-text02">to</h2>
        <div className="merchant-row2">
          <div className="merchant-box">
            <h2 className="merchant-text03">GET PAID</h2>
            <img
              alt="image"
              src="/get%20paid.png"
              className="merchant-image03"
            />
            <span className="merchant-text04">
              Use your merchant account to receive payments from customers
              buying your products or services online.
            </span>
          </div>
          <div className="merchant-box1">
            <h2 className="merchant-text05">analyze</h2>
            <img alt="image" src="/analyze.png" className="merchant-image04" />
            <span className="merchant-text06">
              Use your merchant account to receive payments from customers
              buying your products or services online.
            </span>
          </div>
          <div className="merchant-box2">
            <h2 className="merchant-text07">Modernize</h2>
            <img alt="image" src="/request.png" className="merchant-image05" />
            <span className="merchant-text08">
              Use your merchant account to receive payments from customers
              buying your products or services online.
            </span>
          </div>
        </div>
        <span className="merchant-text09">
          Pay And Get Paid  Across Lebanon
        </span>
        <div className="merchant-row3">
          <div className="merchant-box3">
            <span className="merchant-text10">Currencies</span>
            <span className="merchant-text11">Trade in LBP, USD USDT.</span>
          </div>
          <div className="merchant-box4">
            <span className="merchant-text12">Free menu</span>
            <span className="merchant-text13">
              Create your store menu and edit it anytime.
            </span>
          </div>
          <div className="merchant-box5">
            <span className="merchant-text14">Secure revenue</span>
            <span className="merchant-text15">
              Prevent money theft by going digital.
            </span>
          </div>
          <Link to="/merchant" className="merchant-navlink">
            <div className="merchant-box6">
              <span className="merchant-text16">Ultra cheap</span>
              <span className="merchant-text17">
                Fees on CashOver are super low. Learn more.
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="merchant-column3">
        <div className="merchant-menu">
          <img alt="image" src="/menu.jpg" className="merchant-image06" />
          <div className="merchant-container1">
            <span className="merchant-text18">Create Your Own Menu</span>
            <span className="merchant-text19">
              <span>
                Manage and edit your menu inside CashOver Merchant app or
                website, anytime and anywhere.
              </span>
              <br></br>
              <br></br>
              <span>
                Be it a restaurant or a store or even a service, add your dishes
                or products for everyone to view.
              </span>
              <br></br>
              <br></br>
              <span>
                Customers can visit your menu using a QR-Code or google search
                and you can track menu visits to analyze your traffic.
              </span>
              <br></br>
              <br></br>
              <span>
                No need to pay anything, its totally free. Get a beautiful Menu
                Now!
              </span>
              <br></br>
            </span>
            <button className="merchant-action1 thq-button-filled-dark">
              Create Menu For Free
            </button>
          </div>
        </div>
        <div className="merchant-menu1">
          <div className="merchant-container2">
            <span className="merchant-text31">Get Paid Instantly</span>
            <span className="merchant-text32">
              <span>
                With CashOver, people can pay you on the spot in 3 different
                currencies.
              </span>
              <br></br>
              <br></br>
              <span>
                Modernize your store and follow the latest trends to attract
                more customers.
              </span>
              <br></br>
              <br></br>
              <span>
                You can also
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/cash-over-sd-ks" className="merchant-navlink1">
                add CashOver
              </Link>
              <span>
                {' '}
                to your website or app, no more high transfer fees from banks
                and difficult cash-out procedures. Learn more about fees 
              </span>
              <Link to="/our-fees" className="merchant-navlink2">
                here
              </Link>
              <span className="merchant-text41">.</span>
              <br></br>
              <br></br>
              <span>
                Thousands of stores are already using CashOver. Join them now.
              </span>
              <br></br>
            </span>
            <button className="merchant-action11 thq-button-filled-dark">
              Get Started
            </button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1600147131759-880e94a6185f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHFyJTIwY29kZXxlbnwwfHx8fDE3MTYwNjAxNTZ8MA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="merchant-image07"
          />
        </div>
        <div className="merchant-menu2">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHdhaXRlcnxlbnwwfHx8fDE3MTYwNzc5MzZ8MA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="merchant-image08"
          />
          <div className="merchant-container3">
            <span className="merchant-text46">
              Manage Employees &amp; Permissions
            </span>
            <span className="merchant-text47">
              <span>
                What if you want to have your cashier or worker receive money in
                your absence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Do not worry, CashOver allows to add employees on your merchant
                account to receive or refund money on your behalf.
              </span>
              <br></br>
              <br></br>
              <span>
                You can add them and remove them whenever you want. You are the
                owner and boss.
              </span>
              <br></br>
              <br></br>
            </span>
            <button className="merchant-action12 thq-button-filled-dark">
              Get Started
            </button>
          </div>
        </div>
        <div className="merchant-menu3">
          <div className="merchant-container4">
            <span className="merchant-text57">Online Store? No Problem</span>
            <span className="merchant-text58">
              <span>
                As a CashOver Merchant, you have free access to use our SDK and
                implement CashOver payment method directly into your site or
                mobile app.
              </span>
              <br></br>
              <br></br>
              <span>
                No longer slow bank transfers, endless fees and hard bank
                approvals. CashOver is the right solution for your online
                business.
              </span>
              <br></br>
              <br></br>
              <span>Receive money like you receive text messages!</span>
              <br></br>
            </span>
            <button className="merchant-action13 thq-button-filled-dark">
              View Documentation
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcyfHxjYXJ0JTIwb25saW5lfGVufDB8fHx8MTcxNjA4NjM1OHww&amp;ixlib=rb-4.0.3&amp;h=600"
            className="merchant-image09"
          />
        </div>
      </div>
      <FAQMerchant rootClassName="faq-merchant-root-class-name"></FAQMerchant>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name1"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default Merchant
