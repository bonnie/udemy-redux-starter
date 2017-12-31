import React, { Component } from 'react'

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