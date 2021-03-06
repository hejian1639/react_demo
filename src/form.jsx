
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


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

export default React.createClass({
  handleClick: function (module) {
    window.require([module], function (App) {
      var app = new App();
      app.init();
    });
  },
  render: function () {
    return (
      <div style={{ margin: '10px' }}>
        <form>
          名：
            <input type="text" name="firstname" style={{ margin: '10px' }} />
          <br />
          姓：
            <input type="text" name="lastname" style={{ margin: '10px' }} />
        </form>
        <br />
        <Link to="/">Go back to React Page 1</Link>
      </div>

    );
  }
});




