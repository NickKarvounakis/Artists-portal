import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from './navbar/navbar'
import Albums from './albums'
  import GetCookie from '../cookie_checker'
import { Redirect } from 'react-router';
class Dashboard extends Component{
  constructor(props){
    super(props)
    props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
  }


  render(){
    if(!GetCookie('access_token'))
      return <Redirect to='/' />
    return(
      <div>
        <div style={{marginBottom:'7em'}}>
          <Navbar  spotifyWebApi={this.props.spotifyWebApi} />
        </div>
        <div style={{marginBottom:'10em'}}>
          <Searchbar spotifyWebApi={this.props.spotifyWebApi} />
        </ div>
        <Albums spotifyWebApi={this.props.spotifyWebApi} />
      </div>
    )
  }
}

export default Dashboard
