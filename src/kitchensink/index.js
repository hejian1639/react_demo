import React from 'react'
import { Route, IndexRoute } from 'react-router'
import './styles/ios.less'
import 'css!fonts/iconfont'
import 'css!jmui.ios.core'

var grandChildRoutes = [
    {
        path: 'view',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/View').default);
        }
    },
    {
        path: 'pages',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Pages').default);
        }
    },
    {
        path: 'transitionpages',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/TransitionPages').default);
        }
    },
    {
        path: 'transitionpagesright',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/TransitionPagesRight').default);
        }
    },
    {
        path: 'transitionpagesup',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/TransitionPagesUp').default);
        }
    },
    {
        path: 'page',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Page').default);
        }
    },
    {
        path: 'block',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Block').default);
        }
    },
    {
        path: 'grid',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Grid').default);
        }
    },
    {
        path: 'button',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Button').default);
        }
    },
    {
        path: 'form',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Form').default);
        }
    },
    {
        path: 'picker',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Picker').default);
        }
    },
    {
        path: 'radiofield',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/RadioField').default);
        }
    },
    {
        path: 'checkfield',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/CheckField').default);
        }
    },
    {
        path: 'numberfield',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/NumberField').default);
        }
    },
    {
        path: 'navbar',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Navbar').default);
        }
    },
    {
        path: 'toolbar',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Toolbar').default);
        }
    },
    {
        path: 'tabbar',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Tabbar').default);
        }
    },
    {
        path: 'list',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/List').default);
        }
    },
    {
        path: 'medialist',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/MediaList').default);
        }
    },
    {
        path: 'card',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Card').default);
        }
    },
    {
        path: 'notification',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Notification').default);
        }
    },
    {
        path: 'preloader',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Preloader').default);
        }
    },
    {
        path: 'image',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Image').default);
        }
    },
    {
        path: 'badge',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Badge').default);
        }
    },
    {
        path: 'icon',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Icon').default);
        }
    },
    {
        path: 'accordion',
        getComponent(nextState, cb) {
            cb(null, require('./views/Components/Accordion').default);
        }
    },
];

var childRoutes = [
    {
        path: 'components',

        getChildRoutes(location, cb) {
            cb(null, grandChildRoutes);
        },
    },
    {
        path: '*',

        getComponent(nextState, cb) {
            cb(null, require('./views/NotFound').default);
        }

    },
];

export { childRoutes };

import Framework from './views/Framework';
export { Framework };

import Index from './views/Index';
export { Index };

// function getRoutes() {
//     return (
//         <Route path='/kitchensink' component={require('./views/Framework').default}>
//             <IndexRoute component={require('./views/Index').default} />
//             <Route path='components'>
//                 <Route path='view' component={require('./views/Components/View').default} />
//                 <Route path='pages' component={require('./views/Components/Pages').default} />
//                 <Route path='transitionpages' component={require('./views/Components/TransitionPages').default} />
//                 <Route path='transitionpagesright' component={require('./views/Components/TransitionPagesRight').default} />
//                 <Route path='transitionpagesup' component={require('./views/Components/TransitionPagesUp').default} />
//                 <Route path='page' component={require('./views/Components/Page').default} />
//                 <Route path='block' component={require('./views/Components/Block').default} />
//                 <Route path='grid' component={require('./views/Components/Grid').default} />
//                 <Route path='button' component={require('./views/Components/Button').default} />
//                 <Route path='form' component={require('./views/Components/Form').default} />
//                 <Route path='picker' component={require('./views/Components/Picker').default} />
//                 <Route path='radiofield' component={require('./views/Components/RadioField').default} />
//                 <Route path='checkfield' component={require('./views/Components/CheckField').default} />
//                 <Route path='numberfield' component={require('./views/Components/NumberField').default} />
//                 <Route path='navbar' component={require('./views/Components/Navbar').default} />
//                 <Route path='toolbar' component={require('./views/Components/Toolbar').default} />
//                 <Route path='tabbar' component={require('./views/Components/Tabbar').default} />
//                 <Route path='list' component={require('./views/Components/List').default} />
//                 <Route path='medialist' component={require('./views/Components/MediaList').default} />
//                 <Route path='card' component={require('./views/Components/Card').default} />
//                 <Route path='notification' component={require('./views/Components/Notification').default} />
//                 <Route path='preloader' component={require('./views/Components/Preloader').default} />
//                 <Route path='image' component={require('./views/Components/Image').default} />
//                 <Route path='badge' component={require('./views/Components/Badge').default} />
//                 <Route path='icon' component={require('./views/Components/Icon').default} />
//                 <Route path='accordion' component={require('./views/Components/Accordion').default} />
//             </Route>
//             <Route path='*' component={require('./views/NotFound').default} status={404} />
//         </Route>
//     )
// }
