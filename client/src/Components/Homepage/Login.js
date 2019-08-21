import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Route, Redirect } from 'react-router'
import { updateUrl } from '../../store/actions/userReducer-actions/user_login'
//Methods
import GetCookie from '../Methods/cookie_checker'




class Login extends Component {
  constructor(props){
    super()
    const params = this.getHashParams()
    this.state = {
      loggedIn:params.access_token ? true : false,
    }
    if(params.access_token){
      const allCookies = GetCookie('access_token')
      props.updateUrl(allCookies)
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
    <Route  exact path="/" render={() => (
      this.state.loggedIn   ? (
        <Redirect to="/dashboard"/>
                            ) : (
        <a href='http://localhost:3001/api/login'>
          <button  className="btn-homepage btn-it" style={{color:'white',backgroundColor:'white'}} >
            <div className="button-container" >
                  <h1 style={{color:'black'}}>LOG-IN WITH</h1>
                  <img src="./images/spotify4.svg" alt="spotify" width="400" height="150" />
                  <h1 style={{color:'black'}}>TO GET STARTED</h1>
            </div>
          </button>
        </a>
      )
    )}/>
)}
}



const mapDispatchToProps = (dispatch) => ({

   updateUrl: (value) => dispatch(updateUrl(value))
})



export default connect(null, mapDispatchToProps)(Login);
