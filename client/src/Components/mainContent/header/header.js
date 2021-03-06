import React, { Component } from 'react';

//Redux/router
import {connect } from 'react-redux';
import { updateArtistId } from '../../../store/actions/userReducer-actions/artist_id'
import { Redirect } from 'react-router';


//Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



class ContentHeader extends Component {
  constructor(){
    super()

    this.state = {
      nowPlaying:{
        name: 'Not Checked',
        image: '',
        genres:[]
      },
      falsesearch:false
    }
  }


   componentWillMount(){
       this.getNowPlaying()
  }


  getNowPlaying(){
    this.props.spotifyWebApi.searchArtists(this.props.search_result)
      .then((response) => {
        this.setState({
          image:response.artists.items[0].images[0].url,
          name:response.artists.items[0].name,
          genres:response.artists.items[0].genres
        })
        this.props.updateArtistId(response.artists.items[0].id)
      })
      .catch(err => {
         this.setState({
           falsesearch:true
         })
         this.props.updateArtistId(false)
      })
  }


  render(){
  if(this.state.falsesearch)
    return <Redirect to='/error' />
  let listItems
  // When genres render load them into the header
  if(this.state.genres){
     listItems = this.state.genres.map((genre,index) =>
     <span className="header-description"  key={index}>{genre}</span>
   );
  }

  return (

      <header  alt={this.state.name} className="header-image" style={{backgroundImage: `url(${this.state.image})`}}>
        <h1 className="large" dir="auto" >{this.state.name}</h1>
        <Grid container direction="row" alignItems="center" justify="center">
          {listItems}
        </Grid>
        <Box mb={5} spacing={2}>
          <Grid container direction="row" alignItems='center' justify='center'>
          <button  className="btn btn-sc" style={{color:'white',backgroundColor:'black'}} onClick={() => {window.open(`https://soundcloud.com/search/people?q=${this.props.search_result}`)}}>
            <div className="button-container" >
                  <h1>Check them out on</h1>
                  <img src="../../images/soundcloud.png" alt="soundcloud" width="200" height="100" />
            </div>
          </button>
          <button  className="btn btn-sp" style={{color:'white',backgroundColor:'black'}} onClick={() => {window.open(`https://open.spotify.com/artist/${this.props.artist_id}`)}}>
            <div className="button-container" >
                  <h1>Check them out on</h1>
                  <img src="../../images/spotify4.svg" alt="spotify" width="200" height="100" />
            </div>
          </button>
          <button  className="btn btn-it itunes-icon" style={{color:'white',backgroundColor:'black',cursor:'default'}} >
            <div className="button-container" >
                  <h1>Check them out on</h1>
                  <img src="../../images/ITunes.svg" alt="Itunes" width="100" height="100" />
            </div>
          </button>
          </Grid>
        </Box>
      </header>

)}
}


const mapStateToProps = (state) => {
  return{
    search_result:state.userReducer.search_result,
    artist_id:state.userReducer.artist_id
  }
}

const mapDispatchToProps = (dispatch) => ({

   updateArtistId: (value) => dispatch(updateArtistId(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(ContentHeader);
