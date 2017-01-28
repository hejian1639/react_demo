import { browserHistory } from 'ReactRouter'
import getRoutes from './routes'
import Root from './Root'
import React from 'react'
import ReactDOM from 'react-dom'

const routes = getRoutes()

ReactDOM.render(
  <Root history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
