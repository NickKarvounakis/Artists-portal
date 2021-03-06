import React, { Component } from 'react';
import {connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';


import ControlledExpansionPanels from './ExpansionPanel.js'
import Error from './error'

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
  let base = `http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${this.props.search_result}&page_size=5&apikey=${process.env.REACT_APP_MUSICXMATCH_KEY}`

  let url = proxy + base
  await fetch(url )
    .then( response => response.json())
    .then(function(data) {
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
    let base = `http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${id}&s_release_date=desc&g_album_name=1&page_size=100&apikey=${process.env.REACT_APP_MUSICXMATCH_KEY}`
    let url = proxy + base
    await fetch(url )
      .then( response => response.json())
      .then(function(data) {
                  console.log(data)
        data.message.body.album_list.forEach((albums) => {
          const album_name = albums.album.album_name
          if(album_name.includes(this.props.album.name))
            {
              this.setState({
                album_id:albums.album.album_id
              })
            }
        })
      }.bind(this))
      .catch(error => console.log('Request failed ' + error.message ));
  }

  async get_TrackList(){
      const proxy = 'http://cors-anywhere.herokuapp.com/'
      let id = this.state.album_id
      let base =`http://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${id}&page_size=100&apikey=${process.env.REACT_APP_MUSICXMATCH_KEY}`
      let url = proxy + base
      await fetch(url )
        .then( response => response.json())
        .then(function(data) {
                    console.log(data)
          let tracklist = []
          if(data.message.body !== "")
          {
              data.message.body.track_list.forEach((track) => {
                // console.log('NAME: ',track.track.track_name,' ID:',track.track.track_id)
                const obj = {
                  name:track.track.track_name,
                  id:track.track.track_id,
                  url:track.track.track_share_url
                }
              tracklist.push(obj)
              })
              this.setState({
                tracklist:tracklist
              })
          }
          else {
            this.setState({
              tracklist:[]
            })
            return null;
          }
        }.bind(this))
        .catch(error => console.log('Request failed ' + error.message ));
  }


  async get_lyrics(){
      const proxy = 'http://cors-anywhere.herokuapp.com/'
      let lyrics = []
      await this.asyncForEach(this.state.tracklist, async(track) => {
       let base =`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track.id}&apikey=${process.env.REACT_APP_MUSICXMATCH_KEY}`

       let url = proxy + base
       await fetch(url )
        .then( response => response.json())
        .then( function(data) {
          const status_code = data.message.header.status_code
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
  let color = getComputedStyle(document.documentElement).getPropertyValue('--background-gradient');
  let fetch
  if(this.state.tracklist.length > 0) //if musicxmatch returns tracklist
     fetch = <ControlledExpansionPanels tracklist={this.state.tracklist} lyrics={this.state.lyrics} />
  else
     fetch= <Error album={this.props.album}/>
  return(
    <div className="test">
      {this.state.loaded? fetch
    :
    <Grid container direction="column" alignItems="center" justify="center">
      <div class="lds-dual-ring" >
      </div>
      <p style={{color:color,fontSize:'2rem'}}>{this.state.loading}</p>
    </Grid>

      }
    </div>
    )
}
}


const mapStateToProps = (state) => {
  return{
    search_result:state.userReducer.search_result
  }
}




export default connect(mapStateToProps)(TracklistContent);
