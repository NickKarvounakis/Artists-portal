import React, { Component } from 'react';


import Popular from './Popular-section/Top-tracks'
import Albums from './Albums-section/Albums'
import SignleEps from './Singles-Eps_section/Single_eps'

import Grid from '@material-ui/core/Grid';

class Overview extends Component {
  constructor(){
    super()
    this.state = {didMount: false}
  }

  componentDidMount(){
            setTimeout(() => {
                 this.setState({didMount: true})
             }, 500)
         }

  render(){
          const {didMount} = this.state
  return (
  <div className={`fade-in ${didMount && 'visible'}`}>
        <Grid container  direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={4}>
        <Popular spotifyWebApi={this.props.spotifyWebApi}/>
        </Grid>
        <Grid item xs={8}>
        <Albums  spotifyWebApi={this.props.spotifyWebApi}/>
        <SignleEps spotifyWebApi={this.props.spotifyWebApi} />
        </Grid>
        </Grid>
    </div>
)}
}




export default (Overview);
