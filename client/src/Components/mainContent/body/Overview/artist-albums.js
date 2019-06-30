import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';


class Albums extends Component {
  constructor(){
    super()
    this.state = {
      nowPlaying:{
        name: 'Not Checked',
        image: ''
      }
    }
  }






  getAlbums(){
    // console.log(this.props.spotifyWebApi)
    // this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id)
    //   .then((response) => {
    //     console.log('ALBUMS---------->',response)
    //     // if(response.item !== null || response.item)
    //     // {
    //     //     console.log(response.item.album.images[0])
    //     //     this.setState({
    //     //       nowPlaying:{
    //     //         name: response.item.name,
    //     //         image: response.item.album.images[0].url
    //     //       }
    //     //     })
    //     // }
    //   })
  }


  render(){
    if(this.props.artist_id){
      this.getAlbums()
    }
  return (
    <div className="test">
      <h1>Overview</h1>
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

export default connect(mapStateToProps)(Albums);
