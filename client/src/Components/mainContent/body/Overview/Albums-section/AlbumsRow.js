import React from 'react'
import Grid from '@material-ui/core/Grid';


import TracklistModal from '../Tracklist-Lyrics modal/Tracklist_modal'


class AlbumsRow extends React.Component {








    render(){
      return(
                  <div>
                      <Grid container item lg={12} direction="column" justify="flex-start">
                      <Grid item xs >
                        <div className="tilt " style={{marginRight:'1em'}}>
                        <figure style={{margin:'auto'}} className="imghvr-blur">
                          <img src={this.props.image} alt={this.props.name}  className="home-img" />
                          <figcaption>
                            <h2 className="album-hov">LISTEN ON</h2>
                            <div>
                              <img className="album-hov-ic1" src="../../../spotify.png" width="100" height="100" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.spotify_url)}/>
                              <img className="album-hov-ic1" src="../../../soundcloud.svg" width="80" height="100" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search/albums?q=${this.props.name}`)}/>
                              <img className="album-hov-ic2" src="../../../itunes.svg" width="50" height="100" alt="itunes"  onClick={() => window.open(this.props.apple_url)} />
                            </div>
                            <div >
                              <TracklistModal album={this.props} />
                            </div>
                          </figcaption>
                        </figure>
                        </div>
                      </Grid>
                      <Grid item xs={10}>
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
