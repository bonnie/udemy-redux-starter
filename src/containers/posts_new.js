import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
  // field obj connects Field component to this jsx
  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input} // sets up props like onChange, onFocus, etc
        />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    )
  }
  
  onSubmit(values) {
    
    this.props.createPost(values, () => { 
      // this callback gets sent to the action creator
      
      // this.props.history is managed by the router
      // pushing to it is equivalent to a redirect
      this.props.history.push('/')
    })
  }

  render() {
    // handleSubmit handles redux-forms stuff
    // if the form is ready to be submitted, then call callback
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title" 
            type="text"
            name="title"
            component={this.renderField}
            />
          <Field
            label="Categories"
            type="text"
            name="categories"
            component={this.renderField}
            />
          <Field
            label="Post Content"
            type="textarea"
            name="content"
            component={this.renderField}
            />
          <Link className="btn btn-secondary" to="/">Cancel</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

// for form validation, called automatically during lifecycle
// values = object with user inputs for form
function validate(values) {
  const errors = {}

  // touched = field edited and then focus away

  if (!values.title) {
    errors.title = 'Enter a title'
  }
  
  if (!values.categories) {
    errors.categories = 'Enter categories'
  }
  
  if (!values.content) {
    errors.content = 'Enter some content'
  }
  
  // if we return an empty object, redux-form assumes no errors
  // any properties = validation failed, don't submit form
  return errors
}

const reduxFormOptions = {
  validate,
  form: 'PostsNewForm',
}

// reduxForm takes single argument: object of options
export default reduxForm(reduxFormOptions)
(
  connect(null, { createPost })(PostsNew)
)