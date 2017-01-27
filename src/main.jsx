
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'ReactRouter'
import Home from 'app/home'
import Screen2 from 'app/screen2'
import Form from 'app/form'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/page2" component={Screen2}/>
    <Route path="/form" component={Form}/>
  </Router>
), document.getElementById('example'));
