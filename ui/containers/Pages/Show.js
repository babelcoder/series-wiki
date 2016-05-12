import React, { Component } from 'react'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import { ShowPage } from '../../components'

export default class ShowPageContainer extends Component {
  state = {
    page: {
      title: '',
      content: ''
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state.page !== nextState.page;
  }

  componentDidMount() {
    fetch(`${PAGES_ENDPOINT}/${this.props.params.id}`)
      .then((response) => response.json())
      .then((page) => this.setState({ page }))
  }

  render() {
    const { id, title, content } = this.state.page

    return <ShowPage
      id={id}
      title={title}
      content={content} />
  }
}
