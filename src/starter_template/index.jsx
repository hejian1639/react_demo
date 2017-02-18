
import React from 'react'

import 'css!bootstrap'
import 'css!bootstrap-theme'



module.exports = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired,
    },

    handleClick: function (module) {
        this.context.router.push({
            pathname: '/',
        })
    },

    render: function () {
        return (
            <div style={{ paddingTop: '50px' }}>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="javascript:void(0)">Project name</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="javascript:void(0)" onClick={this.handleClick}>Home</a></li>
                                <li><a href="javascript:void(0)">About</a></li>
                                <li><a href="javascript:void(0)">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

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




