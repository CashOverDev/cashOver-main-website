import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationBarHome from '../components/navigation-bar-home'
import FAQPersonal from '../components/faq-personal'
import ContactFormLight from '../components/contact-form-light'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="CashOver Pay | Ultimate Finance App"
        />
        <meta
          property="og:description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8b3094c7-7cdb-40f6-a719-0ee8bc9f46ba/26720046-ad39-491d-a735-a4cddb904657?org_if_sml=1&amp;force_format=original"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <NavigationBarHome rootClassName="navigation-bar-home-root-class-name"></NavigationBarHome>
      <header id="Personal" className="home-column">
        <div className="home-dummy"></div>
        <img alt="image" src="/hero.png" className="home-image" />
        <div className="home-row">
          <div className="home-column01">
            <h1 className="home-title">
              TRANSFER MONEY, CASH OUT &amp; DEPOSIT WITH NO FEES!
            </h1>
            <h2 className="home-subtitle">
              Not only can you exchange US Dollars and Lebanese Pound, but you
              can also trade cryptocurrencies at competitive market rates. Put
              those USDTs to work!
            </h2>
            <div className="home-stores">
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <img
                  alt="image"
                  src="/play-badge.png"
                  className="home-image01"
                />
              </a>
              <a
                href="https://overlab.io"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <img
                  alt="image"
                  src="/apple-badge.png"
                  className="home-image02"
                />
              </a>
            </div>
          </div>
          <img alt="image" src="/hero.png" className="home-phone-image" />
        </div>
        <div id="Services" className="home-row01">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="home-text">Scroll Down to Learn More</span>
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <main className="home-column02">
        <h2 className="home-text01">
          <span className="home-text02">Make What You Spend,</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text04">Well Spent</span>
        </h2>
        <img alt="image" src="/currencies%20box.png" className="home-image03" />
        <p className="home-text05">
          <span>
            Our services do not just span
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text07">regular-currencies</span>
          <span> but</span>
          <br></br>
          <span>
            also
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text11">cryptocurrencies</span>
          <span>, so that you can get the best of both worlds.</span>
        </p>
        <div className="home-row02">
          <div className="home-column03">
            <div className="home-box">
              <img alt="image" src="/send%20usd.png" className="home-image04" />
              <h2 className="home-text13">Send Money Like you</h2>
              <h2 className="home-text14">Send Messages.</h2>
              <h2 className="home-text15">Instantly</h2>
              <dd className="home-li list-item">
                <p className="home-text16">
                  Choose your currency of choice - USD, LBP, or USD₮
                </p>
              </dd>
              <dd className="home-li1 list-item">
                <p className="home-text17">Tap send to confirm</p>
              </dd>
              <h3 className="home-text18">
                <span className="home-text19">
                  No
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text20">limits</span>
                <span className="home-text21">
                  {' '}
                  and no
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text22">hidden</span>
                <span className="home-text23"> fees</span>
                <br></br>
              </h3>
              <h3 className="home-text25">
                <span className="home-text26">&quot;Even In Crypto&quot;</span>
                <br></br>
              </h3>
            </div>
          </div>
          <img alt="image" src="/send%20usd.png" className="home-image05" />
        </div>
      </main>
      <main className="home-column04">
        <h2 className="home-text28">
          <span className="home-text29">Your Wallet,</span>
          <span className="home-text30"> </span>
          <span className="home-text31">Your Money</span>
        </h2>
        <p className="home-text32">
          <span>
            Withdraw your LBP or USD balance anytime with a single tap. And yes,
            you can send your USDT balance 
          </span>
          <span>
            to external wallets. You
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text35">control</span>
          <span> everything!</span>
        </p>
        <img alt="image" src="/withdraw.png" className="home-image06" />
      </main>
      <main className="home-column05">
        <h2 className="home-text37">
          <span className="home-text38">
            BENEFIT FROM THOSE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text39">USDTs</span>
        </h2>
        <img alt="image" src="/buy%20sell.png" className="home-image07" />
        <p className="home-text40">
          <span>
            Secure your profit by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text42">selling</span>
          <span>
            {' '}
            your balance of USDT for
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text44">Fresh US Dollars.</span>
          <br></br>
          <span className="home-text46">Buy</span>
          <span>
            {' '}
            USDT for your future crypto investments at the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text48">lowest market rates.</span>
        </p>
        <div className="home-row03">
          <div className="home-column06">
            <div className="home-box1">
              <img alt="image" src="/send%20usd.png" className="home-image08" />
              <h2 className="home-text49">Receive USDT on your</h2>
              <h2 className="home-text50">CashOver Wallet</h2>
              <h2 className="home-text51">From</h2>
              <dd className="home-li2 list-item">
                <p className="home-text52">Anyone</p>
              </dd>
              <dd className="home-li3 list-item">
                <p className="home-text53">Anywhere</p>
              </dd>
              <dd className="home-li4 list-item">
                <p className="home-text54">Any Wallet</p>
              </dd>
              <h2 className="home-text55">
                <span>Or request any currency with your</span>
                <br></br>
              </h2>
              <h2 className="home-text58">
                <span className="home-text55">
                  &quot;Personal QR-Code&quot;
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <img alt="image" src="/my%20qr%20code.png" className="home-image09" />
        </div>
      </main>
      <main className="home-column07">
        <h2 className="home-text61">
          <span className="home-text62">
            SWAP? WE CALL IT
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text63">BUY</span>
          <span className="home-text64">
            {' '}
            &amp;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text65">SELL</span>
        </h2>
        <p className="home-text66">
          Turn your Crypto profit into real physical cash. Say goodbye to high
          fees and scammy dealers.
        </p>
        <div className="home-row04">
          <div className="home-row05">
            <img
              alt="image"
              src="/sell%20tether.png"
              className="home-image10"
            />
            <img alt="image" src="/buy%20tether.png" className="home-image11" />
          </div>
          <div className="home-column08">
            <h2 className="home-text67">Enjoy Tether to USD Swaps At Only</h2>
            <h3 className="home-text68">0.5%</h3>
            <p className="home-text69">
              <span className="home-text70">
                The
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text71">Lowest</span>
              <span className="home-text72"> Conversion Fee Ever.</span>
              <br className="home-text73"></br>
              <span className="home-text74">
                Lower Than
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text75">Any Platform</span>
              <span className="home-text76"> Out There.</span>
              <br className="home-text77"></br>
              <span className="home-text78">
                Use CashOver For
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text79">All Your Crypto</span>
              <span className="home-text80">.</span>
            </p>
          </div>
        </div>
      </main>
      <main className="home-column09">
        <div className="home-column10">
          <h2 className="home-text81">Choose What You Need</h2>
          <div className="home-row06">
            <a href="#Personal" className="home-link2">
              <div className="home-column11">
                <main className="home-column12">
                  <div className="home-row07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"></path>
                    </svg>
                    <h3 className="home-text82">Personal</h3>
                  </div>
                  <h4 className="home-text83">
                    Your personal account for all your personal needs
                  </h4>
                  <p className="home-text84">
                    With CashOver, handle daily tasks and shopping effortlessly.
                    Manage your finances, send and receive money seamlessly, and
                    exchange USDT for cash hassle-free.
                  </p>
                </main>
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
                </svg>
              </div>
            </a>
            <Link to="/merchant" className="home-navlink">
              <div className="home-column13">
                <div className="home-column14">
                  <div className="home-row08">
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
                    </svg>
                    <h3 className="home-text85">Merchant</h3>
                  </div>
                  <h4 className="home-text86">
                    scan, pay, receive. super fast!
                  </h4>
                  <p className="home-text87">
                    Manage your employees, track purchases, analyze income
                    sources, and secure your money. Benefit from a free product
                    list/menu of whatever you sell.
                  </p>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/business" className="home-navlink1">
              <div className="home-column15">
                <div className="home-column16">
                  <div className="home-row09">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
                    </svg>
                    <h3 className="home-text88">Business</h3>
                  </div>
                  <h4 className="home-text89">Enterprise Finance Management</h4>
                  <p className="home-text90">
                    Invoice salaries, track expenses and manage your taxes.
                    Ultra low fees, fast and secure invoicing system for up to
                    5000 employees.
                  </p>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="home-row10">
            <a href="#contactForm" className="home-link3">
              <div className="home-column17">
                <main className="home-column18">
                  <div className="home-row11">
                    <svg viewBox="0 0 1024 1024" className="home-icon16">
                      <path d="M384 682.667c0 23.564-19.103 42.667-42.667 42.667s-42.667-19.103-42.667-42.667c0-23.564 19.103-42.667 42.667-42.667 23.564 0 42.667 19.103 42.667 42.667z"></path>
                      <path d="M884.608 198.699c-16.725-16.128-43.221-16.085-59.691 0.384 16.512-16.469 16.555-43.008 0.427-59.733-45.995-33.792-102.613-54.016-164.011-54.016-153.173 0-277.333 124.16-277.333 277.333 0 5.504 0.981 10.752 1.323 16.171-14.379 10.197-123.435 91.605-181.675 140.843-48.427 42.24-75.648 101.333-75.648 162.987 0 117.632 95.701 213.333 213.333 213.333 62.507 0 121.771-27.733 162.603-76.117 50.048-58.667 131.413-167.381 141.525-180.437 5.12-0.427 10.368 0.555 15.872 0.555 153.173 0 277.333-124.16 277.333-277.333 0-61.44-20.224-118.016-54.059-163.968zM341.333 810.667c-70.656 0-128-57.301-128-128 0-39.253 18.048-73.899 45.397-97.792 101.035-85.419 154.325-117.248 218.24-171.307-4.48-16.299-7.637-33.152-7.637-50.901 0-106.027 85.973-192 192-192 20.053 0 38.997 3.925 57.131 9.643l-121.131 118.357 21.333 106.667 106.667 21.333 119.68-116.949c4.907 16.896 8.32 34.432 8.32 52.949 0 106.027-85.973 192-192 192-17.749 0-34.603-3.157-50.901-7.68-54.059 63.915-85.888 117.248-171.691 217.813-23.509 27.819-58.155 45.867-97.408 45.867zM827.051 267.563l-115.413 112.853-56.704-11.349-11.221-56.064 116.309-113.621c27.776 16.768 50.773 40.064 67.029 68.181z"></path>
                    </svg>
                    <h3 className="home-text91">Custom Finance Solutions</h3>
                  </div>
                  <h4 className="home-text92">
                    create your own finance system
                  </h4>
                  <p className="home-text93">
                    Our team will analyze your financial needs and tailor-make a
                    complete solution just for you. Consult with CashOver team
                    in order to fill the gaps with your business and take it to
                    the next level.
                  </p>
                </main>
                <svg viewBox="0 0 1024 1024" className="home-icon19">
                  <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
                </svg>
              </div>
            </a>
            <Link to="/cash-over-sdk" className="home-navlink2">
              <div className="home-column19">
                <div className="home-column20">
                  <div className="home-row12">
                    <svg
                      viewBox="0 0 1243.4285714285713 1024"
                      className="home-icon21"
                    >
                      <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
                    </svg>
                    <h3 className="home-text94">CashOver SDK</h3>
                  </div>
                  <h4 className="home-text95">Add CashOver on your platform</h4>
                  <p className="home-text96">
                    Accept payments, perform checkouts and analyze income
                    patterns. Implement CashOver SDK on your website or mobile
                    app in order to profit from your business and increase your
                    portfolio. Hassle-free simple code with clear documentation.
                  </p>
                </div>
                <svg viewBox="0 0 1024 1024" className="home-icon23">
                  <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
                </svg>
              </div>
            </Link>
          </div>
          <h1 className="home-text97">What are you waiting for?</h1>
          <h2 className="home-text98">
            Transform the way you handle your finances
          </h2>
          <div className="home-row13">
            <img
              alt="image"
              src="/cashover-200w.png"
              className="home-image12"
            />
            <Link to="/merchant" className="home-navlink3">
              <img
                alt="image"
                src="/cashover%20merchant-200h.png"
                className="home-image13"
              />
            </Link>
            <Link to="/business" className="home-navlink4">
              <img
                alt="image"
                src="/cashover%20business.png"
                className="home-image14"
              />
            </Link>
            <Link to="/cash-over-sdk" className="home-navlink5">
              <img
                alt="image"
                src="/cashover%20sdk.png"
                className="home-image15"
              />
            </Link>
          </div>
        </div>
      </main>
      <FAQPersonal rootClassName="faq-personal-root-class-name"></FAQPersonal>
      <ContactFormLight rootClassName="contact-form-light-root-class-name"></ContactFormLight>
      <Footer></Footer>
    </div>
  )
}

export default Home
