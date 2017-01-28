import { Router } from 'ReactRouter'
import React, { Component, PropTypes } from 'react'
import { View } from 'jmui'

export default class Root extends Component {

  render () {
    return (
      <View>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
      </View>
    )
  }
}
