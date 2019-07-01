import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ToptracksRow from './Top-tracksRow'
import Grid from '@material-ui/core/Grid';
class Albums extends Component {

  _isMounted = false;

  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
    this._isMounted = true
    this.getTopSongs()
  }



  // getAlbums(){
  //   console.log(this.props.spotifyWebApi)
  //   this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id)
  //     .then((response) => {
  //       console.log('VEEEEEEEEEEEES---------->',response)
  //       // if(response.item !== null || response.item)
  //       // {
  //       //     console.log(response.item.album.images[0])
  //       //     this.setState({
  //       //       nowPlaying:{
  //       //         name: response.item.name,
  //       //         image: response.item.album.images[0].url
  //       //       }
  //       //     })
  //       // }
  //     })
  // }

  getTopSongs(){
    console.log(this.props.spotifyWebApi)
    this.props.spotifyWebApi.getArtistTopTracks(this.props.artist_id,'US')
      .then((response) => {
        let toptracksRows = []
        response.tracks.forEach((song) => {
          console.log(song)
          const image = song.album.images[1].url
          const name = song.name
          const preview_url = song.preview_url
          const album_name = song.album.name
          console.log(name,image,preview_url)
          const toptracksRow = <ToptracksRow    image={image} name={name} album_name={album_name} preview_url={preview_url}   key={preview_url} />
          toptracksRows.push(toptracksRow)
        })
        console.log(toptracksRows)
        if(this._isMounted){
          this.setState({
            rows:toptracksRows
          })
        }
      })

  }

  componentWillUnmount(){
    this._isMounted = false
  }


  render(){

  return (
    <div className="test" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em'}}>
      <Typography variant="h1" style={{marginBottom:'0.25em'}}>
        Popular
      </Typography>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start">
      {this.state.rows}
      </Grid>
  </div>
)}
}


const mapStateToProps = (state) => {
  return{
    artist_id:state.userReducer.artist_id
  }
}

export default connect(mapStateToProps)(Albums);
