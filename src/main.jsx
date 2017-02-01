
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'ReactRouter'
import Home from 'dist/home'
import Screen2 from 'dist/screen2'
import Form from 'dist/form'
import JMUI from 'dist/jmui-test'
import Animation from 'dist/animation'
import getRoutes from 'dist/kitchensink'
const routes = getRoutes();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/page2" component={Screen2}/>
    <Route path="/form" component={Form}/>
    <Route path="/jmui" component={JMUI}/>
    <Route path="/animation" component={Animation}/>
    {routes}
  </Router>
), document.getElementById('root'));
