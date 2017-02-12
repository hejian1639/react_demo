
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
import Music from 'music'

const routes = getRoutes();


function withExampleBasename(history, dirname) {
  var ret = useBasename(() => history)({ basename: dirname });
  var location = ret.getCurrentLocation();
  return ret;
}


ReactDOM.render((
  <div>
    <Router history={withExampleBasename(browserHistory, browserHistory.getCurrentLocation().pathname)}>
      <Route path="/" component={Home} />
      <Route path="/react_page" component={ReactPage} />
      <Route path="/form" component={Form} />
      <Route path="/jmui" component={JMUI} />
      <Route path="/animation" component={Animation} />
      {routes}
      <Route path="/music" component={Music} />
    </Router>
    <div id="jquery_jplayer_1" className="jp-jplayer"></div>
  </div>
), document.getElementById('root'), function(){
  
});
