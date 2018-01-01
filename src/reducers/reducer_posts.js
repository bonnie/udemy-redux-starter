import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POST:
      // add to existing state; don't replace it
      const post = action.payload.data

      // square braces = key interpolation
      return { ...state, [post.id]: post }
    case DELETE_POST:
      // return the state minus the deleted post
      return _.omit(state, action.payload)
    default:
      return state
  }
}