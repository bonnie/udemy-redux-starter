import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' // this makes sure the action creators flow through reducers
import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => 
      <li 
        className='list-group-item' 
        onClick={() => this.props.selectBook(book)}
        key={book.title}>{ book.title}
      </li>
      )
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
  )}
}

// whatever is returned from here will show up as props inside of BookList
const mapStateToProps = (state) => {

  // if application state changes, component will re-render with new list of books
  return { books: state.books }
}

// anything returned from this function will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
  // whenever select book is called, result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch)
}

// promote BookList from component to container
// needs to know about dispatch method selectBook
// make it available as a prop
// connect() returns a container
// reference react-redux documentation for connect() -- but this is most generic and widely used: 
//        map state to props (mapStateToProps) and make action creator available to be called inside container (mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(BookList)