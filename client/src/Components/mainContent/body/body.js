import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Route} from "react-router-dom";


//COMPONENTS
import Demo from './section-bar/Demo'
import Sections from './sections'



class ContentBody extends Component {




  render(){
  return (
    <div className="App">
      <Route path={`/dashboard/${this.props.search_result}/:section`}  render={(props)=><Demo  parameters={props} search={this.props.search_result} />} />
      <Route  path={`/dashboard/${this.props.search_result}/:section`}    render={(props)=><Sections  parameters={props} search={this.props.search_result} spotifyWebApi={this.props.spotifyWebApi} />} />
  </div>
)}
}




const mapStateToProps = (state) => {
  return{
    search_result:state.userReducer.search_result
  }
}

export default connect(mapStateToProps)(ContentBody);
