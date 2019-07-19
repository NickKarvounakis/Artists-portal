import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

class Albums extends Component{

  constructor(){
    super()
    this.state = {
      artists:[]
    }
  }



  componentDidMount(){
    this.props.spotifyWebApi.getMySavedTracks({"limit":50})
      .then(data => {
        let array = []
        if(data.items.length > 3)
        {
        for(let i=0;i<3;i++)
          {

            const random = Math.floor((Math.random() * data.items.length) );
            const artist = data.items[random].track.artists[0].name
            const img = data.items[random].track.album.images[0].url
            const name = data.items[random].track.album.name
            const track_name = data.items[random].track.name
            if(i>0)
              if(array[i-1].track_name === track_name)
                {
                  i--;
                  continue;
                }
            array.push({artist,img,name,track_name})
          }
        }
        else {
          array.push({artist:'MACHINE GIRL',img:'https://i.scdn.co/image/c1945e5f76b092a913fac1888eba5d30013c352d',name:'BECAUSE IM YOUNG ARROGANT AND HATE EVERYTHING YOU STAND FOR'})
          array.push({artist:'ANNA VON HAUSSWOLFF',img:'https://i.scdn.co/image/1a37d478c5be6c3f492ea991b33de0c1041f5ca8',name:'BLACK MAGIC'})
        }
          this.setState({
               artists:array
             })
      })
  }

  render(){
    return(
      <div style={{width:'100%',marginTop:'7em'}}>
        <Typography className="dashboard-alb-intro" variant="h2" style={{color:'white',textAlign:'left'}}>ARTISTS WE THINK YOU SHOULD EXPLORE</Typography>

        {this.state.artists.length > 0 ? this.state.artists.map((artist) => {
          return     <React.Fragment key={artist.name}>
          <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
            <div  className="homepage-image"  style={{backgroundImage:`url(${artist.img})`}} >
              <h1 className="homepage-album-text">{artist.artist}</h1>
              <h2 className="homepage-album-text" style={{color:'#F5F5F5'}}>{artist.name}</h2>

           </div>
          <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
          </React.Fragment>
        }) : <div className="lds-dual-ring"></div>
        }
      </div>
    )
  }
}

export default Albums
