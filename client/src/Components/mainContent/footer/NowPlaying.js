// import React, { Component } from 'react';
// import Spotify from 'spotify-web-api-js'
// import {connect } from 'react-redux';
//
//
// class NowPlaying extends Component {
//   constructor(){
//     super()
//     this.state = {
//       nowPlaying:{
//         name: 'Not Checked',
//         image: ''
//       }
//     }
//   }
//
//
//
//
//
//   getNowPlaying(){
//     console.log(this.props.spotifyWebApi)
//     this.props.spotifyWebApi.getMyCurrentPlaybackState()
//       .then((response) => {
//         console.log('---------->',response)
//         if(response.item !== null || response.item)
//         {
//             console.log(response.item.album.images[0])
//             this.setState({
//               nowPlaying:{
//                 name: response.item.name,
//                 image: response.item.album.images[0].url
//               }
//             })
//         }
//       })
//   }
//
//
//   render(){
//   let content
//   if(this.props.token){
//     content =       <div><div>Now Playing: { this.state.nowPlaying.name} </div>
//           <img src={ this.state.nowPlaying.image } style={{width:400}}></img>
//           <button onClick={() => this.getNowPlaying()}>
//               Check now playing
//           </button></div>
//   }
//   else {
//     content = <h1>Please sign in first</h1>
//   }
//   return (
//     <div className="App">
//       {content}
//   </div>
// )}
// }
//
//
// const mapStateToProps = (state) => {
//   console.log('state:',state)
//   return{
//     token:state.userReducer.token
//   }
// }
//
// export default connect(mapStateToProps)(NowPlaying);
