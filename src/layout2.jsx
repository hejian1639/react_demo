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
        <div >
            <table width="500" border="0">
                <tr>
                <td colSpan="2" style={{backgroundColor:'#99bbbb'}}>
                    <h1>Main Title of Web Page</h1>
                </td>
                </tr>
                <tr valign="top">
                <td style={{backgroundColor:'#ffff99',width:'100px',textAlign:'top'}}>
                    <b>Menu</b><br/>
                    HTML<br/>
                    CSS<br/>
                    JavaScript
                </td>
                <td style={{backgroundColor:'#EEEEEE',height:'200px',width:'400px',textAlign:'top'}}>
                    Content goes here
                </td>
                </tr>
                <tr>
                <td colSpan="2" style={{backgroundColor:'#99bbbb',textAlign:'center'}}>
                    Copyright W3School.com.cn
                </td>
                </tr>
                
            </table>            
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
