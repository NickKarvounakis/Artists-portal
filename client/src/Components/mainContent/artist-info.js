import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js'
import {connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { updateArtistId } from '../../store/actions/artist_id'

class ArtistInfo extends Component {
  constructor(){
    super()

    this.state = {
      nowPlaying:{
        name: 'Not Checked',
        image: ''
      }
    }
  }


  componentDidMount(){
        this.getNowPlaying()
  }


  getNowPlaying(){
    console.log(this.props.spotifyWebApi)
    this.props.spotifyWebApi.searchArtists(this.props.search_result)
      .then((response) => {
        console.log('---------->',response.artists.items[0])
        this.setState({
          image:response.artists.items[0].images[0].url,
          name:response.artists.items[0].name
        })

        this.props.updateArtistId(response.artists.items[0].id)

      })
  }


  render(){
  let content

  return (

      <header  alt={this.state.name} className="header-image" style={{backgroundImage: `url(${this.state.image})`}}>
        <h1 className="large" dir="auto">{this.state.name}</h1>
        <button  className="btn" style={{color:'white',backgroundColor:'black'}}>
          <div className="button-container" >
                <h1>Check them out on</h1>
                <img src="./soundcloud.png" alt="soundcloud" width="200" height="100" />
          </div>
        </button>
      </header>

)}
}


const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    token:state.userReducer.token,
    search_result:state.userReducer.search_result
  }
}

const mapDispatchToProps = (dispatch) => ({

   updateArtistId: (value) => dispatch(updateArtistId(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(ArtistInfo);
