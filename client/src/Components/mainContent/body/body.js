import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';

//SUB-COMPONENTS
import Map from './map-section/artist-map'
import Details from './artist-bio'

// material ui
import Grid from '@material-ui/core/Grid';


class ContentBody extends Component {
  constructor(){
    super()

  }








  render(){
  return (
    <div className="App">
      <Grid container direction="row" >
      <Grid item xs={9}>
      <Details />
      </Grid>
      <Grid item xs={3}>
      <Map />
      </Grid>
      </Grid>
    </div>
)}
}


const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    token:state.userReducer.token,
    artist_id:state.userReducer.artist_id
  }
}

export default connect(mapStateToProps)(ContentBody);
