
import React from 'react'
import ReactDOM from 'react-dom'

import { useBasename } from 'history'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import $ from 'jquery'
import 'jquery.jplayer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import * as Actions from './actions'


function withExampleBasename(history, dirname) {
    return useBasename(() => history)({ basename: dirname });
}


const store = createStore(reducer);

// import Home from 'home'


ReactDOM.render((
    <Provider store={store}>
        <Router history={withExampleBasename(browserHistory, '/')}>
            {/*<Route path="/" component={props => < Home {...props} subtitle='Rect Router' />} />*/}
            <Route path="/" getComponent={(nextState, cb) => {
                window.require(['dist/home'], (Home) => {
                    cb(null, props => <Home.default {...props} subtitle='Rect Router' />);
                });
            }} />
            <Route path="/react_page" getComponent={(nextState, cb) => {
                window.require(['dist/react_page'], (ReactPage) => {
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
                window.require(['dist/starter_template'], (StarterTemplate) => {
                    cb(null, StarterTemplate.default);
                });
            }} />
            <Route path="/bootstrap_react" getComponent={(nextState, cb) => {
                window.require(['dist/bootstrap_react'], (BootstrapReact) => {
                    cb(null, BootstrapReact.default);
                });
            }} />
            <Route path="/bootstrap_popup*" getComponent={(nextState, cb) => {
                window.require(['dist/bootstrap_popup'], (BootstrapPopup) => {
                    cb(null, BootstrapPopup.default);
                });
            }} />
            <Route path="/todos*" getComponent={(nextState, cb) => {
                window.require(['dist/todos'], (Todos) => {
                    cb(null, props => <Todos.default {...props} store={store} />);
                });
            }} />
            <Route path="/mobx_todos*" getComponent={(nextState, cb) => {
                window.require(['dist/mobx-todos'], (MobXTodo) => {
                    cb(null, MobXTodo.default);
                });
            }} />
            <Route path="/typescript*" getComponent={(nextState, cb) => {
                window.require(['dist/react-flux-babel-karma'], (Greeter) => {
                    cb(null, Greeter.default);
                });
            }} />
            <Route path="/2d-scroll*" getComponent={(nextState, cb) => {
                window.require(['dist/2d-scroll'], (IScroll2D) => {
                    cb(null, IScroll2D.default);
                });
            }} />
            <Route path="/responsive*" getComponent={(nextState, cb) => {
                window.require(['dist/responsive'], (Responsive) => {
                    cb(null, Responsive.default);
                });
            }} />
            <Route path="/echart*" getComponent={(nextState, cb) => {
                window.require(['dist/echart_test'], (EChartTest) => {
                    cb(null, EChartTest.default);
                });
            }} />
            <Route path="/video*" getComponent={(nextState, cb) => {
                window.require(['dist/video_test'], (VideoTest) => {
                    cb(null, VideoTest.default);
                });
            }} />
            <Route path="/react_ui*" getComponent={(nextState, cb) => {
                window.require(['dist/react_ui_test'], (ReactUITest) => {
                    cb(null, ReactUITest.default);
                });
            }} />
            <Route path="/ant*" getComponent={(nextState, cb) => {
                window.require(['dist/ant_table'], (AntTable) => {
                    cb(null, AntTable.default);
                });
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

$("#jquery_jplayer").jPlayer({
    ready: function (event) {
    },
    swfPath: "jplayer",
    cssSelectorAncestor: null,
    supplied: "mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
});

//browserHistory.push(browserHistory.getCurrentLocation().pathname);
