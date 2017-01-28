
import React , { Component, PropTypes } from 'react'
import { Link } from 'ReactRouter'

export default class Screen2 extends Component {
  render() {
    return (
      <div style={{ padding: '10' }}>
        <p>Hello, React Page 2!</p>
        <Link to="/">Go back to React Page 1</Link>
      </div>
    );
  }
}



