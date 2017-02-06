
import React from 'react'
import { Link } from 'ReactRouter'

import './style.css'



module.exports = React.createClass({

    componentWillMount: function () { 
        console.log('componentWillMount');
    },

    getInitialState: function () {
        console.log('getInitialState');
        return { degree: 0, hovered: false };
    },

    timerId: null,

    componentDidMount: function () {
        console.log('componentDidMount');
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        // $(this.refs.autocomplete).autocomplete({
        //     source: availableTags
        // });


        var self = this;

        this.timerId = setInterval(function () {
            self.setState({ degree: self.state.degree + 1 });
        }, 50);

    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    },
    handleClick: function (module) {
        window.require([module], function (App) {
            var app = new App();
            app.init();
        });
    },
    openModal: function () {
        this.refs.modal.open();
    },
    closeModal: function () {
        this.refs.modal.close();
    },
    handleModalDidClose: function () {
        console.log("The modal has been dismissed!");
    },
    handleCancel: function () {
        if (confirm('Are you sure you want to cancel?')) {
            this.refs.modal.close();
        }
    },
    rotate: function () {
        console.log(this.state.degree);

        this.setState({ degree: this.state.degree + 5 });

        console.log(this.state.degree);
        //        this.forceUpdate();
    },

    appendOption: function () {
        var $option = $("<option value='longOption'>longOption</option>");
        $(this.refs.selector).append($option);
        //$("#selector").append($option);      

    },

    style: function () {
        if (this.state.hovered) {
            return { background: 'red', width: '300px', height: '200px', transition: 'background 2s, width 2s, height 2s' };
        } else {
            return { background: 'yellow', width: '100px', height: '100px', transition: 'background 2s, width 2s, height 2s' };
        }
    },
    onMouseEnter: function () {
        this.setState({ hovered: true });
    },

    onMouseLeave: function () {
        this.setState({ hovered: false });
    },


    render: function () {
        console.log('render');

        var rotateStyle = {
            margin: '30px',
            width: '100px',
            height: '75px',
            backgroundColor: 'yellow',
            border: '1px solid black',
            borderRadius: '5px',
            textShadow: '1px 1px 1px #FF0000',
            transform: 'rotate(' + this.state.degree + 'deg)',
        };


        return (

            <div style={{ backgroundImage: 'url("' + require("../images/eg_bg_06.gif") + '")', padding: '10px' }}>
                <h1>Hello, React Page 1!</h1>
                <ul role="nav">
                    <li><Link to="/page2">Go to React Page 2</Link></li>
                    <li><Link to="/form">Go to Form Page</Link></li>
                    <li><Link to="/jmui">Go to JMUI</Link></li>
                    <li><Link to="/kitchensink">Go to kitchensink</Link></li>
                    <li><Link to="/animation">Go to Animation Page</Link></li>
                </ul>

                <div style={rotateStyle}>你好。这是一个 div 元素。</div>
                <div style={{ fontFamily: 'myFirstFont' }}>With CSS3, websites can finally use fonts other than the pre-selected "web-safe" fonts.</div>
            </div>
        );
    }
});



