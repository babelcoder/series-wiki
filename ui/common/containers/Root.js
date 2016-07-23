import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import routes from '../routes'

export default class Root extends Component {
  render() {
    const { history, initialState } = this.props
    const store = configureStore(history, initialState)

    return (
      <Provider store={store} key='provider'>
        {routes(store, history)}
      </Provider>
    )
  }
}
