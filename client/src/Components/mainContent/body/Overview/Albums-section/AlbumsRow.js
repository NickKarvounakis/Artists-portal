import React from 'react'
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';



class AlbumsRow extends React.Component {








    render(){
      return(
                  <div>
                      <Grid container item lg={12} direction="column" justify="flex-start">
                      <Grid item xs >
                        <div className="tilt ">
                        <figure style={{margin:'auto'}} className="imghvr-blur">
                          <img src={this.props.image} alt={this.props.name}  className="home-img"/>
                          <figcaption>
                            <h2 className="" style={{fontSize:'2rem',marginBottom:'auto',color:'white'}}>LISTEN ON</h2>
                            <div>
                              <img src="../../../spotify.png" width="100" height="100" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.spotify_url)}/>
                              <img src="../../../soundcloud.svg" width="80" height="100" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search/albums?q=${this.props.name}`)}/>
                              <img src="../../../itunes.svg" width="50" height="100" alt="itunes" className="itunes-icon" onClick={() => window.open(this.props.apple_url)} />
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
