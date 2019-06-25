import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import NowPlaying from './mainContent/NowPlaying'
import Search from './search'
import ArtistInfo from './mainContent/artist-info'

class Body extends Component {




  render(){
    const path = `/#access_token=${this.props.token.access_token}&refresh_token=${this.props.token.refresh_token}+`
    console.log(path)
    let content
    if(!this.props.search_result){
      content = <Search />
    }
    else if(this.props.token){
      content =
      <div className="content">
        <ArtistInfo spotifyWebApi={this.props.spotifyWebApi} />
        <NowPlaying spotifyWebApi={this.props.spotifyWebApi} />
      </div>
  }
    else {
      content = <h1>Please sign in first</h1>
    }
  return (
      <div className="App">
        {content}
      </div>
)}
}

const mapStateToProps = (state) => {
  return{
    token:state.userReducer.token,
    search_result:state.userReducer.search_result
  }
}

export default connect(mapStateToProps)(Body);
