import React, { Component } from 'react'
import { connect } from 'react-redux'


class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div></div>
    }
    return (
      <div>{this.props.activeBook.title}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)