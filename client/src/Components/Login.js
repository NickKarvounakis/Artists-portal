import React, { Component } from 'react';
import {connect } from 'react-redux';
import Spotify from 'spotify-web-api-js'

//REACT ROUTER
import {Link} from 'react-router-dom'

//ACTION
import { updateUrl } from '../store/actions/user_login'


class Login extends Component {
  constructor(props){
    super()
    const params = this.getHashParams()
    this.state = {
      loggedIn:params.access_token ? true : false,
    }
    if(params.access_token){
      props.spotifyWebApi.setAccessToken(params.access_token)
      console.log('PARAMS------->',params)
      props.updateUrl(params)
    }
  }


  getHashParams() {
   var hashParams = {};
   var e, r = /([^&;=]+)=?([^&;]*)/g,
       q = window.location.hash.substring(1);
   while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
   }
   return hashParams;
 }

  render(){
  return (
      <a href='http://localhost:8888'>
        <button>Log-in with spottify</button>
      </a>
)}
}

const mapDispatchToProps = (dispatch) => ({

   updateUrl: (value) => dispatch(updateUrl(value))
})



export default connect(null, mapDispatchToProps)(Login);
