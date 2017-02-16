
import React from 'react'
import ReactDOM from 'react-dom'

import { useBasename } from 'History'

import { Router, Route, browserHistory } from 'ReactRouter'
import $ from 'jquery'
import 'jquery.jplayer'

// const routes = getRoutes();


function withExampleBasename(history, dirname) {
    return useBasename(() => history)({ basename: dirname });
}

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('home'),
        },
        {
            path: 'react_page',
            getComponent(nextState, cb) {
                window.require(['dist/react-page'], (ReactPage) => {
                    cb(null, ReactPage);
                });
            }
        },
        {
            path: '/form',
            getComponent(nextState, cb) {
                window.require(['dist/form'], (Form) => {
                    cb(null, Form);
                });
            }
        },
        {
            path: '/jmui',
            getComponent(nextState, cb) {
                window.require(['dist/jmui-test'], (JMUI) => {
                    cb(null, JMUI);
                });
            }
        },
        {
            path: '/animation',
            getComponent(nextState, cb) {
                window.require(['dist/animation'], (Animation) => {
                    cb(null, Animation);
                });
            }
        },
        {
            path: '/jmui',
            getComponent(nextState, cb) {
                window.require(['dist/jmui-test'], (JMUI) => {
                    cb(null, JMUI);
                });
            }
        },
        {
            path: '/music',
            getComponent(nextState, cb) {
                window.require(['dist/music'], (Music) => {
                    cb(null, Music);
                });
            }
        },
        {
            path: '/kitchensink',

            getChildRoutes(location, cb) {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, Kitchensink.childRoutes);
                });
            },
            getIndexRoute(location, cb) {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, {
                        getComponent(location, callback) {
                            callback(null, Kitchensink.Index);
                        }
                    });
                    // cb(null, Kitchensink.Index);
                });
            },

            getComponent(location, cb) {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, Kitchensink.Framework);
                });
            }
        },
    ]
}

ReactDOM.render((
    <Router
        history={withExampleBasename(browserHistory, '/')}
        routes={rootRoute}
        />
), document.getElementById('root'))

// ReactDOM.render((
//     <Router history={withExampleBasename(browserHistory, '/')}>
//         <Route path="/" component={Home} />
//         <Route path="/react_page" component={ReactPage} />
//         <Route path="/form" component={Form} />
//         <Route path="/jmui" component={JMUI} />
//         <Route path="/animation" component={Animation} />
//         {routes}
//         <Route path="/music" component={Music} />
//     </Router>
// ), document.getElementById('root'), function () {

// });

$("#jquery_jplayer_1").jPlayer({
    ready: function (event) {
    },
    swfPath: "jplayer",
    supplied: "m4a, oga",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
});

//browserHistory.push(browserHistory.getCurrentLocation().pathname);
