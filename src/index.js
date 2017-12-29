import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import { YOUTUBE_API_KEY } from '../settings.js'

YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, function(data) {
  console.log(data)
})

// create a new component
// this component should produce some html

// Take component's generated HTML and put it in the DOM (on the page)
// this is a class (factory), not an instance
// to make an instance: <App></App> (or <App />)

// "downward data flow": most parent component should be in charge of fetching information
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
