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




  async getTopSongs(){
    await this.props.spotifyWebApi.getArtistTopTracks(this.props.artist_id,'US')
      .then((response) => {
        let toptracksRows = []
        response.tracks.forEach((song) => {
          const toptracksRow = <ToptracksRow song={song} key={song.name}/>
          toptracksRows.push(toptracksRow)
        })
        if(this._isMounted){
          this.setState({
            rows:toptracksRows
          })
        }
      })
      .catch(err => window.location.reload())

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
