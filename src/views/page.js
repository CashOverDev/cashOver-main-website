import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationBarGeneral from '../components/navigation-bar-general'
import Footer from '../components/footer'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Page - CashOver Pay | Ultimate Finance App"
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
      <NavigationBarGeneral rootClassName="navigation-bar-general-root-class-name"></NavigationBarGeneral>
      <div className="page-column">
        <span className="page-text">404</span>
        <div className="page-row">
          <svg viewBox="0 0 1024 1024" className="page-icon">
            <path d="M64 0h384v64h-384zM576 0h384v64h-384zM952 320h-56v-256h-256v256h-256v-256h-256v256h-56c-39.6 0-72 32.4-72 72v560c0 39.6 32.4 72 72 72h304c39.6 0 72-32.4 72-72v-376h128v376c0 39.6 32.4 72 72 72h304c39.6 0 72-32.4 72-72v-560c0-39.6-32.4-72-72-72zM348 960h-248c-19.8 0-36-14.4-36-32s16.2-32 36-32h248c19.8 0 36 14.4 36 32s-16.2 32-36 32zM544 512h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32h64c17.6 0 32 14.4 32 32s-14.4 32-32 32zM924 960h-248c-19.8 0-36-14.4-36-32s16.2-32 36-32h248c19.8 0 36 14.4 36 32s-16.2 32-36 32z"></path>
          </svg>
          <span className="page-text1">
            Looks Like this page doesn&apos;t exist
          </span>
        </div>
        <span className="page-text2">Go back Home and continue exploring</span>
        <Link to="/" className="page-navlink button">
          Home
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Page
