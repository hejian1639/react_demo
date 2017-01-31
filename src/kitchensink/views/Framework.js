import React, { Component, PropTypes } from 'react'
import { View, TransitionPages } from 'jmui'

export default class Framework extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  render () {
    return (
      <View>
        <TransitionPages location={this.props.location}>
          {this.props.children}
        </TransitionPages>
      </View>
    )
  }
}
