import React, { Component } from 'react';
import {connect } from 'react-redux';

//Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Components
import RelatedArtistsRow from './RelatedArtistsRow'

class Related extends Component {



  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
        setTimeout(() => {
            this.getAlbums()
        },1000)
  }



   getAlbums(){
     this.props.spotifyWebApi.getArtistRelatedArtists(this.props.artist_id)
      .then((response) => {
        let AlbumRows = []
        response.artists.forEach((artist) => {
           const name = artist.name
           const spotify_url=artist.external_urls.spotify
           if(artist.images.length !== 0)
           {
            const AlbumRow = <RelatedArtistsRow    name={name} image={artist.images[0].url}  spotify_url={spotify_url} key={name}/>
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
