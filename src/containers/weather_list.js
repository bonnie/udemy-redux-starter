import React, { Component } from 'react'
import { connect } from 'react-redux'
// import GraphCell from '../components/graph_cell'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const humiditys = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const { lon, lat } = cityData.city.coord

    const graphs = [
      { data: temps, color: 'blue', units: 'K'},
      { data: pressures, color: 'green', units: 'hPa'},
      { data: humiditys, color: 'purple', units: '%'},
    ]

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead> 
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)