import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';



class AlbumsRow extends React.Component {

    constructor(){
      super()

    }







    render(){
      return(
                  <div>
                      <Grid container item xs={12} direction="column" justify="flex-start">
                      <Grid item xs={12}>
                      <img src={this.props.image} alt={this.props.name} style={{margin:'auto'}}/>
                      </Grid>
                      <Grid item xs={12}>
                      <h4 style={{color:'white',margin:'auto',marginTop:'0.2em'}}>{this.props.name}</h4>
                      </Grid>
                      <Grid item xs={12}>
                      <h5 style={{color:'white',margin:'auto',marginTop:'0.2em'}}>{this.props.release_date}</h5>
                      </Grid>
                      </Grid>
                  </div>
          )}
}

export default AlbumsRow
