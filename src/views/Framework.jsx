define(function(require){
  var React = require('react');
  var jmui = require('jmui');

    var Framework = React.createClass({
      render: function() {
        return (
          <jmui.TransitionPages location={this.props.location}>
            {this.props.children}
          </jmui.TransitionPages>
        );
      }
    });

  return Framework;
    
});