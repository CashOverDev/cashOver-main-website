import React from 'react'

import { Helmet } from 'react-helmet'

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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8b3094c7-7cdb-40f6-a719-0ee8bc9f46ba/ccd6fb98-7341-44f7-9ed0-1111ae5917eb?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="/cashover%20banner%20light-1500h.png"
          className="home-image"
        />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <span className="home-text">
              <span className="home-text01">Services</span>
              <br></br>
            </span>
            <span className="home-text03">Become Agent</span>
            <span className="home-text04">Business</span>
            <span className="home-text05">Support</span>
            <span className="home-text06">Careers</span>
          </nav>
          <div className="home-buttons">
            <button className="home-login button">Login</button>
            <button className="home-register button">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <span className="home-text07">About</span>
              <span className="home-text08">Features</span>
              <span className="home-text09">Pricing</span>
              <span className="home-text10">Team</span>
              <span className="home-text11">Blog</span>
            </nav>
            <div className="home-buttons1">
              <button className="home-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-column">
        <img alt="image" src="/hero.png" className="home-image01" />
        <div className="home-row">
          <div className="home-column01">
            <span className="home-title">
              TRANSFER MONEY, CASH OUT &amp; DEPOSIT WITH NO FEES!
            </span>
            <span className="home-subtitle">
              Not only can you exchange US Dollars and Lebanese Pound, but you
              can also trade cryptocurrencies at competitive market rates. Put
              those USDTs to work!
            </span>
            <div className="home-stores">
              <img alt="image" src="/play-badge.png" className="home-image02" />
              <img
                alt="image"
                src="/apple-badge.png"
                className="home-image03"
              />
            </div>
          </div>
          <img alt="image" src="/hero.png" className="home-phone-image" />
        </div>
        <div className="home-row01">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="home-text12">Scroll Down to Learn More</span>
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </div>
      <div className="home-column02">
        <span className="home-text13">
          <span>
            Make What You Spend,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text15">Well Spent</span>
        </span>
        <img alt="image" src="/currencies%20box.png" className="home-image04" />
        <span className="home-text16">
          <span>
            Our services do not just span
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text18">regular-currencies</span>
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
          <span className="home-text22">cryptocurrencies</span>
          <span>, so that you can get the best of both worlds.</span>
        </span>
        <div className="home-row02">
          <div className="home-column03">
            <img alt="image" src="/send%20usd.png" className="home-image05" />
            <span className="home-text24">Send Money Like you</span>
            <span className="home-text25">Send Messages.</span>
            <span className="home-text26">Instantly</span>
            <dd className="home-li list-item">
              <span className="home-text27">
                Choose your currency of choice - USD, LBP, or USD₮
              </span>
            </dd>
            <dd className="home-li1 list-item">
              <span className="home-text28">Tap send to confirm</span>
            </dd>
            <span className="home-text29">
              <span className="home-text30">
                No
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text31">limits</span>
              <span className="home-text32">
                {' '}
                and no
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text33">hidden</span>
              <span className="home-text34"> fees</span>
              <br></br>
            </span>
            <span className="home-text36">
              <span className="home-text37">&quot;Even In Crypto&quot;</span>
              <br></br>
            </span>
          </div>
          <img alt="image" src="/send%20usd.png" className="home-image06" />
        </div>
      </div>
      <div className="home-column04">
        <span className="home-text39">
          <span className="home-text40">Your Wallet,</span>
          <span className="home-text41"> </span>
          <span className="home-text42">Your Money</span>
        </span>
        <span className="home-text43">
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
          <span className="home-text46">control</span>
          <span> everything!</span>
        </span>
        <img alt="image" src="/withdraw.png" className="home-image07" />
      </div>
      <div className="home-column05">
        <span className="home-text48">
          <span>
            BENEFIT FROM THOSE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text50">USDTs</span>
        </span>
        <img alt="image" src="/buy%20sell.png" className="home-image08" />
        <span className="home-text51">
          <span>
            Secure your profit by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text53">selling</span>
          <span>
            {' '}
            your balance of USDT for
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text55">Fresh US Dollars.</span>
          <br></br>
          <br></br>
          <span className="home-text58">Buy</span>
          <span>
            {' '}
            USDT for your future crypto investments at the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text60">lowest market rates.</span>
        </span>
        <div className="home-row03">
          <div className="home-column06">
            <img alt="image" src="/send%20usd.png" className="home-image09" />
            <span className="home-text61">
              <span className="home-text62">
                Receive
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text63">USDT</span>
              <span className="home-text64"> On Your</span>
              <br></br>
            </span>
            <span className="home-text66">CashOver Wallet</span>
            <span className="home-text67">From</span>
            <dd className="home-li2 list-item">
              <span className="home-text68">Anyone</span>
            </dd>
            <dd className="home-li3 list-item">
              <span className="home-text69">Anywhere</span>
            </dd>
            <dd className="home-li4 list-item">
              <span className="home-text70">Any Wallet</span>
            </dd>
            <span className="home-text71">
              <span>Or request any currency with your</span>
              <br></br>
            </span>
            <span className="home-text74">
              <span className="home-text75">&quot;Personal QR-Code&quot;</span>
              <br></br>
            </span>
          </div>
          <img alt="image" src="/my%20qr%20code.png" className="home-image10" />
        </div>
      </div>
      <div className="home-column07">
        <span className="home-text77">
          <span>
            SWAP? WE CALL IT
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text79">BUY &amp; SELL</span>
        </span>
        <div className="home-row04">
          <div className="home-row05">
            <img
              alt="image"
              src="/sell%20tether-500h.png"
              className="home-image11"
            />
            <img
              alt="image"
              src="/buy%20tether-500h.png"
              className="home-image12"
            />
          </div>
          <div className="home-column08">
            <span className="home-text80">
              Effortless, Instant and Secure! 
            </span>
          </div>
        </div>
      </div>
      <div className="home-column09">
        <span className="home-text81">Choose What You Need</span>
        <div className="home-row06">
          <div className="home-column10">
            <div className="home-column11">
              <div className="home-row07">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14"
                >
                  <path d="M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"></path>
                </svg>
                <span className="home-text82">Personal</span>
              </div>
              <span className="home-text83">
                Your personal account for all your personal needs
              </span>
              <span className="home-text84">
                With CashOver, handle daily tasks and shopping effortlessly.
                Manage your finances, send and receive money seamlessly, and
                exchange USDT for cash hassle-free.
              </span>
            </div>
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
            </svg>
          </div>
          <div className="home-column12">
            <div className="home-column13">
              <div className="home-row08">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
                </svg>
                <span className="home-text85">Merchant</span>
              </div>
              <span className="home-text86">
                scan, pay, receive. super fast!
              </span>
              <span className="home-text87">
                Manage your employees, track purchases, analyze income sources,
                and secure your money. Benefit from a free product list/menu of
                whatever you sell.
              </span>
            </div>
            <svg viewBox="0 0 1024 1024" className="home-icon20">
              <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
            </svg>
          </div>
          <div className="home-column14">
            <div className="home-column15">
              <div className="home-row09">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
                </svg>
                <span className="home-text88">Business</span>
              </div>
              <span className="home-text89">Enterprise Finance Management</span>
              <span className="home-text90">
                Invoice salaries, track expenses and manage your taxes. Ultra
                low fees, fast and secure invoicing system for up to 5000
                employees.
              </span>
            </div>
            <svg viewBox="0 0 1024 1024" className="home-icon24">
              <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
