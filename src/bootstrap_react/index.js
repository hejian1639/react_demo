
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import 'css!bootstrap'
import 'css!bootstrap-theme'
import $ from 'jquery'


export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired,
    },
    getInitialState: function () {
        console.log('getInitialState');
        return { activeKey: 1 };
    },
    componentWillMount: function () {
        $('#pageLoading').hide();
    },
    
    handleClick: function (path) {
        this.context.router.push({
            pathname: path,
        })
    },

    handleSelect: function(selectedKey) {
        console.log('selected ' + selectedKey);
        this.setState({activeKey: selectedKey});
    },

    render: function () {
        return (
            <div >
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="javascript:void(0)" onClick={this.handleClick.bind(this, '/')}>React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        <NavItem eventKey={1} >最大</NavItem>
                        <NavItem eventKey={2} >最小</NavItem>
                        <NavItem eventKey={3} >平均值</NavItem>
                    </Nav>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem>
                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">

                    <div style={{ textAlign: 'center', padding: '40px 15px' }}>
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
                    </div>

                </div>
            </div>

        );
    }
});




