import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const gradient = {
  //background:'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(249,249,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 77%, rgba(51,255,222,0.3) 94%)'
  background:'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(51,255,222,0.3) 100%)',
  backgroundColor:"transparent"
  //background: 'linear-gradient(180deg, rgba(255,255,255,0) 37%, rgba(153,0,0,0.5) 100%)'
}

class AlbumsRow extends React.Component {

    constructor(){
      super()

    }







    render(){
      return(
                  <div>
                      <Grid container item xs={12} direction="column" justify="flex-start">
                      <Grid item xs >
                        <div className="tilt ">
                        <figure style={{margin:'auto'}} className="imghvr-blur">
                          <img src={this.props.image} alt={this.props.name}  />
                          <figcaption>
                            <h2 className="" style={{fontSize:'2rem',marginBottom:'auto',color:'white'}}>LISTEN ON</h2>
                            <div>
                              <img src="../../../spotify.png" width="100" height="100" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.spotify_url)}/>
                              <img src="../../../soundcloud.svg" width="80" height="100" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search/albums?q=${this.props.name}`)}/>
                              <img src="../../../itunes.svg" width="50" height="100" alt="itunes" className="itunes-icon"/>
                            </div>
                            <div >
                              <Button variant="contained" color="secondary" className=""><span style={{color:'white'}}>Tracklist and Lyrics</span></Button>
                            </div>
                          </figcaption>
                        </figure>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
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
