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
    this.getImages()
  }




  getAlbums(){
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.search_result}&api_key=${process.env.REACT_APP_LAST_FM_KEY}&format=json`
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
            short:data.artist.bio.summary,
            long:data.artist.bio.content,
            current:data.artist.bio.summary
        })
      })
      .catch((err) => console.error(err))
  }

  getImages(){



      const url = `http://cors-anywhere.herokuapp.com/https://api.gettyimages.com/v3/search/images?phrase=kitties`
      fetch(url,{
        method: 'GET',
        headers: new Headers({'Api-key':'j878g39yx378pa77djthzzpn'}),
        mode:'no-cors'
      })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.error(err))
  }

  changeBio(){
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
    console.log(document.cookie)
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
    search_result:state.userReducer.search_result
  }
}

export default connect(mapStateToProps)(Details);