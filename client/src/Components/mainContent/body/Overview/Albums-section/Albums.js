import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AlbumsRow from './AlbumsRow'

class Albums extends Component {



  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
    this.getAlbums()
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

  getAlbums(){
    console.log(this.props.spotifyWebApi)
    this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "album","limit": 50})
      .then((response) => {
        console.log(response.items)

        let AlbumRows = []
        response.items.forEach((song) => {
          console.log(song)
          const type = song.album_group
          const image = song.images[1].url
          const name = song.name
          const release_date = song.release_date
          const spotify_url=song.external_urls.spotify
          if(type === 'album')
          {
            const AlbumRow = <AlbumsRow    name={name} image={image} release_date={release_date} spotify_url={spotify_url}/>
            AlbumRows.push(AlbumRow)
          }
        })
          this.setState({
            rows:AlbumRows
          })
      })

  }



  render(){

  return (
      <React.Fragment>
        <Grid container direction="row" alignItems="flex-end" justify="center">
        <Typography variant="h2" style={{color:'white',marginLeft:'0.5em'}}>Albums</Typography>
        </Grid>
        <Grid container item xs={12} direction="row" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em'}} >
        {this.state.rows}
        </Grid>
      </React.Fragment >

)}
}


const mapStateToProps = (state) => {
  return{
    artist_id:state.userReducer.artist_id
  }
}

export default connect(mapStateToProps)(Albums);
