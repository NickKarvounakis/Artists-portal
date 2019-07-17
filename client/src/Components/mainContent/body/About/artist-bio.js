import React, { Component } from 'react';
import {connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import SimpleModal from './bio-modal'

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
          this.button_text = 'Expand'
  }

  componentDidMount(){
    this.getAlbums()
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





  render(){

  let text,width
  if(!this.state.short)
    {
      text = 'Not avaliable'
      width = 100
    }
  else
    {
        text = this.state.short
        width = 90
    }
  return (
    <div className="bio-container" >
      <Typography variant="h2" style={{color:'white',textAlign:'center'}}>BIO</Typography>
      <div className="bio">
        <h1 style={{color:'white',fontSize:'1.4rem',width:`${width}%`}}>{text}</h1>
        <SimpleModal FullBio={this.state.long}/>
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
