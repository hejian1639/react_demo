
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'ReactRouter'
import Screen1 from 'app/screen1'
import Screen2 from 'app/screen2'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Screen1}/>
    <Route path="/page2" component={Screen2}/>
  </Router>
), document.getElementById('example'));
