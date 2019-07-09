import React, { Component } from 'react'
import Login from './Login'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import {connect } from 'react-redux';

class Homepage extends Component{

render(){
  console.log(this.props.color)
  return(
    <div>
    <div style={{marginLeft:'4em'}}>
    <Typography style={{color:'white',marginBottom:'0.8em'}} variant="h1">Artist Infogram</Typography>
    <Grid container direction="row" >
      <Grid item xs={10}>
        <Grid container item  direction="column" alignItems="flex-start" justify="center" xs={12}>
          <Grid item xs={12}>
            <Typography variant="h1" style={{color:'white',textAlign:'left',fontSize:'5.5rem'}}>
                Learn
                <br />
                  <span style={{color:'black'}}>Everything </span>About
                <br/>
                your favourite music artist <span style={{color:this.props.color}}>on the spot</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Login spotifyWebApi={this.props.spotifyWebApi}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
        </div>

      <section >

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
