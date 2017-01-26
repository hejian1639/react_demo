
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'ReactRouter'

module.exports = React.createClass({
  handleClick: function (module) {
    window.require([module], function (App) {
      var app = new App();
      app.init();
    });
  },
  render: function () {
    return (
      <div style={{ padding: '10' }}>
        <p>Hello, React Page 2!</p>
        <Link to="/">Go back to React Page 1</Link>
      </div>
    );
  }
});



