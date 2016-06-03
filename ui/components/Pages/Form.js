import React, { PropTypes } from 'react'

const errorMessageElement = (field) => (
  field['touched'] &&
  field['error'] &&
  <div className='error'>{field['error']}</div>
)
const PageForm = ({
  fields,
  handleSubmit
}) => {
  const { title, content } = fields

  return (
    <form
      onSubmit={handleSubmit}
      className='form'>
      <fieldset>
        <label>Title</label>
        <input type='text' placeholder='Enter Title' {...title} />
        {errorMessageElement(title)}
      </fieldset>
      <fieldset>
        <label>Content</label>
        <textarea
          rows='5'
          placeholder='Enter Content' {...content}>
        </textarea>
        {errorMessageElement(content)}
      </fieldset>
      <button
        type='submit'
        className='button'>
        Submit
      </button>
    </form>
  )
}

PageForm.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PageForm
