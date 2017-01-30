
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'ReactRouter'
import Home from 'app/home'
import Screen2 from 'app/screen2'
import Form from 'app/form'
import JMUI from 'app/jmui-test'
import Animation from 'app/animation'
import Kitchensink from 'app/kitchensink'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/page2" component={Screen2}/>
    <Route path="/form" component={Form}/>
    <Route path="/jmui" component={JMUI}/>
    <Route path="/animation" component={Animation}/>
    <Route path="/kitchensink" component={Kitchensink}/>
  </Router>
), document.getElementById('root'));
