import React, { Component, PropTypes } from 'react'
import { TransitionPages } from 'jmui'

export default class Framework extends Component {


  render () {
    return (
      <TransitionPages location={this.props.location}>
      </TransitionPages>
    )
  }
}
