import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './style.css'
import Support from './views/support'
import Signup from './views/signup'
import TermsOfService from './views/terms-of-service'
import Business from './views/business'
import CashOverFees from './views/cash-over-fees'
import WorkWithUs from './views/work-with-us'
import Merchant from './views/merchant'
import Page from './views/page'
import CashOverSDK from './views/cash-over-sdk'
import Home from './views/home'
import Blog from './views/blog'
import FAQ from './views/faq'
import ScrollToTop from './utils/reset_scroll'

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route component={Support} exact path="/support" />
        <Route component={Signup} exact path="/signup" />
        <Route component={TermsOfService} exact path="/terms-of-service" />
        <Route component={Business} exact path="/business" />
        <Route component={CashOverFees} exact path="/cash-over-fees" />
        <Route component={WorkWithUs} exact path="/work-with-us" />
        <Route component={Merchant} exact path="/merchant" />
        <Route component={CashOverSDK} exact path="/cash-over-sdk" />
        <Route component={Home} exact path="/" />
        <Route component={Blog} exact path="/blog" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={Page} path="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
