import React from 'react'
import Grid from '@material-ui/core/Grid';



function SingleEpsRow(props) {

      return(
                  <div>
                      <Grid container item xs={12} direction="column" justify="flex-start">
                      <Grid item xs={12}>
                      <div className="tilt " style={{marginRight:'1em'}}>
                        <figure style={{margin:'auto'}} className="imghvr-blur">
                          <img src={props.image} alt={props.name}  className="home-img"/>
                          <figcaption>
                            <h2 className="" style={{fontSize:'2rem',marginBottom:'auto'}}>LISTEN ON</h2>
                            <div>
                              <img src="../../../spotify.png" width="100" height="100" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(props.url)}/>
                              <img src="../../../soundcloud.svg" width="80" height="100" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search?q=${props.name}`)}/>
                              <img src="../../../itunes.svg" width="50" height="100" alt="itunes" className="itunes-icon"/>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      </Grid>
                      <Grid container direction = "column">
                        <Grid item xs={10}>
                        <h4 style={{color:'white',margin:'auto',marginTop:'0.2em'}}>{props.name}</h4>
                        </Grid>
                        <Grid item xs={12}>
                        <h5 style={{color:'white',margin:'auto',marginTop:'0.2em'}}>{props.release_date}</h5>
                        </Grid>
                        </Grid>
                      </Grid>
                  </div>
          )
}

export default SingleEpsRow
