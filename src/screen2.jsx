define(function(require){
 
  var React = require('react'); 
  var ReactDOM = require('react-dom');
 
  function App() {
    this.AppView = React.createClass({
      handleClick: function(module) {
          require([module], function(App){
              var app = new App();
              app.init();
          });
      },
      render: function () {
        return (
          <div style={{padding:'10'}}>
            <p>Hello, React Page 2!</p>
            <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/screen1')}>Go to React Page 1</a>
            <br/> 
            <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/layout1')}>Go to Layout1</a>
            <br/> 
            <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/layout2')}>Go to Layout2</a>
          </div>
        );
      }
    });
  }
 
  App.prototype.init = function () {
    ReactDOM.render(<this.AppView />, document.getElementById('example'));
  };
 
  return App;
 
});
