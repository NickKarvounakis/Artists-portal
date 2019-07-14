import React, { Component } from 'react'
import Login from './Login'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import {connect } from 'react-redux';

class Homepage extends Component{

render(){
  document.documentElement.style.setProperty('--background-gradient','#9c27b0');
  return(
    <div>
    <section className="homepage-container" >
    <Grid container direction="row" >
      <Grid item xs={12} >
        <Grid container item  direction="column" alignItems="flex-start" justify="center" xs={12}>
          <Grid item xs={12} style={{marginLeft:'4em',marginTop:'7em'}}>
            <Typography variant="h1" className="body-text">
                Learn
                <br />
                  <span className="homepage-span">Everything </span>About
                <br/>
                your favourite music artist <span style={{color:this.props.color}}>on the spot</span>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{marginLeft:'4em'}}>
            <Login spotifyWebApi={this.props.spotifyWebApi}/>
          </Grid>
          <div className="collage" style={{backgroundImage:'url(https://i3.cdn.hhv.de/catalog/475x475/00611/611058.jpg)',marginTop:'4em'}}>
            <div className="wrap">
              <h2 style={{color:'lightgrey'}}>Travis Scott</h2>
              <h3 style={{color:'lightgrey'}}>Days before rodeo(2004)</h3>
            </div>
          </div>

        </Grid>
      </Grid>
    </Grid>
    </section>
    </div>



    )
  }



}

const mapStateToProps = (state) => {
  return{
    color:state.colorReducer.color
  }
}




export default connect(mapStateToProps)(Homepage);
