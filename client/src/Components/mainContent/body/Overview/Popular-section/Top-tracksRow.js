import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';
import {Howl, Howler} from 'howler';

import ProgressBar from './ProgressBar'

let audio
class ToptracksRow extends React.Component {

    constructor(){
      super()
      this.state = {
        icon:false,
        percentage: 0,
        preview_duration:0
      }
      this.audio = null
    }

    play_audio = (url,action) => {
      console.log(this.audio)
      if(action === 'stop')
              {

              this.setState({
                icon:false
              })
              this.audio.stop()
              this.audio.unload()
              this.audio = null
        }
      else if(action === 'play'){
                        var self = this
              var i
              let c
              console.log(2)
              this.setState({
                icon:true
              })
              this.audio = new Howl({
                src: url,
                format:['mp3', 'aac']
              })
              console.log(this.audio)

              this.audio.on('load',() => {
                this.audio.play()
              })
              this.audio.on('play',() => {

                this.audio.fade(0.0,1.0,500)
                let x = this.audio.duration()
                // this.setState({
                //   preview_duration:Math.floor(this.audio.duration())
                // })
                let a = x;

                i  = setInterval( timer, 1000 );
                  function timer()  {
                    console.log( a );
                    self.setState({
                      percentage:self.state.percentage + (100/x)
                    })
                    if(a === 2)
                        self.audio.fade(1.0,0,1000)
                    if ( a < 1 ) {
                        console.log( 'Reaching Stop' );
                        clearInterval( i );
                        return;
                    }
                    a -= 1;
                }
              })
              this.audio.on('stop',() => {
                this.setState({
                  percentage:0
                })
                clearInterval(i)
              })
              this.audio.on('end',() => {

                this.audio.stop()
                this.audio.unload()
                this.setState({
                  percentage:0,
                  icon:false
                })
                console.log('Finished!');
              });
            }






    }

    componentWillUnmount = () => {
      console.log('chao')
      if(this.audio)
        {
        this.audio.unload()
      }}




    render(){

      return(
                  <Grid container  item xs={12} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                      <img src={this.props.image} alt={this.props.name}  width="200" height="200" style={{marginRight:'1em'}}/>
                    </Grid>
                    <Grid container item xs={6} direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12}>
                    <Typography variant="h5" style={{color:'white'}} >{this.props.name}</Typography>
                    </Grid>
                    <Grid item  xs={12}>
                    <p >Album:{this.props.album_name}</p>
                    </Grid>
                    <Grid container item xs={12} direction="row" alignItems="center" justify="Center">

                        {
                          !this.state.icon  ?
                          <Grid item xs={2}>
                          <img src={`../../${'play'}.svg`} alt="play button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.preview_url,'play')}/>
                          </Grid>
                          :
                          <div>
                          <img src={`../../${'pause'}.svg`} alt="pause button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.preview_url,'stop')}/>
                          </div>
                        }
                        <Grid item xs={10}>
                          <ProgressBar percentage={this.state.percentage} />
                        </Grid>

                    </Grid>
                    </Grid>
                  </Grid>
          )
    }
}

export default ToptracksRow
