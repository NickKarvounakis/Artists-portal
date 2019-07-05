import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from './navbar/navbar'
import Albums from './albums'
  import GetCookie from '../cookie_checker'

class Dashboard extends Component{
  constructor(props){
    super(props)
    props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
  }


  render(){
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
