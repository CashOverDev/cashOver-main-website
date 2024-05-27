import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationBarGeneral from '../components/navigation-bar-general'
import FAQPersonal from '../components/faq-personal'
import FAQMerchant from '../components/faq-merchant'
import FAQBusiness from '../components/faq-business'
import FAQWorkWithUs from '../components/faq-work-with-us'
import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="FAQ - CashOver Pay | Ultimate Finance App"
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
      <NavigationBarGeneral rootClassName="navigation-bar-general-root-class-name3"></NavigationBarGeneral>
      <div className="faq-column">
        <div className="faq-column1">
          <div className="faq-column2">
            <h1 className="faq-text">Frequently asked questions</h1>
            <h2 className="faq-text1">
              Ask everything you need to know about our services. We are ready
              to answer all your inquiries.
            </h2>
          </div>
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path d="M853.333 768c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 256c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM554.667 298.667h128c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v261.376c-29.995 7.723-56.832 23.424-77.995 44.587-30.848 30.848-50.005 73.6-50.005 120.704s19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661c-21.205-21.205-48-36.864-77.995-44.587v-261.419c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM213.333 421.291v474.709c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-474.709c29.995-7.723 56.832-23.424 77.995-44.587 30.848-30.848 50.005-73.6 50.005-120.704s-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661c21.163 21.205 48 36.907 77.995 44.629z"></path>
          </svg>
        </div>
        <h2 className="faq-text2">CashOver Personal Account</h2>
        <FAQPersonal></FAQPersonal>
        <h2 className="faq-text3">CashOver Merchant Account</h2>
        <FAQMerchant rootClassName="faq-merchant-root-class-name1"></FAQMerchant>
        <h2 className="faq-text4">CashOver BUSINESS Account</h2>
        <FAQBusiness rootClassName="faq-business-root-class-name2"></FAQBusiness>
        <h2 className="faq-text5">CashOver AGENT PARTNER</h2>
        <FAQWorkWithUs rootClassName="faq-work-with-us-root-class-name1"></FAQWorkWithUs>
      </div>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name3"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default FAQ
