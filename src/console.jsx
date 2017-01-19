define(function(require){
 
  var React = require('react');
  var ReactDOM = require('react-dom');
  
  require('css!bootstrap');
  require('css!bootstrap-theme');

 
  function App() {
    
    this.AppView = React.createClass({

      showGerneral: function(){
        var general = (
          <div style={{textAlign:'center', padding:'60px 15px'}}>
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
          </div>);
        ReactDOM.render(general, document.getElementById('container'));
      },
      
      showVideo: function(tab) {
          require(['app/video'], function(App){
              var app = new App();
              app.init('container', tab);
          });
      },
      
      render: function () {
      
      
        return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <span className="navbar-brand">Fairlink</span>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><a href="javascript:void(0)" onClick={this.showGerneral}>总览</a></li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">视频管理<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)" onClick={this.showVideo.bind(this, 'general')}>视频概览</a></li>
                      <li><a href="javascript:void(0)" onClick={this.showVideo.bind(this, 'list')}>视频列表</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">期刊管理<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)">期刊概览</a></li>
                      <li><a href="javascript:void(0)">期刊列表</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">web应用管理<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="javascript:void(0)">web应用概览</a></li>
                      <li><a href="javascript:void(0)">web应用列表</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            
            <div id="container" className="container">
            </div>
        </div>
            
        );
      }
    });
    
      this.init = function () {
        var console = ReactDOM.render(<this.AppView />, document.getElementById('example'));
        console.showGerneral();
      };
  }

  return App;
 
});
