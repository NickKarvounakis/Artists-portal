import React, { Component } from 'react';
import {connect } from 'react-redux';
import { set_country } from '../../../../../store/actions/userReducer-actions/set_country'



//Material UI
import Typography from '@material-ui/core/Typography';

//Components
import MyMapComponent from './google-map'



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


  most_popular_artist(max,array){
    let max2 = max
    let index = 0
    for(let i = 1;i<array.length;i++){
      let popularity = array[i].artist.artist_rating
      if(popularity > max2){
        max2 = popularity
        index = i
      }
    }
    return index
  }

  getAlbums(){
    let base = `http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${this.props.search_result}&page_size=5&apikey=90189c859bd033a23ddc8e216841b859`
    const proxy = 'http://cors-anywhere.herokuapp.com/'
    const url = proxy + base
    fetch(url )
      .then( response => response.json())
      .then(function(data) {
        const max = data.message.body.artist_list[0].artist.artist_rating
        const most_popular_artist_position= this.most_popular_artist(max,data.message.body.artist_list)
        this.setState({
            country:data.message.body.artist_list[most_popular_artist_position].artist.artist_country
        })
      }.bind(this))
      .catch(error => console.log('Request failed ' + error.message ));
  }


  render(){
  this.props.set_country(this.state.country)
  return (
    <div className="test">
      {this.state.country !== '' ?
        <div style={{marginTop:'4em',marginRight:'8em'}} className="map">
        <Typography variant='h3' style={{color:'white'}}>COUNTRY<span><img src="../../location1.png" height="30" width="30" alt="location pointer"></img></span></Typography>
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
  return{
    search_result:state.userReducer.search_result
  }
}

const mapDispatchToProps = (dispatch) => ({

   set_country: (value) => dispatch(set_country(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Map);
