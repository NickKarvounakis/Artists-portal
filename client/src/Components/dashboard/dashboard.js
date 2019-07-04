import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from './navbar/navbar'
import Albums from './albums'


class Dashboard extends Component{



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
