import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute } from 'react-router'
import {
  Pages,
  ShowPage,
  NewPage
} from './containers'
import {
  App,
  Home
} from './components'

export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path='/'
             component={App}>
        <IndexRoute component={Home} />
        <route path='pages'>
          <IndexRoute component={Pages} />
          <route path='new'
                 component={NewPage} />
          <route path=':id'
                 component={ShowPage} />
        </route>
      </Route>
    </Router>
  )
}
