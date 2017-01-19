define(function(require){
 
  var React = require('react');
  var ReactDOM = require('react-dom');
  
  require('css!bootstrap');
  require('css!bootstrap-theme');

  require('css!antd');
  var antd = require('antd');
 
var Menu = antd.Menu;
var Icon = antd.Icon;
var SubMenu = Menu.SubMenu;
var Row = antd.Row;
var Col = antd.Col;
var Dropdown = antd.Dropdown;
 
  function App() {
    
    this.AppView = React.createClass({
      
      render() {
        var menu = (
          <Menu>
            <Menu.Item>
              <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
            </Menu.Item>
          </Menu>
        );
        return (
        <div>
        <Row type="flex" align="middle">
        <Col span={ 2 } style={{textAlign:'center', backgroundColor: '#2d547f'}} >
            <img alt='logo' src='pic_logo.png'/>
        </Col>
        <Col span={8}>
          <Menu mode="horizontal">
            <Menu.Item>
              总览
            </Menu.Item>
            <SubMenu title={<span>视频管理</span>}>
                <Menu.Item>视频概览</Menu.Item>
                <Menu.Item>视频列表</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>期刊管理</span>}>
                <Menu.Item>期刊概览</Menu.Item>
                <Menu.Item>期刊列表</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>web应用管理</span>}>
                <Menu.Item>web应用概览</Menu.Item>
                <Menu.Item>web应用列表</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>  
        <Col span={2} style={{textAlign:'center', borderBottom:'1px solid #e9e9e9'}} >
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                  帐户信息 <Icon type="down" />
                </span>
            </Dropdown>  
        </Col>
        </Row>
        </div>
        );
      },
    });
    
      this.init = function () {
        ReactDOM.render(<this.AppView />, document.getElementById('example'));
      };
  }

  return App;
 
});
