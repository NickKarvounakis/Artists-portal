import React, {Component} from 'react'



//material UI
import Grid from '@material-ui/core/Grid';

//Components
import Details from './artist-bio'
import Map from './map-section/artist-map'

class About extends Component {

  constructor(){
    super()
    this.state = {didMount: false}
  }


  componentDidMount(){
            setTimeout(() => {
                 this.setState({didMount: true})
             }, 200)
         }

  render(){
          const {didMount} = this.state
  return (
  <div className={`fade-in ${didMount && 'visible'}`}>
      <Grid container direction="row">
      <Grid item sm={12} lg={9} >
      <Details />
      </Grid>
      <Grid item sm lg={3}>
      <Map />
      </Grid>
      </Grid>
    </div>
)}
}

export default About
