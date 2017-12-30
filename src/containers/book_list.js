import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => 
      <li className='list-group-item' key={book.title}>{ book.title}</li>)
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
  )}
}

const mapStateToProps = (state) => {
  // whatever is returned from here will show up as props inside of BookList

  // if application state changes, component will re-render with new list of books
  return { books: state.books }
}

// connect() returns a container
export default connect(mapStateToProps)(BookList)