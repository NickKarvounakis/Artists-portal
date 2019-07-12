import React from 'react'
import Grid from '@material-ui/core/Grid';




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
                          <img src={this.props.image} alt={this.props.name}  width="250" height="250" style={{margin:'0.5em'}} className='related-img'/>
                          <figcaption >
                          <div>
                            <Grid container direction="row" alignItems="center" justify="center">
                            <img className='related-img-hover' src="../../../spotify.png" width="83,3" height="83,3" alt="spotify" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(this.props.spotify_url)} />
                            <img className='related-img-hover-sc' src="../../../soundcloud.svg" width="83,3" height="83,3" alt="soundcloud" style={{marginRight:'0.3em',cursor:'pointer'}} onClick={() => window.open(`https://soundcloud.com/search/people?q=${this.props.name}`)}/>
                            <img  src="../../../itunes.svg" width="60" height="60" alt="itunes" className="itunes-icon itunes-icon-hover"/>
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
