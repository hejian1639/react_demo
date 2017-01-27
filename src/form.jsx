
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'ReactRouter'


var containerStyle = { width: '500px' };

var headerStyle = {
  backgroundColor: '#99bbbb'
};

var menuStyle = {
  backgroundColor: '#ffff99',
  height: '200px',
  width: '150px',
  float: 'left'
};

var contentStyle = {
  backgroundColor: '#EEEEEE',
  height: '200px',
  width: '350px',
  float: 'left'
};

var footerStyle = {
  backgroundColor: '#99bbbb',
  clear: 'both',
  textAlign: 'center'
};

module.exports = React.createClass({
  handleClick: function (module) {
    window.require([module], function (App) {
      var app = new App();
      app.init();
    });
  },
  render: function () {
    return (
      <div >
        <form>
          名：
            <input type="text" name="firstname" style={{ margin: '10' }} />
          <br />
          姓：
            <input type="text" name="lastname" style={{ margin: '10' }} />
        </form>
        <br />
        <Link to="/">Go back to React Page 1</Link>
      </div>

    );
  }
});




