import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'


  import { updateSearch }  from '../store/actions/search_token'

import NowPlaying from './mainContent/footer/NowPlaying'
import Search from './search'
import ContentHeader from './mainContent/header/header'
import ContentBody from './mainContent/body/body'
import queryString from 'query-string';

//METHODS
//FUNCTION THAT EXTRACTS THE VALUE FROM THE COOKIE:ACCESS_TOKEN
import GetCookie from './cookie_checker'


class Content extends Component {





  render(){
    let query = this.props.parameters.match.params.id
    console.log('ASUNA',query)
    if(!this.props.search_result){
      console.log(this.props.updateSearch(query))
      this.props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
    }
    const path = `/#access_token=${this.props.token.access_token}&refresh_token=${this.props.token.refresh_token}+`
    let content
    const token_cookie = GetCookie('access_token')
    if(token_cookie){
      content =
      <div className="content">
        <ContentHeader spotifyWebApi={this.props.spotifyWebApi} />
        <ContentBody spotifyWebApi={this.props.spotifyWebApi} />
      </div>
  }
    else {
      content = <h1>Please sign in first</h1>
    }
  return (
      <div className="App">
        <a href='http://localhost:8888'>
                <button>Welcome</button>
        </a>
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

const mapDispatchToProps = (dispatch) => ({
   updateSearch: (value) => dispatch(updateSearch(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Content);
