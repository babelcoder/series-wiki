import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import configureStore from '../store/configureStore'
import routes from '../routes'

export default class App extends Component {
  render() {
    const store = configureStore(browserHistory)
    return (
      <Provider store={store} key='provider'>
        {routes(store, browserHistory)}
      </Provider>
    )
  }
}
