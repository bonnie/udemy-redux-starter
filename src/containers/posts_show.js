import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentDidMount() {
    // this.props.match.params.id comes from react router
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }
  render() {
    const { post } = this.props
    if(!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link className="btn btn-primary" to="/">Return to index</Link>
        <h3>{ post.title }</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

// second argument is props object that's
// coming in to this component
function mapStateToProps({ posts }, ownProps) {
  // only take the post we care about
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)