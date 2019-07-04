import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class SingleEpsRow extends React.Component {

    constructor(){
      super()

    }







    render(){
      return(
                  <div>
                      <Grid container item xs={12} direction="column" justify="flex-start">
                      <Grid item xs={12}>
                      <div className="tilt">
                        <figure style={{margin:'auto'}} className="imghvr-blur">
                          <img src={this.props.image} alt={this.props.name}  />
                          <figcaption>
                            <h2 className="" style={{fontSize:'2rem',marginBottom:'auto'}}>LISTEN ON</h2>
                            <div>
                              <img src="../../../spotify.png" width="100" height="100" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.url)}/>
                              <img src="../../../soundcloud.svg" width="80" height="100" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search?q=${this.props.name}`)}/>
                              <img src="../../../itunes.svg" width="50" height="100" alt="itunes" className="itunes-icon"/>
                            </div>
                            <div >
                              <Button variant="contained" color="secondary" className="" ><span style={{color:'white'}}>Tracklist and Lyrics</span></Button>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
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

export default SingleEpsRow
