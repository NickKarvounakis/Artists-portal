
import React, {Component} from 'react'
import About from './About/About'
import Overview from './Overview/Overview'
import Related from './Related/RelatedArtists'
import Error from '../../Error-route/Error'


function Sections(props) {

      const path = props.parameters.match.params.section
       let SubComponent

       if(path === 'About')
         SubComponent = <About />
       else if(path === 'Overview') {
         SubComponent = <Overview spotifyWebApi={props.spotifyWebApi}/>
       }
       else if(path === 'Related'){
         SubComponent = <Related spotifyWebApi={props.spotifyWebApi} />
       }
       else {
         SubComponent = <Error />
       }
        return(
          <div style={{marginBottom:'12em'}}>
              {SubComponent}
          </div>
        )

}

export default Sections
