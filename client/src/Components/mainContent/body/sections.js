// <Route  path={`/dashboard/${this.props.search_result}/section=Overview`}   component={Overview} />
// <Route  path={`/dashboard/${this.props.search_result}/Related`}   component={About} />
// <Route  path={`/dashboard/${this.props.search_result}/About`}   component={About} />
// <Route component={Error} status={404} />

import React, {Component} from 'react'
import About from './About/About'
import Overview from './Overview/Overview'
import Related from './Related/RelatedArtists'
import Error from '../../Error'


class Sections extends Component {
    constructor(){
      super()
      this.state={
        content:null
      }
    }



    render(){
      const path = this.props.parameters.match.params.section
       let SubComponent
       if(path === 'About')
         SubComponent = <About />
       else if(path === 'Overview') {
         SubComponent = <Overview spotifyWebApi={this.props.spotifyWebApi}/>
       }
       else if(path === 'Related'){
         SubComponent = <Related spotifyWebApi={this.props.spotifyWebApi} />
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


// render(){
//     const values = queryString.parse(this.props.location.search)
//     console.log(values.name) // "im"
//     const path
//     return(<div>xd</div>)
//     }
}

export default Sections
