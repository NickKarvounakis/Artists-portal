import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Redirect } from 'react-router';
class Logout extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  onClick(){
    this.setState({
      redirectToReferrer:true
    })
  }

  delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

  render(){
    const redirectToReferrer = this.state.redirectToReferrer;
     if (redirectToReferrer === true) {
             this.delete_cookie('access_token') //logs out the user
             return <Redirect to={`/`}  />
       }
    return(
            <a className="nav-link" onClick={() => this.onClick()}><h2 style={{whiteSpace:'nowrap'}}>Logout</h2></a>
    )
  }
}

          // <img src={this.state.image} alt={this.state.display_name} width="30" height="30" className="user-img" />
export default Logout
