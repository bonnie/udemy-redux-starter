import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  // field obj connects Field component to this jsx
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input} // sets up props like onChange, onFocus, etc
        />
        {field.meta.error}
      </div>
    )
  }
  
  
  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}

// for form validation, called automatically during lifecycle 
// values = object with user inputs for form
function validate(values) {
  const errors = {}

  Object.keys(values).forEach(field => {
    if (!values[field]) {
      errors[field] = `Enter ${field}`
    }
  })

  // if we return an empty object, redux-form assumes no errors
  // any properties = validation failed, don't submit form
  return errors
}

const reduxFormOptions = {
  form: 'PostsNewForm',
  validate,
}

// reduxForm takes single argument: object of options
export default reduxForm(reduxFormOptions)(PostsNew)