import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'regenerator-runtime/runtime'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import './global/styles.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
