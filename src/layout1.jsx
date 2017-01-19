define(function(require){
 
  var React = require('react');
  var ReactDOM = require('react-dom');
 
  function App() {
  
    var containerStyle = {width:'500px'};
  
    var headerStyle = {
      backgroundColor:'#99bbbb'
    };
    
    var menuStyle = {
        backgroundColor:'#ffff99',
        height:'200px',
        width:'150px',
        float:'left'
    };
    
    var contentStyle = {
        backgroundColor:'#EEEEEE',
        height:'200px',
        width:'350px',
        float:'left'
    };

    var footerStyle = {
        backgroundColor:'#99bbbb',
        clear:'both',
        textAlign:'center'
    };

    this.AppView = React.createClass({
      handleClick: function(module) {
          require([module], function(App){
              var app = new App();
              app.init();
          });
      },
      render: function () {
        return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={{marginBottom:'0'}} >Main Title of Web Page</h1>
            </div>
            <div style={menuStyle}>
                <h2 style={{marginBottom:'0',fontSize:'18px'}}>Menu</h2>
                <ul style={{margin:'0'}}> 
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li> 
                </ul>
            </div>
            <div style={contentStyle}>Content goes here</div>

            <div style={footerStyle}>Copyright W3School.com.cn</div>

            <br />
            <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/screen1')}>Go to React Page 1</a>
                       
        </div>
            
        );
      }
    });
    
      this.init = function () {
        ReactDOM.render(<this.AppView />, document.getElementById('example'));
      };
  }

  return App;
 
});
