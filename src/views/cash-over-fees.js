import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import NavigationBarGeneral from "../components/navigation-bar-general";
import ContactFormDark from "../components/contact-form-dark";
import Footer from "../components/footer";
import "./cash-over-fees.css";

const CashOverFees = (props) => {
  return (
    <div className="cash-over-fees-container">
      <Helmet>
        <title>CashOver-Fees - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="CashOver-Fees - CashOver Pay | Ultimate Finance App"
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
      <NavigationBarGeneral rootClassName="navigation-bar-general-root-class-name9"></NavigationBarGeneral>
      <header className="cash-over-fees-hero">
        <div className="cash-over-fees-dummy"></div>
        <div className="cash-over-fees-column">
          <h1 className="cash-over-fees-text">Have a Look At Our Fees</h1>
          <p className="cash-over-fees-text01">
            <span>
              Our commitment to transparency means we proudly showcase our
              numbers for all to see. And with unwavering confidence, we declare
              ourselves not just the most affordable payment platform in
              Lebanon, but in the entire world.
            </span>
            <br></br>
          </p>
          <div className="cash-over-fees-row">
            <a href="#Account" className="cash-over-fees-link">
              Personal
            </a>
            <a href="#Merchant" className="cash-over-fees-link1">
              Merchant
            </a>
            <a href="#Business" className="cash-over-fees-link2">
              Business
            </a>
            <a href="#SDK" className="cash-over-fees-link3">
              SDK
            </a>
          </div>
        </div>
        <div className="cash-over-fees-row1">
          <svg viewBox="0 0 1024 1024" className="cash-over-fees-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="cash-over-fees-text04">Scroll Down To View</span>
          <svg viewBox="0 0 1024 1024" className="cash-over-fees-icon2">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <section id="Account" className="cash-over-fees-personal">
        <div className="cash-over-fees-row2">
          <img
            alt="image"
            src="/cashover-200w.png"
            className="cash-over-fees-image"
          />
          <h2 className="cash-over-fees-cash-over">CashOver account fees</h2>
        </div>
        <span className="cash-over-fees-text05">General</span>
        <div className="cash-over-fees-container01">
          <div className="cash-over-fees-container02">
            <table>
              <tbody>
                <tr>
                  <td>Account Setup</td>
                  <td>$0.00</td>
                  <td>Free of charge</td>
                </tr>
                <tr>
                  <td>Buy Tether Token</td>
                  <td>0.5% - $0.01 min fee</td>
                  <td>
                    No monthly limit
                    <br />
                    Min buy $1
                  </td>
                </tr>
                <tr>
                  <td>Sell Tether Token</td>
                  <td>0.5% - $0.01 min fee</td>
                  <td>
                    No monthly limit
                    <br />
                    Min sell $1
                  </td>
                </tr>
                <tr>
                  <td>Sending US Dollars</td>
                  <td>$0.01 up to $0.16</td>
                  <td>
                    P2P in-app transfer
                    <br />
                    Min transfer $0.02
                    <br />
                    No upper limit
                  </td>
                </tr>
                <tr>
                  <td>Sending Lebanese Lira</td>
                  <td>250L.L up to 4,000L.L</td>
                  <td>
                    P2P in-app transfer
                    <br />
                    Min transfer 500L.L
                    <br />
                    No upper limit
                  </td>
                </tr>
                <tr>
                  <td>Sending Tether Token</td>
                  <td>0.00 USDT</td>
                  <td>
                    P2P in-app crypto transfers
                    <br />
                    are free of charge
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className="cash-over-fees-text06">Deposits</span>
        <div className="cash-over-fees-container03">
          <div className="cash-over-fees-container04">
            <table>
              <tbody>
                <tr>
                  <td>US Dollars</td>
                  <td>$0.00</td>
                  <td>
                    Free of charge
                    <br />
                    No upper limit
                  </td>
                </tr>
                <tr>
                  <td>Lebanese Lira</td>
                  <td>$0.00</td>
                  <td>
                    Free of charge
                    <br />
                    No upper limit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className="cash-over-fees-text07">US Dollars Withdrawals</span>
        <div className="cash-over-fees-container05">
          <div className="cash-over-fees-container06">
            <table id="table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>US Dollars Withdrawal</td>
                  <td style={{ fontWeight: "bold" }}>Fee</td>
                  <td style={{ fontWeight: "bold" }}>Description</td>
                </tr>
                <tr>
                  <td>Monthly Fee-Free Withdrawals</td>
                  <td>None</td>
                  <td>
                    Allowed amount to withdraw
                    <br />
                    with zero fees
                  </td>
                </tr>
                <tr>
                  <td>$10.00 to $200.00</td>
                  <td>$1.00</td>
                  <td>
                    ATM or Agent withdrawal fee
                    <br />
                    Minimum withdraw $10.00
                  </td>
                </tr>
                <tr>
                  <td>Above $200.00</td>
                  <td>$2.00</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>Above $600.00</td>
                  <td>$5.00</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>Above $2,000.00</td>
                  <td>$10.00</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>

                <tr>
                  <td>Above $4,000.00</td>
                  <td>$15.00</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>Above $6,000.00</td>
                  <td>$20.00</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>$8,000.00 to $10,000.00</td>
                  <td>$25.00</td>
                  <td>
                    ATM or Agent withdrawal fee
                    <br />
                    Maximum withdraw $10,000.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className="cash-over-fees-text08">Lebanese Lira Withdrawals</span>
        <div className="cash-over-fees-container07">
          <div className="cash-over-fees-container08">
            <table id="table">
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Lebanese Lira Withdrawal
                  </td>
                  <td style={{ fontWeight: "bold" }}>Fee</td>
                  <td style={{ fontWeight: "bold" }}>Description</td>
                </tr>
                <tr>
                  <td>Monthly Fee-Free Withdrawals</td>
                  <td>
                    90,000,000L.L
                    <br />
                    ~$1,000
                  </td>
                  <td>
                    Allowed amount to withdraw
                    <br />
                    with zero fees
                  </td>
                </tr>
                <tr>
                  <td>
                    900K to 5M
                    <br />
                    Plus Free Limit
                  </td>
                  <td>15,000.00L.L</td>
                  <td>
                    ATM or Agent withdrawal fee
                    <br />
                    Minimum withdraw 900,000
                  </td>
                </tr>
                <tr>
                  <td>
                    Above 5M
                    <br />
                    Plus Free Limit
                  </td>
                  <td>30,000.00L.L</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>
                    Above 10M
                    <br />
                    Plus Free Limit
                  </td>
                  <td>60,000.00L.L</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>
                    Above 20M
                    <br />
                    Plus Free Limit
                  </td>
                  <td>90,000.00L.L</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>

                <tr>
                  <td>
                    Above 30M
                    <br />
                    Plus Free Limit
                  </td>
                  <td>120,000.00L.L</td>
                  <td>ATM or Agent withdrawal fee</td>
                </tr>
                <tr>
                  <td>
                    Each 10M Added
                    <br />
                    Plus Free Limit
                  </td>
                  <td>30,000.00L.L per 10M added</td>
                  <td>
                    ATM or Agent withdrawal fee
                    <p style={{ color: "#A22020", fontWeight: "bold" }}>
                      *Maximum withdraw 900M
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="Merchant" className="cash-over-fees-merchant">
        <div className="cash-over-fees-row3">
          <img
            alt="image"
            src="/cashover%20merchant-200h.png"
            className="cash-over-fees-image1"
          />
          <h2 className="cash-over-fees-cash-over1">Merchant account fees</h2>
        </div>
        <span className="cash-over-fees-text09">
          CashOver Merchant Accounts are subjected to similar fees and limits,
          except for allowed maximum Withdrawal and Deposit (in LBP and USD).
          Upon verifying a Merchant Account, you are able to withdraw money at
          lower fees but higher min and max limits than personal accounts. You
          will also obtain credentials to use CashOver SDKs to perform payments
          in your e-commerce website, mobile app.
        </span>
        <Link
          to="/merchant"
          className="cash-over-fees-action2 thq-button-outline button"
        >
          Learn More
        </Link>
      </section>
      <section id="Business" className="cash-over-fees-business">
        <div className="cash-over-fees-row4">
          <img
            alt="image"
            src="/cashover%20business.png"
            className="cash-over-fees-image2"
          />
          <h2 className="cash-over-fees-cash-over2">
            Business account Pricing
          </h2>
        </div>
        <div className="cash-over-fees-container09">
          <div className="cash-over-fees-container10">
            <table>
              <tbody>
                <tr>
                  <td>Payroll System</td>
                  <td>Contact Us</td>
                  <td>Pay up to 10,000 employee</td>
                </tr>
                <tr>
                  <td>Tax Calculator</td>
                  <td>None</td>
                  <td>Free of charge</td>
                </tr>
                <tr>
                  <td>Consultancy</td>
                  <td>None</td>
                  <td>Free of charge</td>
                </tr>
                <tr>
                  <td>Custom Solutions</td>
                  <td>Contact Us</td>
                  <td>
                    Business solutions tailored
                    <br />
                    for you only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="SDK" className="cash-over-fees-sd-ks">
        <div className="cash-over-fees-row5">
          <img
            alt="image"
            src="/cashover%20business.png"
            className="cash-over-fees-image3"
          />
          <h2 className="cash-over-fees-cash-over3">
            CASHOVER SDK USAGE Pricing
          </h2>
        </div>
        <span className="cash-over-fees-text10">
          <span>
            CashOver SDK usage is granted by registering a merchant or business
            account. Upon creating a merchant account and completing
            verification, you will be granted a merchant/business key and pass.
            All SDK activity is subject to regular merchant account fees, unless
            stated otherwise. For more info on SDK usage and help with
            implementation do not hesitate to
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <Link to="/support" className="cash-over-fees-navlink">
            contact us
          </Link>
          <span>.</span>
        </span>
      </section>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name6"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  );
};

export default CashOverFees;
