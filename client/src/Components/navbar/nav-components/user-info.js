import React, { Component } from 'react'

//Material UI
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

class Info extends Component{
  constructor(){
    super()
    this.state = {
      display_name:null,
      image:null
    }
  }

  componentDidMount(){
    this.getInfo()
  }

  getInfo(){
      this.props.spotifyWebApi.getMe()
        .then((response) => {
            let image
            let display_name = response.display_name
            if(response.images.length > 0)
                image = response.images[0].url
            this.setState({
              display_name,
              image
            })
        })
  }

  render(){
    return(
      <Grid container direction="row" justify="flex-start" alignItems="center">
            <h2 style={{color:'white'}}>Welcome {this.state.display_name}</h2>
            <Avatar alt={this.state.display_name} src={this.state.image} />
      </Grid>
    )
  }
}


export default Info
