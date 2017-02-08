
import React from 'react'
import ReactDOM from 'react-dom'

import { useBasename } from 'History'

import { Router, Route, browserHistory } from 'ReactRouter'
import Home from 'home'
import ReactPage from 'react-page'
import Form from 'form'
import JMUI from 'jmui-test'
import Animation from 'animation'
import getRoutes from 'kitchensink'
const routes = getRoutes();


function withExampleBasename(history, dirname) {
  var ret = useBasename(() => history)({ basename: dirname });
  var location = ret.getCurrentLocation();
  return ret;
}


ReactDOM.render((
  <Router history={withExampleBasename(browserHistory, browserHistory.getCurrentLocation().pathname)}>
    <Route path="/" component={Home}/>
    <Route path="/react_page" component={ReactPage}/>
    <Route path="/form" component={Form}/>
    <Route path="/jmui" component={JMUI}/>
    <Route path="/animation" component={Animation}/>
    {routes}
  </Router>
), document.getElementById('root'));
