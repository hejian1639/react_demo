import React from 'react'
import { Route, IndexRoute } from 'ReactRouter'

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
    </Route>
  )
}
