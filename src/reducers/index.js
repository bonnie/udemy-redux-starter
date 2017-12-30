import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// a reducer is a function that returns a piece of the application's state

// this is the mapping of state
const rootReducer = combineReducers({
  books: BooksReducer  
});

export default rootReducer;
