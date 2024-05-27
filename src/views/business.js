import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationBarDark from '../components/navigation-bar-dark'
import FAQBusiness from '../components/faq-business'
import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './business.css'

const Business = (props) => {
  return (
    <div className="business-container">
      <Helmet>
        <title>Business - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Business - CashOver Pay | Ultimate Finance App"
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
      <NavigationBarDark rootClassName="navigation-bar-dark-root-class-name1"></NavigationBarDark>
      <header className="business-column">
        <div className="business-dummy"></div>
        <img alt="image" src="/payroll.png" className="business-image" />
        <div className="business-row">
          <div className="business-column01">
            <span className="business-text">
              EVOLVE YOUR BUSINESS WITH CASHOVER
            </span>
            <h1 className="business-title">
              Seamlessly Manage Payroll, Employees, and Taxes at Minimal Cost!
            </h1>
            <h2 className="business-subtitle">
              Non-bank solutions for you, your employees and customers. Receive
              money, pay salaries, and calculate taxes at super cheap fees!
            </h2>
            <div className="business-buttons">
              <Link
                to="/signup"
                className="business-action1 thq-button-filled-dark"
              >
                Create Account
              </Link>
              <a
                href="#Features"
                className="business-action2 thq-button-outline-dark"
              >
                Learn More
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="/payroll.png"
            className="business-phone-image"
          />
        </div>
        <div id="Services" className="business-row01">
          <svg viewBox="0 0 1024 1024" className="business-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="business-text001">Scroll Down to Learn More</span>
          <svg viewBox="0 0 1024 1024" className="business-icon2">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <div className="business-column02">
        <div className="business-row02">
          <p className="business-text002">
            <span>Trusted By Hundreds of Businesses </span>
            <span>Across Lebanon</span>
          </p>
          <div className="business-row03">
            <div className="business-column03">
              <span className="business-text005">90%</span>
              <span className="business-text006">Customer Satisfaction</span>
            </div>
            <div className="business-column04">
              <span className="business-text007">1M+</span>
              <span className="business-text008">successful transactions</span>
            </div>
          </div>
        </div>
      </div>
      <div id="Features" className="business-column05">
        <h2 className="business-text009">
          <span className="business-text010">better</span>
          <span> than a bank</span>
        </h2>
        <div className="business-container1">
          <p className="business-text012">
            Discover Why You Should Have CashOver In Your Business
          </p>
          <Link
            to="/signup"
            className="business-action11 thq-button-filled-dark"
          >
            Get Started
          </Link>
        </div>
        <h2 className="business-text013">
          <span className="business-text014">cheaper</span>
          <span> </span>
          <span>than a bank</span>
        </h2>
        <div className="business-row04">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsave%20time.mp4?alt=media&amp;token=869482d0-f298-4284-81d1-2a6653400cb9"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video"
          ></video>
          <div className="business-column06">
            <div className="business-column07">
              <h2 className="business-text017">
                <span>Automated Payroll Processing</span>
                <br></br>
              </h2>
              <h3 className="business-text020">Efficiency and Time-Saving</h3>
              <p className="business-text021">
                <span>
                  Simplify
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text023">payroll</span>
                <span>
                  {' '}
                  with our automated system for timely and accurate salary
                  disbursements.
                </span>
                <br></br>
                <br></br>
                <span>
                  With
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text028">One-Tap Payments</span>
                <span> your business can r</span>
                <span>
                  educe administrative workload and save valuable time with
                  easy, one-tap salary payments.
                </span>
                <br></br>
                <br></br>
                <span>
                  Ensure precise payroll and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text034">tax calculations</span>
                <span>, reducing the risk of errors and penalties.</span>
                <br></br>
              </p>
            </div>
          </div>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsave%20time.mp4?alt=media&amp;token=869482d0-f298-4284-81d1-2a6653400cb9"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video1"
          ></video>
        </div>
        <div className="business-row05">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fmoney.mp4?alt=media&amp;token=3f776730-32b7-47da-a016-51b0357a5d5f"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video2"
          ></video>
          <div className="business-column08">
            <div className="business-column09">
              <h2 className="business-text037">
                <span>Low Cost All Round Solution</span>
                <br></br>
              </h2>
              <h3 className="business-text040">Cost-Effective Fees</h3>
              <p className="business-text041">
                <span className="business-text042">Reduce overheads</span>
                <span>
                  {' '}
                  and save money with competitive transaction fees that are
                  lower than traditional banking fees.
                </span>
                <br></br>
                <br></br>
                <span className="business-text046">
                  Minimize administrative costs
                </span>
                <span>
                  {' '}
                  associated with manual payroll and tax calculations.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="business-row06">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsecurity.mp4?alt=media&amp;token=15adf370-7bfa-4c58-aeb1-d7ed0cb8a149"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video3"
          ></video>
          <div className="business-column10">
            <div className="business-column11">
              <h2 className="business-text048">
                <span>Enhanced Security &amp; Storage</span>
                <br></br>
              </h2>
              <h3 className="business-text051">Secure Transactions</h3>
              <p className="business-text052">
                <span>
                  Protect your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text054">financial data</span>
                <span>
                  {' '}
                  and transactions with advanced encryption and security
                  measures.
                </span>
                <br className="business-text056"></br>
                <br className="business-text057"></br>
                <span>
                  Mitigate
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text059">payroll fraud risks</span>
                <span> with our secure and transparent system.</span>
                <br></br>
                <br></br>
                <span className="business-text063">Secure your assets</span>
                <span> with our law compliant storage solutions.</span>
                <br></br>
              </p>
            </div>
          </div>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsecurity.mp4?alt=media&amp;token=15adf370-7bfa-4c58-aeb1-d7ed0cb8a149"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video4"
          ></video>
        </div>
        <div className="business-row07">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Feasy%20integration.mp4?alt=media&amp;token=810c400a-1fd1-4ec6-9ef1-2bb09d9bd399"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video5"
          ></video>
          <div className="business-column12">
            <div className="business-column13">
              <h2 className="business-text066">Seamless System Integration</h2>
              <h3 className="business-text067">Accounting Easier Than Ever</h3>
              <p className="business-text068">
                <span>
                  Integrating CashOver Business is seamless and hassle-free,
                  with a user-friendly interface that requires
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text070">
                  no extensive technical knowledge
                </span>
                <span> and ensures quick onboarding.</span>
                <br></br>
                <br></br>
                <span className="business-text074">
                  Scalable and compliant,
                </span>
                <span>
                  {' '}
                  CashOver Business grows with your needs, simplifying payroll,
                  taxes, and financial transactions.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="business-row08">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsatisfaction.mp4?alt=media&amp;token=0b4f6cb5-4c76-4f9e-aa0e-b6fd88a219f7"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video6"
          ></video>
          <div className="business-column14">
            <div className="business-column15">
              <h2 className="business-text076">
                <span>Employee Satisfaction</span>
                <br></br>
              </h2>
              <h3 className="business-text079">Timely Payments</h3>
              <p className="business-text080">
                <span>
                  Improve employee satisfaction with timely, reliable
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text082">salary payments</span>
                <span>.</span>
                <br></br>
                <br></br>
                <span>
                  Employees can
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text087">withdraw</span>
                <span>
                  {' '}
                  their salaries from ATMs or Agents or can pay with CashOver
                  app from stores and websites.
                </span>
                <br className="business-text089"></br>
                <br className="business-text090"></br>
                <span>
                  Enhance trust and transparency with clear,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text092">detailed e-payslips</span>
                <span> for employees.</span>
              </p>
            </div>
          </div>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Fsatisfaction.mp4?alt=media&amp;token=0b4f6cb5-4c76-4f9e-aa0e-b6fd88a219f7"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video7"
          ></video>
        </div>
        <div className="business-row09">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cashover-production.appspot.com/o/CashOver%20Website%20Videos%2Ffiles.mp4?alt=media&amp;token=091ed954-2d32-4771-a1c0-a0bd4c25e454"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="business-video8"
          ></video>
          <div className="business-column16">
            <div className="business-column17">
              <h2 className="business-text094">
                <span>All Round Financial Solution</span>
                <br></br>
              </h2>
              <h3 className="business-text097">Cost-Effective Fees</h3>
              <p className="business-text098">
                <span>
                  CashOver Business
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text100">reduces paperwork</span>
                <span>
                  {' '}
                  and streamlines file management by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text102">digitizing payroll</span>
                <span>
                  {' '}
                  and financial transactions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  No need for manual record-keeping, saving time and reducing
                  errors.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Enjoy organized,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="business-text110">easily accessible</span>
                <span>
                  {' '}
                  digital records that simplify audits and reporting.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQBusiness rootClassName="faq-business-root-class-name1"></FAQBusiness>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name4"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Business
