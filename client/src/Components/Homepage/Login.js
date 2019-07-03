import React, { Component } from 'react';
import {connect } from 'react-redux';
import Spotify from 'spotify-web-api-js'
import { Route, Redirect } from 'react-router'
import GetCookie from '../cookie_checker'
//REACT ROUTER
import {Link} from 'react-router-dom'

//ACTION
import { updateUrl } from '../../store/actions/user_login'


class Login extends Component {
  constructor(props){
    super()
    const params = this.getHashParams()
    this.state = {
      loggedIn:params.access_token ? true : false,
    }
    if(params.access_token){

      console.log('PARAMS------->',params)
      const allCookies = GetCookie('access_token')

      console.log(allCookies)
      if (document.cookie.split(';').filter((item) => item.trim().startsWith('access_token=')).length) {
    console.log('The cookie "reader" exists (ES6)')
}
else {
  console.log('cookie doesnt exist')
}
      props.updateUrl(allCookies)
      console.log('PARAMS------->',params)
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
  console.log(this.props)
  return (
    <Route  exact path="/" render={() => (
      this.state.loggedIn || this.props.token !== ""  ? (
        <Redirect to="/dashboard"/>
                            ) : (
        <a href='http://localhost:8888'>
          <button  className="btn-homepage btn-it" style={{color:'white',backgroundColor:'white'}} >
            <div className="button-container" >
                  <h1 style={{color:'black'}}>LOG-IN WITH</h1>
                  <img src="./spotify4.svg" alt="spotify" width="200" height="100" />
                  <h1 style={{color:'black'}}>TO GET STARTED</h1>
            </div>
          </button>
        </a>
      )
    )}/>
)}
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token
  };
};

const mapDispatchToProps = (dispatch) => ({

   updateUrl: (value) => dispatch(updateUrl(value))
})



export default connect(mapStateToProps, mapDispatchToProps)(Login);
