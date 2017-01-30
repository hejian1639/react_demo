import React from 'react'
import { Route, IndexRoute } from 'ReactRouter'

export default function getRoutes () {
  return (
    <Route path='/kitchensink' component={require('./views/Framework').default}>
      <IndexRoute component={require('./views/Index').default} />
    </Route>
  )
}
