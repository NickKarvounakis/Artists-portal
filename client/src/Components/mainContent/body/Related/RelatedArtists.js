import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import RelatedArtistsRow from './RelatedArtistsRow'

class Related extends Component {



  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
    this.getAlbums()
  }



  getAlbums(){
    console.log(this.props.spotifyWebApi)
    this.props.spotifyWebApi.getArtistRelatedArtists(this.props.artist_id)
      .then((response) => {


        let AlbumRows = []
        response.artists.forEach((artist) => {
          console.log(artist)
          // const type = song.album_group
           const image = artist.images[0].url
           const name = artist.name
           const spotify_url=artist.external_urls.spotify
            const AlbumRow = <RelatedArtistsRow    name={name} image={image}  spotify_url={spotify_url}/>
            AlbumRows.push(AlbumRow)
        })
          this.setState({
            rows:AlbumRows
          })
      })

  }



  render(){

  return (
      <React.Fragment>
        <Typography variant="h2" style={{color:'white',marginLeft:'0.5em',textAlign:'left'}}>Similar artists</Typography>
        <Grid container  direction="row" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em'}} >
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

export default connect(mapStateToProps)(Related);
