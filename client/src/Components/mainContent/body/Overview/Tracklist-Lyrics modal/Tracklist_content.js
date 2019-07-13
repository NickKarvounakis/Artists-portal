import React, { Component } from 'react';
import {connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ControlledExpansionPanels from './ExpansionPanel.js'


class TracklistContent extends Component {
  constructor(){
    super()
    this.state = {
      tracklist:[],
      lyrics:[],
      loading:'loading'
    }

  }


  componentDidMount(){
        this.get_Tracklist()
        setInterval(() => {
          if(this.state.loading.length === 10)
            {
              this.setState({
                loading:'loading'
              })
            }
          else{
                this.setState({
                  loading:this.state.loading + '.'
                })
            }
        },1000)

  }

  async  asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}


most_popular_artist(max,array){
  let max2 = max
  let index = 0
  for(let i = 1;i<array.length;i++){
    let popularity = array[i].artist.artist_rating
    if(popularity > max2){
      max2 = popularity
      index = i
    }
  }
  return index
}

async get_artistID(){
  const proxy = 'http://cors-anywhere.herokuapp.com/'
  let base = `http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${this.props.search_result}&page_size=5&apikey=90189c859bd033a23ddc8e216841b859`

  let url = proxy + base
  await fetch(url )
    .then( response => response.json())
    .then(function(data) {
      console.log('ARTISTS',data)
      const max = data.message.body.artist_list[0].artist.artist_rating
      const most_popular_artist_position= this.most_popular_artist(max,data.message.body.artist_list)
      const id = data.message.body.artist_list[most_popular_artist_position].artist.artist_id
      this.setState({
        artist_id:id
      })

    }.bind(this))
    .catch(error => console.log('Request failed ' + error.message ));
}


  async get_albumID(){
    const proxy = 'http://cors-anywhere.herokuapp.com/'
    let id = this.state.artist_id
    let base = `http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${id}&s_release_date=desc&g_album_name=1&page_size=100&apikey=90189c859bd033a23ddc8e216841b859`
    let url = proxy + base
    console.log('request to ',id)
    await fetch(url )
      .then( response => response.json())
      .then(function(data) {
        console.log('ALBUMS',data.message)
        data.message.body.album_list.forEach((albums) => {
          const album_name = albums.album.album_name
          if(album_name.includes(this.props.album_name))
            {
              this.setState({
                album_id:albums.album.album_id
              })
              console.log('--------->',this.state.album_id)
            }
        })
      }.bind(this))
      .catch(error => console.log('Request failed ' + error.message ));
  }

  async get_TrackList(){
      const proxy = 'http://cors-anywhere.herokuapp.com/'
      console.log(this.state.album_id)
      let id = this.state.album_id
      let base =`http://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${id}&page_size=100&apikey=90189c859bd033a23ddc8e216841b859`
      let url = proxy + base
      await fetch(url )
        .then( response => response.json())
        .then(function(data) {
          console.log('TRACK-LIST',data.message)
          let tracklist = []
          data.message.body.track_list.forEach((track) => {
            // console.log('NAME: ',track.track.track_name,' ID:',track.track.track_id)
            const obj = {
              name:track.track.track_name,
              id:track.track.track_id
            }
          tracklist.push(obj)
          })
          this.setState({
            tracklist:tracklist
          })
        }.bind(this))
        .catch(error => console.log('Request failed ' + error.message ));
  }


  async get_lyrics(){
      const proxy = 'http://cors-anywhere.herokuapp.com/'
      let lyrics = []
      console.log('HEYYYYYYYYYYYYYYY',this.state.tracklist)
      await this.asyncForEach(this.state.tracklist, async(track) => {
       let base =`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track.id}&apikey=90189c859bd033a23ddc8e216841b859`

       let url = proxy + base
       await fetch(url )
        .then( response => response.json())
        .then( function(data) {
          console.log(data)
          const status_code = data.message.header.status_code
          console.log(status_code,'  ',track.name,' : ',data.message.body)
          if(status_code === 200)
             lyrics.push(data.message.body.lyrics.lyrics_body)
          else {
             lyrics.push('not available')
          }
          this.setState({
            lyrics:lyrics
          })
        }.bind(this))
        .catch(error => console.log('Request failed ' + error.message ));
        })

      await this.setState({
        loaded:true
      })

  }


  async get_Tracklist(){
    // GET ARTIST ID
    await this.get_artistID()
    // GET ARTIST ALBUM
    await this.get_albumID()
    // ALBUM TRACK LIST
    await this.get_TrackList()
    // TRACK LYRIC LIST
    await this.get_lyrics()
  }


  render(){
  return(
    <div className="test">
      {this.state.loaded? <ControlledExpansionPanels tracklist={this.state.tracklist} lyrics={this.state.lyrics} />
    :
    <Grid container direction="column" alignItems="center" justify="center">
      <div class="lds-dual-ring">
      </div>
      <p style={{color:'#9a9a9a',fontSize:'2rem'}}>{this.state.loading}</p>
    </Grid>

      }
    </div>
    )
}
}


const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    search_result:state.userReducer.search_result
  }
}

// const mapDispatchToProps = (dispatch) => ({
//
//    set_country: (value) => dispatch(set_country(value))
// })


export default connect(mapStateToProps)(TracklistContent);
