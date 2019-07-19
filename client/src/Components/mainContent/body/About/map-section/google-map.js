import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'
import { connect } from 'react-redux'

// object containing lat and lng of every country in ISO 639-2
import COUNTRIES from './countrycode-latlong.min'

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  let country = props.country.toLowerCase();
  return <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: parseInt(COUNTRIES[country].lat), lng: parseInt(COUNTRIES[country].long) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: parseInt(COUNTRIES[country].lat), lng: parseInt(COUNTRIES[country].long) }} />}
  </GoogleMap>
}
))

const mapStateToProps = (state) => {
  return{
    country:state.userReducer.country
  }
}

export default connect(mapStateToProps)(MyMapComponent)
