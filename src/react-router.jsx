
var React = require('react');
var ReactDOM = require('react-dom');

require('css!bootstrap');
require('css!bootstrap-theme');

require('css!jquery-ui');
require('jquery-ui');

// var BootstrapButton = require('app/button');
// var BootstrapModal = require('app/modal');

require('css!antd');
var antd = require('antd');
var Select = antd.Select;
var Option = antd.Select.Option;



export default React.createClass({
    getInitialState: function () {
        return { degree: 0, hovered: false };
    },

    timerId: null,

    componentDidMount: function () {
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
        $(this.refs.autocomplete).autocomplete({
            source: availableTags
        });

        var self = this;

        this.timerId = setInterval(function () {
            self.setState({ degree: self.state.degree + 1 });
        }, 50);
    },

    componentWillUnmount: function () {
        clearInterval(this.timerId);
    },
    handleClick: function (module) {
        // require([module], function (App) {
        //     var app = new App();
        //     app.init();
        // });
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
        var $option = $("<option value='longOption'>longOption</option>");	//  创建第一个<li>元素
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
        var modal = (
            <BootstrapModal
                ref="modal"
                confirm="OK"
                cancel="Cancel"
                onCancel={this.handleCancel}
                onConfirm={this.closeModal}
                onHidden={this.handleModalDidClose}
                title="Hello, Bootstrap!">
                This is a React component powered by jQuery and Bootstrap!
          </BootstrapModal>
        );

        var rotateStyle = {
            margin: '30',
            width: '100px',
            height: '75px',
            backgroundColor: 'yellow',
            border: '1px solid black',
            border: '2px solid',
            borderRadius: '5px',
            textShadow: '1px 1px 1px #FF0000',
            transform: 'rotate(' + this.state.degree + 'deg)',
        };


        return (
            <div style={{ backgroundImage: "url('eg_bg_06.gif')", padding: '10' }}>
                <h1>Hello, <strong>React Page 1!</strong></h1>
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/screen2')}>Go to React Page 2</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/form')}>Go to Form Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/table')}>Go to Table Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/starter-template')}>Go to Starter Template Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/console')}>Go to Console Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/ant')}>Go to Ant Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/ant_table')}>Go to Ant Table Page</a>
                <br />
                <a href="javascript:void(0)" onClick={this.handleClick.bind(this, 'app/jmui-test')}>Go to JMUI Page</a>
                <br />
                {modal}
                <BootstrapButton onClick={this.openModal} className="btn-default" style={{ margin: '10' }}>
                    Open modal
            </BootstrapButton>

                <BootstrapButton onClick={this.rotate} className="btn-default" style={{ margin: '10' }}>
                    rotate
            </BootstrapButton>
                <div style={rotateStyle}>你好。这是一个 div 元素。</div>
                <br />
                <div>
                    <input ref="autocomplete" title="type &quot;a&quot;" />
                </div>
                <br />
                <div style={{ fontFamily: 'myFirstFont' }}>With CSS3, websites can finally use fonts other than the pre-selected "web-safe" fonts.</div>
                <br />
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={this.style()}></div>
                <br />
                <div style={{ background: 'red', width: '100px', height: '100px', animation: 'myfirst 5s' }}></div>
                <br />
                <antd.DatePicker />
                <br />
                <antd.Input maxLength="9" />
                <br />
                <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="yiminghe" title="yiminghe">yiminghe</Option>
                </Select>
                <br />
                <select id="selector" ref="selector">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <br />
                <BootstrapButton onClick={this.appendOption} className="btn-default" style={{ margin: '10' }}>
                    Append option
            </BootstrapButton>

            </div>
        );
    }
});

