import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from '../navbar/navbar'
import Albums from './albums'
  import GetCookie from '../cookie_checker'
import { Redirect } from 'react-router';
import CustomizedSnackbars from './error_snackbar'




import { connect } from 'react-redux'

class Dashboard extends Component{
  constructor(props){
    super(props)
    props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
  }


  render(){
    let warning
    if(!GetCookie('access_token'))
      return <Redirect to='/' />
    if(this.props.valid_search)
      {
      warning =  <CustomizedSnackbars />
      }
    return(
      <div>
        { warning }
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

const mapStateToProps = (state) => {
  return{
    valid_search:state.colorReducer.warning
  }
}

export default connect(mapStateToProps)(Dashboard)
