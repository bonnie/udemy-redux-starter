import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SearchBar extends Component {

  // this controls *component state* not *app state* (latter is handled by redux)
  constructor(props) {
    super(props)
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          placeholder='Get a five-day forecast for your favorite city'
          className='form-control'
          value={this.props.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    )
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
  }
}