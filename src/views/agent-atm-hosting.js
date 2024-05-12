import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FAQAgentATM from '../components/faq-agent-atm'
import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './agent-atm-hosting.css'

const AgentATMHosting = (props) => {
  return (
    <div className="agent-atm-hosting-container">
      <Helmet>
        <title>Agent-ATM-Hosting - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Agent-ATM-Hosting - CashOver Pay | Ultimate Finance App"
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
      <header
        data-thq="thq-navbar"
        className="agent-atm-hosting-navigation-bar-home"
      >
        <img
          alt="logo"
          src="/cashover%20banner%20light.png"
          className="agent-atm-hosting-image"
        />
        <div
          data-thq="thq-navbar-nav"
          className="agent-atm-hosting-desktop-menu"
        >
          <nav className="agent-atm-hosting-links">
            <Link to="/" className="agent-atm-hosting-navlink">
              <span className="agent-atm-hosting-text">Services</span>
              <br></br>
            </Link>
            <Link
              to="/agent-atm-hosting"
              className="agent-atm-hosting-navlink1"
            >
              Become Agent
            </Link>
            <span className="agent-atm-hosting-text02">Business</span>
            <span className="agent-atm-hosting-text03">Support</span>
            <a
              href="https://overlab.io"
              target="_blank"
              rel="noreferrer noopener"
              className="agent-atm-hosting-link"
            >
              Careers
            </a>
          </nav>
          <div className="agent-atm-hosting-buttons">
            <button type="button" className="agent-atm-hosting-login button">
              Login
            </button>
            <button className="agent-atm-hosting-register button">
              Register
            </button>
          </div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="agent-atm-hosting-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="agent-atm-hosting-mobile-menu"
        >
          <div className="agent-atm-hosting-nav">
            <div className="agent-atm-hosting-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="agent-atm-hosting-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="agent-atm-hosting-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="agent-atm-hosting-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="agent-atm-hosting-links1">
              <span className="agent-atm-hosting-text04">About</span>
              <span className="agent-atm-hosting-text05">Features</span>
              <span className="agent-atm-hosting-text06">Pricing</span>
              <span className="agent-atm-hosting-text07">Team</span>
              <span className="agent-atm-hosting-text08">Blog</span>
            </nav>
            <div className="agent-atm-hosting-buttons1">
              <button className="agent-atm-hosting-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="agent-atm-hosting-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="agent-atm-hosting-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="agent-atm-hosting-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <header className="agent-atm-hosting-column">
        <h1 className="agent-atm-hosting-text09">
          Become a CashOver PARTNER Now!
        </h1>
        <div className="agent-atm-hosting-container1">
          <div className="agent-atm-hosting-row">
            <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon10">
              <path d="M682.667 810.667c-34.219 0-66.347-13.312-90.539-37.504l-80.128-80.171-80.171 80.171c-48.341 48.341-132.651 48.341-181.035 0-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l80.128-80.128-80.128-80.171c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l80.128 80.171 80.171-80.171c48.341-48.341 132.651-48.341 181.035 0 24.149 24.149 37.461 56.32 37.461 90.496s-13.312 66.347-37.504 90.539l-80.128 80.128 80.128 80.171c24.192 24.149 37.504 56.32 37.504 90.496s-13.312 66.347-37.504 90.539c-24.149 24.149-56.277 37.461-90.496 37.461zM512 572.331l140.501 140.501c16.128 16.128 44.245 16.085 60.331 0 8.064-8.064 12.501-18.731 12.501-30.165s-4.437-22.101-12.501-30.165l-140.459-140.501 140.459-140.501c8.064-8.064 12.501-18.773 12.501-30.165s-4.437-22.101-12.501-30.165c-16.128-16.171-44.245-16.128-60.331-0.043l-140.501 140.544-140.501-140.501c-16.128-16.128-44.245-16.085-60.331 0-8.064 8.064-12.501 18.773-12.501 30.165s4.437 22.101 12.501 30.165l140.459 140.501-140.459 140.501c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l140.501-140.544z"></path>
            </svg>
            <h2 className="agent-atm-hosting-text10">
              <span>
                Or put a CashOver
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="agent-atm-hosting-text12">ATM</span>
              <span> at Your Store</span>
            </h2>
            <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon12">
              <path d="M682.667 810.667c-34.219 0-66.347-13.312-90.539-37.504l-80.128-80.171-80.171 80.171c-48.341 48.341-132.651 48.341-181.035 0-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l80.128-80.128-80.128-80.171c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l80.128 80.171 80.171-80.171c48.341-48.341 132.651-48.341 181.035 0 24.149 24.149 37.461 56.32 37.461 90.496s-13.312 66.347-37.504 90.539l-80.128 80.128 80.128 80.171c24.192 24.149 37.504 56.32 37.504 90.496s-13.312 66.347-37.504 90.539c-24.149 24.149-56.277 37.461-90.496 37.461zM512 572.331l140.501 140.501c16.128 16.128 44.245 16.085 60.331 0 8.064-8.064 12.501-18.731 12.501-30.165s-4.437-22.101-12.501-30.165l-140.459-140.501 140.459-140.501c8.064-8.064 12.501-18.773 12.501-30.165s-4.437-22.101-12.501-30.165c-16.128-16.171-44.245-16.128-60.331-0.043l-140.501 140.544-140.501-140.501c-16.128-16.128-44.245-16.085-60.331 0-8.064 8.064-12.501 18.773-12.501 30.165s4.437 22.101 12.501 30.165l140.459 140.501-140.459 140.501c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l140.501-140.544z"></path>
            </svg>
          </div>
        </div>
        <div className="agent-atm-hosting-row01">
          <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon14">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="agent-atm-hosting-text14">
            Scroll Down to Discover The Benefits
          </span>
          <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon16">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <main className="agent-atm-hosting-column01">
        <h2 className="agent-atm-hosting-text15">
          <span className="agent-atm-hosting-text16">
            Choose what you need!
          </span>
          <br></br>
        </h2>
        <p className="agent-atm-hosting-text18">
          <span>
            CashOver allows you to host an
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="agent-atm-hosting-text20">ATM machine</span>
          <span> at your location.</span>
          <br></br>
          <span>
            You can become an exclusive
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="agent-atm-hosting-text24">CashOver Agent.</span>
          <br></br>
        </p>
        <div className="agent-atm-hosting-row02">
          <img
            alt="image"
            src="/store.png"
            className="agent-atm-hosting-image1"
          />
          <img
            alt="image"
            src="/credit_card.png"
            className="agent-atm-hosting-image2"
          />
        </div>
      </main>
      <main className="agent-atm-hosting-column02">
        <img
          alt="image"
          src="/cashover-200w.webp"
          className="agent-atm-hosting-image3"
        />
        <h2 className="agent-atm-hosting-text26">
          <span className="agent-atm-hosting-text27">DIscover the perks!</span>
          <br></br>
        </h2>
        <p className="agent-atm-hosting-text29">
          <span>
            Learn more about the benefits that you can get when working with us.
          </span>
          <br></br>
        </p>
      </main>
      <main className="agent-atm-hosting-column03">
        <div className="agent-atm-hosting-row03">
          <span className="agent-atm-hosting-text32">01</span>
          <div className="agent-atm-hosting-column04">
            <h2 className="agent-atm-hosting-text33">ATM HOSTING</h2>
            <span className="agent-atm-hosting-text34">Recommended</span>
          </div>
        </div>
        <div className="agent-atm-hosting-row04">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxtb25leXxlbnwwfHx8fDE3MTUzODAwMzR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
            loading="eager"
            className="agent-atm-hosting-image4"
          />
          <div className="agent-atm-hosting-column05">
            <h3 className="agent-atm-hosting-text35">Earn Income</h3>
            <p className="agent-atm-hosting-text36">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
        </div>
        <div className="agent-atm-hosting-row05">
          <div className="agent-atm-hosting-column06">
            <h3 className="agent-atm-hosting-text37">Earn Income</h3>
            <p className="agent-atm-hosting-text38">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxtb25leXxlbnwwfHx8fDE3MTUzODAwMzR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
            loading="eager"
            className="agent-atm-hosting-image5"
          />
        </div>
        <div className="agent-atm-hosting-row06">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxtb25leXxlbnwwfHx8fDE3MTUzODAwMzR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
            loading="eager"
            className="agent-atm-hosting-image6"
          />
          <div className="agent-atm-hosting-column07">
            <h3 className="agent-atm-hosting-text39">Earn Income</h3>
            <p className="agent-atm-hosting-text40">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
        </div>
        <div className="agent-atm-hosting-row07">
          <div className="agent-atm-hosting-column08">
            <h3 className="agent-atm-hosting-text41">Earn Income</h3>
            <p className="agent-atm-hosting-text42">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxtb25leXxlbnwwfHx8fDE3MTUzODAwMzR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
            loading="eager"
            className="agent-atm-hosting-image7"
          />
        </div>
      </main>
      <main className="agent-atm-hosting-column09">
        <div className="agent-atm-hosting-row08">
          <span className="agent-atm-hosting-text43">02</span>
          <h2 className="agent-atm-hosting-text44">CASHOVER AGENT</h2>
        </div>
        <div className="agent-atm-hosting-row09">
          <div className="agent-atm-hosting-container2">
            <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon18">
              <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
            </svg>
            <h2 className="agent-atm-hosting-text45">Earn Commisions</h2>
            <p className="agent-atm-hosting-text46">
              Gain access to a steady stream of commissions and fees for every
              money transaction processed through your store, bolstering your
              bottom line.
            </p>
          </div>
          <div className="agent-atm-hosting-container3">
            <svg viewBox="0 0 1024 1024" className="agent-atm-hosting-icon20">
              <path d="M896 597.333h-256c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h256c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
              <path d="M768 725.333c-23.595 0-42.667-19.115-42.667-42.667v-256c0-23.552 19.072-42.667 42.667-42.667s42.667 19.115 42.667 42.667v256c0 23.552-19.072 42.667-42.667 42.667z"></path>
              <path d="M384 256c70.571 0 128 57.429 128 128s-57.429 128-128 128-128-57.429-128-128 57.429-128 128-128M384 170.667c-117.931 0-213.333 95.488-213.333 213.333s95.403 213.333 213.333 213.333 213.333-95.488 213.333-213.333-95.403-213.333-213.333-213.333z"></path>
              <path d="M384 725.333c86.229 0 140.843 32.896 161.408 61.653-29.141 11.093-84.011 23.68-161.408 23.68-84.651 0-136.789-13.013-162.901-23.125 19.584-30.507 75.819-62.208 162.901-62.208M384 640c-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333s-100.437-170.667-256-170.667z"></path>
            </svg>
            <h2 className="agent-atm-hosting-text47">Drive More Traffic</h2>
            <p className="agent-atm-hosting-text48">
              CashOver services attract a diverse customer base. This means
              increased foot traffic to your store, potentially leading to
              higher sales of your existing products and services.
            </p>
          </div>
        </div>
      </main>
      <FAQAgentATM rootClassName="faq-agent-atm-root-class-name"></FAQAgentATM>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default AgentATMHosting
