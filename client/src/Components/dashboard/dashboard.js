import React, { Component } from 'react'
import Searchbar from './search'
import Navbar from './navbar/navbar'
import Albums from './albums'
  import GetCookie from '../cookie_checker'
import { Redirect } from 'react-router';
import CustomizedSnackbars from './error_snackbar'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



import { connect } from 'react-redux'

class Dashboard extends Component{
  constructor(props){
    super(props)
    props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
  }


  render(){
    let warning
    if(!GetCookie('access_token'))
      return <Redirect to='/' />
    if(this.props.valid_search)
      {
      warning =  <CustomizedSnackbars />
      }
    return(
      <div>
        { warning }
        <div style={{marginBottom:'7em'}}>
          <Navbar  spotifyWebApi={this.props.spotifyWebApi} />
        </div>
        <div >
          <Searchbar spotifyWebApi={this.props.spotifyWebApi} />
            <Grid item xs>
              <Typography variant="h2" style={{color:this.props.color,textAlign:'center'}}>Theme</Typography>
              <Grid container direction="column"  item xs={12}      justify="flex-end" alignItems="flex-end">
                <Grid container  direction="row" justify="center" alignItems="center">
                </Grid>
              </Grid>
            </Grid>
        </ div>
        <Albums spotifyWebApi={this.props.spotifyWebApi} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    valid_search:state.colorReducer.warning
  }
}

export default connect(mapStateToProps)(Dashboard)
