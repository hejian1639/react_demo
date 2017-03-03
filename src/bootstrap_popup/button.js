import React from 'react'
import 'css!bootstrap'
import 'css!bootstrap-theme'



var BootstrapButton = React.createClass({
  render: function () {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

export default BootstrapButton;

