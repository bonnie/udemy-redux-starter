// actions and action creators are for changing state

// user events can call an action creator (function that returns an action object)
// action creator returns an object, which is sent to reducers
// reducer(s) returns new piece of state, depending on action
// new state causes components to re-render as needed

// selectBook is an action creator; it returns an action (an object with a 'type' property)
export function selectBook(book) {
  return { 
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
