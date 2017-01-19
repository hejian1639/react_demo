define(function(require){
 
  var React = require('react');
 
  require('css!bootstrap');
  require('css!bootstrap-theme');
 
    var BootstrapButton = React.createClass({
      render: function() {
        return (
          <a {...this.props}
            href="javascript:;"
            role="button"
            className={(this.props.className || '') + ' btn'} />
        );
      }
    });

  return BootstrapButton;
 
});
