import React, { Component } from 'react';


import Albums from './Top-tracks'

class Overview extends Component {




  render(){
  return (
    <div className="test">
      <Albums spotifyWebApi={this.props.spotifyWebApi}/>
    </div>
)}
}




export default (Overview);
