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

class RelatedArtistsRow extends React.Component {

    constructor(){
      super()
      this.state = {didMount: false}
    }


    componentDidMount(){
              setTimeout(() => {
                   this.setState({didMount: true})
               }, 0)
           }




    render(){
      const {didMount} = this.state
      return(
                  <div className={`fade-in ${didMount && 'visible'}`}>
                      <Grid container item xs={12} direction="column" justify="flex-start">
                      <Grid item xs={12} >
                        <div className="tilt ">
                        <figure style={{margin:'auto',backgroundColor:'transparent'}} className="imghvr-blur">
                          <img src={this.props.image} alt={this.props.name}  width="250" height="250" style={{margin:'0.5em'}}/>
                          <figcaption >
                          <div>
                            <Grid container direction="row" alignItems="center" justify="center">
                            <img src="../../../spotify.png" width="83,3" height="83,3" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.spotify_url)}/>
                            <img src="../../../soundcloud.svg" width="83,3" height="83,3" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search/people?q=${this.props.name}`)}/>
                            <img src="../../../itunes.svg" width="60" height="60" alt="itunes" className="itunes-icon"/>
                            </Grid>
                          </div>
                          </figcaption>
                        </figure>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                      <h4 style={{color:'white',margin:'auto',marginTop:'0.2em'}}>{this.props.name}</h4>
                      </Grid>

                      </Grid>
                  </div>
          )}
}

export default RelatedArtistsRow
