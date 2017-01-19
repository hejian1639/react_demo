define(['require', 'css!table'], function(require){
 
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
            <table id="customers">
            <tbody>
                <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                </tr>

                <tr>
                <td>Apple</td>
                <td>Steven Jobs</td>
                <td>USA</td>
                </tr>

                <tr className="alt">
                <td>Baidu</td>
                <td>Li YanHong</td>
                <td>China</td>
                </tr>

                <tr>
                <td>Google</td>
                <td>Larry Page</td>
                <td>USA</td>
                </tr>

                <tr className="alt">
                <td>Lenovo</td>
                <td>Liu Chuanzhi</td>
                <td>China</td>
                </tr>

                <tr>
                <td>Microsoft</td>
                <td>Bill Gates</td>
                <td>USA</td>
                </tr>

                <tr className="alt">
                <td>Nokia</td>
                <td>Stephen Elop</td>
                <td>Finland</td>
                </tr>

            </tbody>

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
