import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SingleEpsRow from './Single_eps_row'
import Demo from './section-bar/Demo'

class SignleEps extends Component {



  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
    this.getAlbums()
    this.Appears_on()
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
    this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "single","limit": 50})
      .then((response) => {
        console.log(response.items)

        let AlbumRows = []
        response.items.forEach((song) => {
          console.log(song)
          const type = song.album_group
          const image = song.images[1].url
          const name = song.name
          const release_date = song.release_date
            const AlbumRow = <SingleEpsRow    name={name} image={image} release_date={release_date}/>
            AlbumRows.push(AlbumRow)

        })
          this.setState({
            rows:AlbumRows
          })
      })
  }

  Appears_on(){
    console.log(this.props.spotifyWebApi)
    this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "appears_on,compilation","limit": 50})
      .then((response) => {
        console.log(response.items)

        let AlbumRows = []
        response.items.forEach((song) => {
          console.log(song)
          const type = song.album_group
          const image = song.images[1].url
          const name = song.name
          const release_date = song.release_date
            const AlbumRow = <SingleEpsRow    name={name} image={image} release_date={release_date}/>
            AlbumRows.push(AlbumRow)

        })
          this.setState({
            rows2:AlbumRows
          })
      })
  }



  render(){

  return (
      <React.Fragment>
        <Grid container direction="row" alignItems="flex-end" justify="center">
        <Typography variant="h2" style={{color:'white',marginLeft:'0.5em'}}>Single and EPs</Typography>
        </Grid>
        <Demo rows={this.state.rows} rows2={this.state.rows2}/>
      </React.Fragment >

)}
}


const mapStateToProps = (state) => {
  return{
    artist_id:state.userReducer.artist_id
  }
}

export default connect(mapStateToProps)(SignleEps);
