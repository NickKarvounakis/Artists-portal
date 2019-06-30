import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';

//SUB-COMPONENTS
import Demo from './section-bar/Demo'
import Overview from './Overview/Overview'
import About from './About/About'
import Error from '../../Error'
import Sections from './sections'
// material ui
import Grid from '@material-ui/core/Grid';

import { Route,Switch } from "react-router-dom";

class ContentBody extends Component {
  constructor(){
    super()

  }



  render(){
  return (
    <div className="App">
      <Route path={`/dashboard/${this.props.search_result}/:section`}  render={(props)=><Demo  parameters={props} search={this.props.search_result}/>} />
      <Route  path={`/dashboard/${this.props.search_result}/:section`}    render={(props)=><Sections  parameters={props} search={this.props.search_result}/>} />
    </div>
)}
}




const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    search_result:state.userReducer.search_result
  }
}

export default connect(mapStateToProps)(ContentBody);
