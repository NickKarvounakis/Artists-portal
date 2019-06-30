import React, {Component} from 'react'

import Details from './artist-bio'
import Map from './map-section/artist-map'


import Grid from '@material-ui/core/Grid';

class About extends Component {
  constructor(){
    super()

  }








  render(){
  return (
    <div className="App">
      <Grid container direction="row" >
      <Grid item xs={9}>
      <Details />
      </Grid>
      <Grid item xs={3}>
      <Map />
      </Grid>
      </Grid>
    </div>
)}
}

export default About
