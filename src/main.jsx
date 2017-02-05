
import React from 'react'
import ReactDOM from 'react-dom'

import { useBasename } from 'History'

import { Router, Route, browserHistory } from 'ReactRouter'
import Home from 'dist/home'
import Screen2 from 'dist/screen2'
import Form from 'dist/form'
import JMUI from 'dist/jmui-test'
import Animation from 'dist/animation'
import getRoutes from 'dist/kitchensink'
const routes = getRoutes();


function withExampleBasename(history, dirname) {
  return useBasename(() => history)({ basename: '/'+dirname })
}


ReactDOM.render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={Home}/>
    <Route path="/page2" component={Screen2}/>
    <Route path="/form" component={Form}/>
    <Route path="/jmui" component={JMUI}/>
    <Route path="/animation" component={Animation}/>
    {routes}
  </Router>
), document.getElementById('root'));
