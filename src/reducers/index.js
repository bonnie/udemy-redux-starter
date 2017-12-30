import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

// a reducer is a function that returns a piece of the application's state

// this is the mapping of state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
