import React from 'react'
import { Route, IndexRoute } from 'ReactRouter'
require('./styles/ios.less')

export default function getRoutes () {
  return (
    <Route path='/kitchensink' component={require('./views/Framework').default}>
      <IndexRoute component={require('./views/Index').default} />
    </Route>
  )
}
