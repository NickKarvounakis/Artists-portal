import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from '../navbar/navbar'
import Albums from './albums'
  import GetCookie from '../Methods/cookie_checker'
import { Redirect } from 'react-router';



class Dashboard extends Component{
  constructor(props){
    super(props)
    props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
  }



  render(){
    if(GetCookie('color'))
      document.documentElement.style.setProperty('--background-gradient',GetCookie('color'));
    else {
      document.documentElement.style.setProperty('--background-gradient','crimson');
    }
    if(!GetCookie('access_token'))
      return <Redirect to='/' />
    return(
      <div>

        <div style={{marginBottom:'7em'}}>
          <Navbar  spotifyWebApi={this.props.spotifyWebApi} />
        </div>
        <div >
          <Searchbar spotifyWebApi={this.props.spotifyWebApi} />
        </ div>
        <Albums spotifyWebApi={this.props.spotifyWebApi} />

      </div>
    )
  }
}



export default Dashboard
