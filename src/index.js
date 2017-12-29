import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import { YOUTUBE_API_KEY } from '../settings.js'


// create a new component
// this component should produce some html

// Take component's generated HTML and put it in the DOM (on the page)
// this is a class (factory), not an instance
// to make an instance: <App></App> (or <App />)

// "downward data flow": most parent component should be in charge of fetching information
class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      videos: [], 
      selectedVideo: null 
    }

    this.videoSearch('kittens')
    
  }
  
  videoSearch(term) {
    YTSearch({ key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))

// target container is not a dom element (doesn't specify where on the page to put it):
// ReactDOM.render(<App />)
