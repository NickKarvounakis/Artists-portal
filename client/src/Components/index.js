import React, { Component } from 'react';

import { connect } from 'react-redux'

import Navbar from './dashboard/navbar/navbar'

  import { updateSearch }  from '../store/actions/search_token'


import ContentHeader from './mainContent/header/header'
import ContentBody from './mainContent/body/body'


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
    // const path = `/#access_token=${this.props.token.access_token}&refresh_token=${this.props.token.refresh_token}+`
    const token_cookie = GetCookie('access_token')
    let content
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
        <Navbar spotifyWebApi={this.props.spotifyWebApi}/>
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
