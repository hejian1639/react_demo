import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component } from 'react'
import 'css!jmui.ios.core'

module.exports = class Header extends Component {



  render () {
    return (
        <Navbar title='我是标题' />
    )
  }
}
