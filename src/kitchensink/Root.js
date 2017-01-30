import { Router, browserHistory } from 'ReactRouter'
import React, { Component, PropTypes } from 'react'
import { View } from 'jmui'
import getRoutes from './routes'
require('./styles/ios.less')

const routes = getRoutes();

export default class Root extends Component {

  render () {
    return (
      <View>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </View>
    )
  }
}
