import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Details extends Component {
  constructor(){
    super()
    this.state = {
      bio:{
        short: null,
        long: null,
        current: null
      }
    }
  }

  componentDidMount(){
    this.getAlbums()
  }




  getAlbums(){
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${'yung lean'}&api_key=${process.env.REACT_APP_LAST_FM_KEY}&format=json`
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log('BIO',data.artist.bio)
        this.setState({
            short:data.artist.bio.summary,
            long:data.artist.bio.content,
            current:data.artist.bio.summary
        })

      })
      .catch((err) => console.error(err))
  }

  changeBio(){
    console.log('AFTER:',this.state.current,'CURRENT: ',this.state.summary)
    if(this.state.current === this.state.short)
    {
      this.setState({
        current:this.state.long
      })
    }
    else {
      this.setState({
        current:this.state.short
      })
    }
    console.log(this.state.current)
  }


  render(){
    console.log(this.state.short)
  return (
    <div className="bio-container">
    <Typography variant="h2" style={{color:'white',textAlign:'center'}}>BIO</Typography>
    <div className="bio">
      <h1 style={{color:'white',fontSize:'1.4rem',width:'90%'}}>{this.state.current}</h1>
      <button onClick={() => this.changeBio()}>Expand</button>
    </div>
    </div>
)}
}


const mapStateToProps = (state) => {
  return{
    artist_id:state.userReducer.artist_id
  }
}

export default connect(mapStateToProps)(Details);
