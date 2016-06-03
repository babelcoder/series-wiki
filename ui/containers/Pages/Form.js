import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPage } from '../../actions/page'
import { PageForm } from '../../components'

const FIELDS = ['title', 'content']

class PageFormContainer extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { fields, handleSubmit } = this.props

    return (
      <PageForm
        fields={fields}
        handleSubmit={handleSubmit} />
    )
  }
}

export default reduxForm({
    form: 'page',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {})
  },
  (state) => ({}),
  (dispatch) => ({
    onSubmit: (values) =>
      dispatch(createPage(values))
  })
)(PageFormContainer)
