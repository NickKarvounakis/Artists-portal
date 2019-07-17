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
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(data => {
      console.log(data)
       this.setState({
         artists:data
       })
      })
  }

  render(){
    return(
      <div style={{width:'100%',marginTop:'7em'}}>
        <Typography className="dashboard-alb-intro" variant="h2" style={{color:'white',textAlign:'left'}}>ARTISTS WE THINK YOU SHOULD EXPLORE</Typography>

        {this.state.artists.length > 0 ? this.state.artists.map((artist) => {
          return     <React.Fragment>
          <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
            <div  className="homepage-image"  style={{backgroundImage:`url(${artist.img})`}} >
              <h1 className="homepage-album-text">{artist.artist}</h1>
              <h2 className="homepage-album-text">{artist.name}</h2>
           </div>
          <div className="progress progress-infinite" ><div className="progress-bar3" ></div></div>
          </React.Fragment>
        }) : <div class="lds-dual-ring"></div>
        }
      </div>
    )
  }
}

export default Albums
