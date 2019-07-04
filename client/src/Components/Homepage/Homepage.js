import React, { Component } from 'react'
import Login from './Login'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switches from './switches'

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
      <Grid item xs>
        <Typography variant="h2" style={{color:this.props.color,textAlign:'center'}}>Theme</Typography>
        <Grid container direction="column"  item xs={12}      justify="flex-end" alignItems="flex-end">
          <Grid container  direction="row" justify="center" alignItems="center">
          <Switches />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
        </div>

      <section bottom>

    </section>
    </div>



    )
  }



}

const mapStateToProps = (state) => {
  // <div style={{width:'80%',marginTop:'13em'}}>
  //   <Typography variant="h2" style={{color:'white',textAlign:'left',marginLeft:'1em'}}>FEATURED ARTISTS OF THE DAY</Typography>
  //   <div class="progress progress-infinite" ><div class="progress-bar3" ></div></div>
  //   <div  className="homepage-image"  style={{backgroundImage:'url(https://i.scdn.co/image/c1945e5f76b092a913fac1888eba5d30013c352d)'}}>
  //       <h1 className="homepage-album-text">MACHINE GIRL</h1>
  //       <h2 className="homepage-album-text">BECAUSE I AM YOUNG ARROGANT AND HATE EVERYTHING YOU STAND FOR</h2>
  //
  //   </div>
  //   <div class="progress progress-infinite" ><div class="progress-bar3" ></div></div>
  //   <div  className="homepage-image"  style={{backgroundImage:'url(https://i.scdn.co/image/1a37d478c5be6c3f492ea991b33de0c1041f5ca8)'}}>
  //     <h1 className="homepage-album-text">ANNA VON HAUSSWOLFF</h1>
  //     <h2 className="homepage-album-text">DEAD MAGIC</h2>
  //   </div>
  //   <div class="progress progress-infinite" ><div class="progress-bar3" ></div></div>
  // </div>
  return{
    color:state.colorReducer.color
  }
}




export default connect(mapStateToProps)(Homepage);
