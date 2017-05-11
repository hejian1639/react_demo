
import React from 'react'
import { Link } from 'react-router'
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { IntlProvider, FormattedMessage } from 'react-intl';
import cssAPI from 'css-require'
import Loading from 'react-loading';
import $ from 'jquery'

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
    echart_test: {
        link: '/echart_test',
        title: 'Go to eChart Test'
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
        $('#pageLoading').show();

        var p1 = new Promise((resolve, reject) => {
            this.bootstrap = cssAPI.load('lib/bootstrap', resolve);
        });

        var p2 = new Promise((resolve, reject) => {
            this.bootstrapTheme = cssAPI.load('lib/bootstrap-theme', resolve);
        });

        Promise.all([p1, p2]).then(values => {
            this.setState({ loading: false });
            $('#pageLoading').hide();
        });
    },

    getInitialState: function () {
        console.log('getInitialState');
        return { nav_links: NAV_LINKS, lang: en_US, loading: true };
    },

    timerId: null,

    componentDidMount: function () {
        console.log('componentDidMount');




    },

    componentWillUnmount: function () {
        cssAPI.unload(this.bootstrap);
        cssAPI.unload(this.bootstrapTheme);
        console.log('componentWillUnmount');
    },


    refresh: function () {
        this.setState({ nav_links: NAV_LINKS1 });
    },


    render: function () {
        console.log('render');

        if (this.state.loading) {
            return (
                <div style={{ width: '64px', height: '64px', position: 'absolute', margin: '-32px 0 0 -32px', left: '50%', top: '50%' }}>
                    <Loading type='spin' color='blue' />
                </div>);
        }

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
                        <MenuItem onClick={() => { this.setState({ lang: zh_CN }) }}>
                            <FormattedMessage
                                id="chinese"
                                defaultMessage={'Chinese'} />
                        </MenuItem>
                        <MenuItem onClick={() => { this.setState({ lang: en_US }) }}>
                            <FormattedMessage
                                id="english"
                                defaultMessage={'English'} />
                        </MenuItem>
                    </DropdownButton>
                    <br />
                    <br />
                    <ul role="nav" style={{ paddingLeft: '20px' }}>
                        {Object.entries(this.state.nav_links).map(([linkName, { link, title }]) => (
                            <li key={linkName} style={{ paddingBottom: '5px' }}>
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




