import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Support from './views/support'
import Signup from './views/signup'
import TermsOfService from './views/terms-of-service'
import Business from './views/business'
import OurFees from './views/our-fees'
import AgentATMHosting from './views/agent-atm-hosting'
import Merchant from './views/merchant'
import Page from './views/page'
import CashOverSDKs from './views/cash-over-sd-ks'
import Home from './views/home'
import Blog from './views/blog'
import FAQ from './views/faq'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Support} exact path="/support" />
        <Route component={Signup} exact path="/signup" />
        <Route component={TermsOfService} exact path="/terms-of-service" />
        <Route component={Business} exact path="/business" />
        <Route component={OurFees} exact path="/our-fees" />
        <Route component={AgentATMHosting} exact path="/agent-atm-hosting" />
        <Route component={Merchant} exact path="/merchant" />
        <Route component={Page} path="**" />
        <Route component={CashOverSDKs} exact path="/cash-over-sd-ks" />
        <Route component={Home} exact path="/" />
        <Route component={Blog} exact path="/blog" />
        <Route component={FAQ} exact path="/faq" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
