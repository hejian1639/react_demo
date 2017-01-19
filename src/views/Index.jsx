define(function(require){
  var React = require('react');
  var jmui = require('jmui');

    var Index = React.createClass({


      render () {
        return (
          <jmui.Page
            fix
            navbar={<jmui.Navbar title='Kitchen Sink' />}>
          </jmui.Page>
        )
      }
    });
});