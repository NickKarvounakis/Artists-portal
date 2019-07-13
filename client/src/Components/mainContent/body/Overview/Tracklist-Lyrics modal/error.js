import React from 'react'

function Error(props){


    return(
      <div  className="homepage-image"  style={{backgroundImage:`url(${props.album.image})`,position:'unset',backgroundSize:'unset'}}>
        <h1 className="homepage-album-text">Unfortunately we couldn't find a tracklist for {props.album.name}  :( </h1>
      </div>
    )

}

export default Error
