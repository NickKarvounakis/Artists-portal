import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Howl} from 'howler';

import ProgressBar from './ProgressBar'


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
                  <Grid container  item xs={12} direction="row" justify="center" alignItems="center" >
                    <Grid item lg xs={6} style={{maxWidth:'200px',marginRight:'5em'}}>
                      <img src={this.props.song.album.images[1].url} alt={this.props.song.name}  width="200" height="200" />
                    </Grid>
                    <Grid  item lg xs={12} direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12}>
                    <Typography variant="h5" style={{color:'white'}} >{this.props.song.name}</Typography>
                    </Grid>
                    <Grid item  xs={12}>
                    <p >Album:{this.props.song.album.name}</p>
                    </Grid>
                    <Grid container item xs={12} direction="row" alignItems="center" justify="Center">

                        {
                          !this.state.icon  ?
                          <Grid item xs={2}>
                          <img src={`../../${'play'}.svg`} alt="play button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.song.preview_url,'play')}/>
                          </Grid>
                          :
                          <Grid item xs={2}>
                          <img src={`../../${'pause'}.svg`} alt="pause button" width="40" height="40" style={{cursor:'pointer'}} onClick={() => this.play_audio(this.props.song.preview_url,'stop')}/>
                          </Grid>
                        }
                        <Grid item xs={10}>
                          <ProgressBar percentage={this.state.percentage} />
                        </Grid>
                      <Grid item>
                        <img src="../../../spotify.svg" alt="spotify" width="100" height="100"  style={{cursor:'pointer'}}    onClick={() => {window.open(this.props.song.external_urls.spotify)}}/>
                      </Grid>

                    </Grid>
                    </Grid>
                  </Grid>
          )
    }
}

export default ToptracksRow
