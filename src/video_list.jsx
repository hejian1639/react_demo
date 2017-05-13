define(function(require){
 
  var React = require('react');
  var ReactDOM = require('react-dom');
  
  require('css!bootstrap');
  require('css!bootstrap-theme');

 
  function App() {
 

    this.AppView = React.createClass({

      showGeneral: function() {
        var storageStyle = {backgroundColor: '#e0e0e0', borderRadius:'12px', padding: '0 10px', };
        var storageStyle1 = {backgroundColor: '#e0e0e0', borderRadius:'12px', padding: '0 10px', marginLeft: '24px',};
        ReactDOM.render(
        <div>
            <h2 className="page-header">视频概览</h2>
            <h3>视频存储空间</h3>
            <div>
				<span style={storageStyle}>存储空间：<span>无限制</span></span>
				<span style={storageStyle1}>已用存储空间：<span>150G</span></span>
			</div>
            <div>
			<h3>视频存储空间</h3>
			<div className="classify">
				<div style={{backgroundColor: '#f1c86e', width: '20%'}}>
					<span className="all_img"></span>
					<span>全部</span>
					<i className="hr"></i>
					<span id="total" className="nums">1</span>
				</div>
				<div className="class_div has">
					<span className="has_img"></span>
					<span>已发布</span>
					<i className="hr"></i>
					<span id="release" className="nums">1</span>
				</div>
				<div className="class_div check">
					<span className="check_img"></span>
					<span>审核中</span>
					<i className="hr"></i>
					<span id="approving" className="nums">0</span>
				</div>
				<div className="class_div check_no">
					<span className="check_no_img"></span>
					<span>未过审</span>
					<i className="hr"></i>
					<span id="refuse" className="nums">0</span>
				</div>
				<div className="class_div not">
					<span className="not_img"></span>
					<span>未发布</span>
					<i className="hr"></i>
					<span id="not-release" className="nums">0</span>
				</div>
				<div className="class_div down">
					<span className="down_img"></span>
					<span>已下架</span>
					<i className="hr"></i>
					<span id="shelve" className="nums">0</span>
				</div>
				<div className="class_div del">
					<span className="del_img"></span>
					<span>已删除</span>
					<i className="hr"></i>
					<span id="delete" className="nums">0</span>
				</div>
			</div>
            </div>
        </div>, document.getElementById('content'));
      },

      showList: function() {
        ReactDOM.render(<h2 className="page-header">视频管理</h2>, document.getElementById('content'));
      },
      
      render: function () {
        var imgStyle = {display: 'inline-block', borderRadius: '50%'};
      
        return (
          <div className="row">
            <div className="col-sm-3 col-md-2"  
            style={{position: 'fixed', top: '51px', bottom: '0', left: '0', display: 'block', padding: '20px', 
            overflowX: 'hidden', overflowY: 'auto', backgroundColor: '#f5f5f5', borderRight: '1px solid #eee'}}>
              <ul className="nav nav-sidebar">
                <li className="active"><h3>视频管理 <span className="sr-only">(current)</span></h3></li>
                <li><hr></hr></li>
                <li><a href="javascript:void(0)" onClick={this.showGeneral}>视频概览</a></li>
                <li><a href="javascript:void(0)" onClick={this.showList}>视频列表</a></li>
              </ul>
            </div>
            <div id="content" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2" style={{padding: '20px'}}>

            </div>
          </div>
            
        );
      }
    });
    
      this.init = function (id, tab) {
        var video = ReactDOM.render(<this.AppView />, document.getElementById(id));
        switch(tab){
        case 'general':
            video.showGeneral();
            break;
        case 'list':
            video.showList();
            break;
        default:
            break;
        }
      };
  }

  return App;
 
});
