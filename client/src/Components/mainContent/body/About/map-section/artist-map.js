import React, { Component } from 'react';
import {connect } from 'react-redux';
import { set_country } from '../../../../../store/actions/set_country'

import MyMapComponent from './google-map'
import Typography from '@material-ui/core/Typography';



class Map extends Component {
  constructor(){
    super()
    this.state = {
      country: ''
    }

  }


  componentDidMount(){
        this.getAlbums()

  }


  getAlbums(){
    let base = `http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${this.props.search_result}&page_size=5&apikey=90189c859bd033a23ddc8e216841b859`
    const proxy = 'http://cors-anywhere.herokuapp.com/'
    const url = proxy + base
    fetch(url )
      .then( response => response.json())
      .then(function(data) {
        console.log('NOBORU',data.message.body.artist_list[0].artist)
        this.setState({
            country:data.message.body.artist_list[0].artist.artist_country
        })
      }.bind(this))
      .catch(error => console.log('Request failed ' + error.message ));
  }


  render(){
  console.log('xd')
  this.props.set_country(this.state.country)
  console.log('request to: ',process.env.REACT_APP_GOOGLE_KEY)
  return (
    <div className="test">
      {this.state.country !== '' ?
        <div style={{marginTop:'4em',marginRight:'8em'}} className="map">
        <Typography variant='h2' style={{color:'white'}}>LOCATION<span><img src="../../location1.png" height="30" width="30" alt="location pointer"></img></span></Typography>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` ,width:`100%`}} />}
          containerElement={<div  style={{ height: `300px`}} className="map-container"/>}
          mapElement={<div style={{ height: `100%`,width:`100%` }} />}
        />
      </div>
        :
        <div></div>}
  </div>
)}
}


const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    search_result:state.userReducer.search_result
  }
}

const mapDispatchToProps = (dispatch) => ({

   set_country: (value) => dispatch(set_country(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Map);
