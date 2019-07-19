import React, { Component } from 'react';
import {connect } from 'react-redux';

//Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Components
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
    setTimeout(() =>
    {
        this.getAlbums()
        this.Appears_on()
    }
    , 1000);

  }

  AlreadyExists(array,element){
    let flag = true
    array.forEach((album) => {
      if(album.props.name === element)
        flag = false
    })
    return flag;
  }


  getAlbums(){
    this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "single","limit": 50})
      .then((response) => {
        let AlbumRows = []
        response.items.forEach((song) => {
          const image = song.images[1].url
          const name = song.name
          const release_date = song.release_date
          const spotify_url = song.external_urls.spotify
          if(this.AlreadyExists(AlbumRows,name))
          {
          const AlbumRow = <SingleEpsRow    name={name} image={image} release_date={release_date} key={spotify_url + '' + name } url={spotify_url}/>
          AlbumRows.push(AlbumRow)
          }
        })
          this.setState({
            rows:AlbumRows
          })
      })
  }

  Appears_on(){
    this.props.spotifyWebApi.getArtistAlbums(this.props.artist_id,{	"include_groups": "appears_on,compilation","limit": 50})
      .then((response) => {
        let AlbumRows = []
        response.items.forEach((song) => {
          const image = song.images[1].url
          const name = song.name
          const release_date = song.release_date
          const spotify_url = song.external_urls.spotify
          if(this.AlreadyExists(AlbumRows,name))
          {
            const AlbumRow = <SingleEpsRow    name={name} image={image} release_date={release_date} url={spotify_url} key={spotify_url + ' ' + name}/>
            AlbumRows.push(AlbumRow)
          }

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
