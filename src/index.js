require('dotenv').config()
import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = process.env.YOUTUBE_API_KEY

// create a new component
// this component should produce some html

// Take component's generated HTML and put it in the DOM (on the page)
// this is a class (factory), not an instance
// to make an instance: <App></App> (or <App />)
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))

// target container is not a dom element (doesn't specify where on the page to put it):
// ReactDOM.render(<App />)
