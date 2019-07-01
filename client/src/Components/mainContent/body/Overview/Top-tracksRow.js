import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';




let audio
class ToptracksRow extends React.Component {

    constructor(){
      super()
      this.state = {
        icon:false
      }
      this.audio = null
    }

    play_audio = (url) => {
      console.log(this.audio)
      if(this.audio)
        {
        this.audio.pause()
        this.setState({
          icon:false
        })
        this.audio = null
        }
      else {
        this.setState({
          icon:true
        })
        this.audio = new Audio(url)
        setTimeout(this.audio.play(), 2000);
      }


    }

    componentWillUnmount = () => {
      console.log('chao')
      if(this.audio)
        {
        this.audio.pause()
      }}




    render(){

      return(
                  <Grid container item  xs={6} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={3}>
                      <img src={this.props.image} alt={this.props.name}  width="200" height="200" />
                    </Grid>
                    <Grid container item xs={9} direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                    <Typography variant="h5" style={{color:'white'}} >{this.props.name}</Typography>
                    </Grid>
                    <Grid item>
                    <p >Album:{this.props.album_name}</p>
                    </Grid>
                    <Grid item>
                        {
                          !this.state.icon  ?
                          <img src={`../../${'play'}.svg`} alt="play button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.preview_url)}/>
                          :
                          <img src={`../../${'pause'}.svg`} alt="pause button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.preview_url)}/>
                        }

                    </Grid>
                    </Grid>
                  </Grid>
          )
    }
}

export default ToptracksRow
