import React, { Component } from 'react'
// note: there's a package: react-google-maps that makes this easier... ostensibly. I couldn't get it working
// even with the exact code from the tutorial. >_<

class GoogleMap extends Component {
  componentDidMount() {
    console.log('component did mount')
    console.log(this.props)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // ref = reference (this.refs.map)
    return <div ref="map" />
  }
}

export default GoogleMap