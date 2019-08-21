import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Error extends Component {


   content(url,artist,album){
     return(
              <div className="collage homepage-image" style={{backgroundImage:`url(${url})`,backgroundPosition:'top left' }}>
                <div className="wrap" style={{position:'relative'}}>
                  <h2 style={{color:'crimson'}}>{artist}</h2>
                  <h3 style={{color:'lightgrey'}}>{album}</h3>
                </div>
              </div>
          )
  }


  render(){
  return (
    <div className="App">
      <h1 style={{color:'white',fontSize:'6rem'}}>404</h1>
      <h1 style={{color:'white',fontSize:'5rem'}}>PAGE/ARTIST NOT FOUND</h1>
      <Link to={`/dashboard`} style={{fontSize:'2rem',textDecoration:'none',color:'lightblue'}} className="nav-link"><h1>HOME</h1></Link>
        {this.content('https://media.pitchfork.com/photos/5929b1bfc0084474cd0c1e73/1:1/w_600/5d056739.jpg','Beach House','Thank you lucky stars(2015)')}
        {this.content('https://static.spin.com/files/2018/02/LIeFYaM-1518196561-640x640.jpg','Neutral Milk Hotel','In The Aeroplane Over The Sea(1998)')}
        {this.content('https://fanart.tv/fanart/music/3285dc48-9505-469d-ad8a-bdf2d3dba632/albumcover/love-of-life-53aadcf8f0863.jpg','Swans','Love of Life(1992)')}
    </div>
)}
}



export default Error;
