import React, { Component } from 'react';
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ToptracksRow from './Top-tracksRow'
import Grid from '@material-ui/core/Grid';


class Popular extends Component {

  _isMounted = false;

  constructor(){
    super()
    this.state = {
      rows:[]
    }

  }

  componentDidMount(){
    this._isMounted = true
    setTimeout(() =>
    {     this.getTopSongs() }
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

  async getTopSongs(){
    await this.props.spotifyWebApi.getArtistTopTracks(this.props.artist_id,'US')
      .then((response) => {
        let toptracksRows = []
        response.tracks.forEach((song) => {
          console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',song)
          const toptracksRow = <ToptracksRow song={song} />
          toptracksRows.push(toptracksRow)
        })
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
    <div className="test" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em',marginRight:'4em'}}>
      <Typography variant="h1" style={{marginBottom:'0.25em'}}>
        Popular
      </Typography>
      <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
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

export default connect(mapStateToProps)(Popular);
