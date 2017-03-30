
import React from 'react'
import ReactDOM from 'react-dom'

import { useBasename } from 'History'

import { Router, Route, IndexRoute, browserHistory } from 'ReactRouter'
import $ from 'jquery'
import 'jquery.jplayer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Controller from './controller'



function withExampleBasename(history, dirname) {
    return useBasename(() => history)({ basename: dirname });
}

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('home').default,
        },
        {
            path: 'react_page',
            getComponent(nextState, cb) {
                window.require(['dist/react-page'], (ReactPage) => {
                    cb(null, ReactPage.default);
                });
            }
        },
        {
            path: '/form',
            getComponent(nextState, cb) {
                window.require(['dist/form'], (Form) => {
                    cb(null, Form.default);
                });
            }
        },
        {
            path: '/jmui',
            getComponent(nextState, cb) {
                window.require(['dist/jmui-test'], (JMUI) => {
                    cb(null, JMUI.default);
                });
            }
        },
        {
            path: '/animation',
            getComponent(nextState, cb) {
                window.require(['dist/animation'], (Animation) => {
                    cb(null, Animation.default);
                });
            }
        },

        {
            path: '/music',
            getComponent(nextState, cb) {
                window.require(['dist/music'], (Music) => {
                    cb(null, Music.default);
                });
            }
        },
        {
            path: '/starter_template',
            getComponent(nextState, cb) {
                window.require(['dist/starter-template'], (StarterTemplate) => {
                    cb(null, StarterTemplate.default);
                });
            }
        },
        {
            path: '/bootstrap_react',
            getComponent(nextState, cb) {
                window.require(['dist/bootstrap-react'], (BootstrapReact) => {
                    cb(null, BootstrapReact.default);
                });
            }
        },
        {
            path: '/bootstrap_popup*',
            getComponent(nextState, cb) {
                window.require(['dist/bootstrap-popup'], (BootstrapPopup) => {
                    cb(null, BootstrapPopup.default);
                });
            }
        },
        {
            path: '/todos*',
            getComponent(nextState, cb) {
                window.require(['dist/todos'], (Todos) => {
                    cb(null, Todos.default);
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

/*ReactDOM.render((
    <Router
        history={withExampleBasename(browserHistory, '/')}
        routes={rootRoute}
    />
), document.getElementById('root'))*/

const store = createStore(reducer)

var controller = new Controller(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={withExampleBasename(browserHistory, '/')}>
            <Route path="/" component={require('home').default} />
            <Route path="/react_page" getComponent={(nextState, cb) => {
                window.require(['dist/react-page'], (ReactPage) => {
                    cb(null, ReactPage.default);
                });
            }} />
            <Route path="/form" getComponent={(nextState, cb) => {
                window.require(['dist/form'], (Form) => {
                    cb(null, Form.default);
                });
            }} />
            <Route path="/jmui" getComponent={(nextState, cb) => {
                window.require(['dist/jmui-test'], (JMUI) => {
                    cb(null, JMUI.default);
                });
            }} />
            <Route path="/animation" getComponent={(nextState, cb) => {
                window.require(['dist/animation'], (Animation) => {
                    cb(null, Animation.default);
                });
            }} />

            <Route path="/music" getComponent={(nextState, cb) => {
                window.require(['dist/music'], (Music) => {
                    cb(null, Music.default);
                });
            }} />

            <Route path="/starter_template" getComponent={(nextState, cb) => {
                window.require(['dist/starter-template'], (StarterTemplate) => {
                    cb(null, StarterTemplate.default);
                });
            }} />

            <Route path="/bootstrap_react" getComponent={(nextState, cb) => {
                window.require(['dist/bootstrap-react'], (BootstrapReact) => {
                    cb(null, BootstrapReact.default);
                });
            }} />

            <Route path="/bootstrap_popup*" getComponent={(nextState, cb) => {
                window.require(['dist/bootstrap-popup'], (BootstrapPopup) => {
                    cb(null, BootstrapPopup.default);
                });
            }} />
            <Route path="/todos*" getComponent={(nextState, cb) => {
                controller.openTodos(cb);
            }} />
            <Route path="/kitchensink" getComponent={(nextState, cb) => {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, Kitchensink.Framework);
                });
            }} getIndexRoute={(nextState, cb) => {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, {
                        getComponent(location, callback) {
                            callback(null, Kitchensink.Index);
                        }
                    });
                });
            }} getChildRoutes={(nextState, cb) => {
                window.require(['dist/kitchensink'], (Kitchensink) => {
                    cb(null, Kitchensink.childRoutes);
                });
            }} />

        </Router>
    </Provider>
), document.getElementById('root'), function () {

});

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
