
// import React , { Component, PropTypes } from 'react'
import { Link } from 'ReactRouter'
import React from 'react'

export default class Screen2 extends React.Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <p>Hello, React Page 2!</p>
        <Link to="/">Go back to React Page 1</Link>
      </div>
    );
  }
}



