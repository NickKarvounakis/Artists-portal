import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';

//SUB-COMPONENTS
import Map from './map-section/artist-map'


class ContentBody extends Component {
  constructor(){
    super()

  }








  render(){
  return (
    <div className="App">
      <Map spotifyWebApi={this.props.spotifyWebApi}/>
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
