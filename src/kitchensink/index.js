import { browserHistory, Router } from 'react-router'
import getRoutes from './routes'
import React from 'react'
import ReactDOM from 'react-dom'
require('jmui/styles/ios/jmui.less')
require('./styles/ios.less')

const routes = getRoutes()

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('root')
)
