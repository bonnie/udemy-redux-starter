// state arg is not application state -- only part of state that this reducer is responsible for
// i.e. the state that was returned the last time this reducer was called

// state defaults to null, to avoid returning undefined on the first call

// NEVER mutate state -- always return "clean" new object

export default function(state=null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  default:
    return state
  }
}