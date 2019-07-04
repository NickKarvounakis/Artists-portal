import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

class Albums extends Component{
  render(){
    return(
      <div style={{width:'100%',marginTop:'13em'}}>
        <Typography variant="h2" style={{color:'white',textAlign:'left',marginLeft:'1em'}}>FEATURED ARTISTS OF THE DAY</Typography>
        <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
        <div  className="homepage-image"  style={{backgroundImage:'url(https://i.scdn.co/image/c1945e5f76b092a913fac1888eba5d30013c352d)'}}>
            <h1 className="homepage-album-text">MACHINE GIRL</h1>
            <h2 className="homepage-album-text">BECAUSE I AM YOUNG ARROGANT AND HATE EVERYTHING YOU STAND FOR</h2>

        </div>
        <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
        <div  className="homepage-image"  style={{backgroundImage:'url(https://i.scdn.co/image/1a37d478c5be6c3f492ea991b33de0c1041f5ca8)'}}>
          <h1 className="homepage-album-text">ANNA VON HAUSSWOLFF</h1>
          <h2 className="homepage-album-text">DEAD MAGIC</h2>
        </div>
        <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
      </div>
    )
  }
}

export default Albums
