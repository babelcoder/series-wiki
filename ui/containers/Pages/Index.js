import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { Pages } from '../../components'

export default class PagesContainer extends Component {
  state = {
    pages: []
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state.pages !== nextState.pages;
  }

  onReloadPages = () => {
    fetch(PAGES_ENDPOINT)
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    return (
      <Pages
        pages={this.state.pages}
        onReloadPages={this.onReloadPages} />
    )
  }
}
