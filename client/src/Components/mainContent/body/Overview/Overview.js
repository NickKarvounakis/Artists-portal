import React, { Component } from 'react';

//Material-UI
import Grid from '@material-ui/core/Grid';

//Components
import Popular from './Popular-section/Top-tracks'
import Albums from './Albums-section/Albums'
import SignleEps from './Singles-Eps_section/Single_eps'

class Overview extends Component {
  constructor(){
    super()
    this.state = {didMount: false,loading:false}
  }



  componentDidMount(){
            setTimeout(() => {
                 this.setState({didMount: true})
             }, 100)
         }

  render(){
  const {didMount} = this.state
  return (
  <div className={`fade-in ${didMount && 'visible'}`}>
        <Grid container  direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item md={5} xs={12}>
        <Popular spotifyWebApi={this.props.spotifyWebApi}/>
        </Grid>
        <Grid item md={7} xs={12}>
        <Albums  spotifyWebApi={this.props.spotifyWebApi}/>
        <SignleEps spotifyWebApi={this.props.spotifyWebApi} />
        </Grid>
        </Grid>
    </div>
)}
}




export default (Overview);
