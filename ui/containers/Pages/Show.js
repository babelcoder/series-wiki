import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'
import { getPageById } from '../../reducers/pages'
import { ShowPage } from '../../components'

class ShowPageContainer extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    const { onLoadPage, params: { id } } = this.props

    onLoadPage(id)
  }

  render() {
    const { id, title, content } = this.props.page

    return (
      <ShowPage
        id={id}
        title={title}
        content={content} />
    )
  }
}

export default connect(
  (state, ownProps) => ({ page: getPageById(state, ownProps.params.id) }),
  { onLoadPage: loadPage }
)(ShowPageContainer)
