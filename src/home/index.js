
import React from 'react'
import { Link } from 'react-router'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import bootstrap from 'css!bootstrap'
import bootstrapTheme from 'css!bootstrap-theme'
import { IntlProvider, FormattedMessage } from 'react-intl';

console.log(bootstrap);

const zh_CN = {
    home: "家",
    chinese: "中文",
    english: "英文",
    language: "语言",
    refresh: "刷新",
}

const en_US = {
    home: "Home",
    chinese: "Chinese",
    english: "English",
    language: "Language",
    refresh: "Refresh",
}


function Wrapper({ children }) {
    return children;
}

const NAV_LINKS = {
    react_page: {
        link: '/react_page',
        title: 'Go to React Page'
    },
    'form': {
        link: '/form',
        title: 'Go to Form Page'
    },
    jmui: {
        link: '/jmui',
        title: 'Go to JMUI'
    },
    kitchensink: {
        link: '/kitchensink',
        title: 'Go to kitchensink'
    },
    animation: {
        link: '/animation',
        title: 'Go to Animation Page'
    },
    music: {
        link: '/music',
        title: 'Go to Music Page'
    },
    starter_template: {
        link: '/starter_template',
        title: 'Go to Starter Template Page'
    },

    bootstrap_react: {
        link: '/bootstrap_react',
        title: 'Go to React Bootstrap Page'
    },

    todos: {
        link: '/todos',
        title: 'Go to Todo list'
    },
    typescript: {
        link: '/typescript',
        title: 'Go to Typescript'
    },
    '2d-scroll': {
        link: '/2d-scroll',
        title: 'Go to 2D Scroll'
    },

};

const NAV_LINKS1 = {
    bootstrap_popup: {
        link: '/bootstrap_popup',
        title: 'Go to Bootstrap Popup Page'
    },

    react_page: {
        link: '/react_page',
        title: 'Go to React Page'
    },
    'form': {
        link: '/form',
        title: 'Go to Form Page'
    },
    jmui: {
        link: '/jmui',
        title: 'Go to JMUI'
    },
    kitchensink: {
        link: '/kitchensink',
        title: 'Go to kitchensink'
    },
    animation: {
        link: '/animation',
        title: 'Go to Animation Page'
    },
    music: {
        link: '/music',
        title: 'Go to Music Page'
    },
    starter_template: {
        link: '/starter_template',
        title: 'Go to Starter Template Page'
    },

    bootstrap_react: {
        link: '/bootstrap_react',
        title: 'Go to React Bootstrap Page'
    },

    todos: {
        link: '/todos',
        title: 'Go to Todo list'
    },
    mobx_todos: {
        link: '/mobx_todos',
        title: 'Go to MobX Todo list'
    },
    responsive: {
        link: '/responsive',
        title: 'Go to Responsive Page'
    },
};

export default React.createClass({

    componentWillReceiveProps: function (nextProps) {
        console.log('componentWillReceiveProps: ', nextProps);

    },

    componentWillMount: function () {
        console.log('componentWillMount');
    },

    getInitialState: function () {
        console.log('getInitialState');
        return { degree: 0, hovered: false, nav_links: NAV_LINKS, lang: en_US };
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




    },

    componentWillUnmount: function () {
        // bootstrap();
        // bootstrapTheme();
        console.log('componentWillUnmount');
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

    refresh: function () {
        this.setState({ nav_links: NAV_LINKS1 });
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

            <IntlProvider locale={'en'} messages={this.state.lang}>
                <div style={{ padding: '10px' }}>
                    <h1>
                        <FormattedMessage id="home" />
                    </h1>

                    <h2>
                        {this.props.subtitle}
                    </h2>
                    <DropdownButton bsStyle='primary' title={this.state.lang.language} id={`dropdown-basic`}>
                        <MenuItem onClick={() => {this.setState({lang: zh_CN})}}>
                        <FormattedMessage
                            id="chinese"
                            defaultMessage={'Chinese'}/>
                        </MenuItem>
                        <MenuItem onClick={() => {this.setState({lang: en_US})}}>
                        <FormattedMessage
                            id="english"
                            defaultMessage={'English'}/>
                        </MenuItem>
                    </DropdownButton>
                    <br />
                    <br />
                    <ul role="nav" style={{ paddingLeft: '20px' }}>
                        {Object.entries(this.state.nav_links).map(([linkName, { link, title }]) => (
                            <li key={linkName}  style={{ paddingBottom: '5px' }}>
                                <Link to={link}>
                                    {title}
                                </Link>
                            </li>
                        ))}


                    </ul>
                    <Button ref="refresh" bsStyle="primary"
                        onClick={this.refresh}>
                        <FormattedMessage id="refresh" />
                    </Button>
                </div>
            </IntlProvider>
        );
    }
});




