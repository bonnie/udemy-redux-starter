import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
// note: there's a package: react-google-maps that makes this easier... ostensibly. I couldn't get it working
// even with the exact code from the tutorial. >_<

export default (props) => {
  return (
    <GoogleMapLoader
      containerElement= { <div style={{height: '100%'}} /> }
      googleMapElement= {
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    /> 
  )
}