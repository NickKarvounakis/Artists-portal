import React, { Component } from 'react';

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
    setTimeout(() =>
    {
      this.getData()
   }
    , 500);

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
        this.getApple()
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
            const AlbumRow = <AlbumsRow    name={name} image={image} release_date={release_date} spotify_url={spotify_url} key={spotify_url} />
            AlbumRows.push(AlbumRow)
          }
        })
          this.setState({
            rows:AlbumRows
          })
      })

  }

  getApple(){
    const url = `http://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${'yung lean warlord'}&limit=1`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('xd')
        })
      }


   async getData() {
    let firstAPICall = await this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "album","limit": 50})
    let secondAPICall =  await fetch(`http://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${'xd'}&limit=1`).then((value) => value.json())
    let AlbumRows = []
    firstAPICall.items.forEach((song) => {
      console.log(song)
      const type = song.album_group
      const image = song.images[1].url
      const name = song.name
      const release_date = song.release_date
      const spotify_url=song.external_urls.spotify
      const apple_url = secondAPICall.results[0].collectionViewUrl
      console.log('xd12',apple_url)
      if(type === 'album')
      {
        const AlbumRow = <AlbumsRow    name={name} image={image} release_date={release_date} spotify_url={spotify_url} key={spotify_url} apple_url={apple_url}/>
        AlbumRows.push(AlbumRow)
      }
    })
      this.setState({
        rows:AlbumRows
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
    artist_id:state.userReducer.artist_id,
    search_result:state.userReducer.search_result
  }
}

export default connect(mapStateToProps)(Albums);
