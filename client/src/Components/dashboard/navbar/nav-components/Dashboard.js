import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Redirect } from 'react-router';
class Dashboard extends Component{
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

  render(){
    const redirectToReferrer = this.state.redirectToReferrer;
    const path = window.location.pathname
     if (redirectToReferrer === true && path !== '/dashboard') {
             return <Redirect to={`/dashboard`}  />

       }
    return(
            <a className="nav-link" onClick={() => this.onClick()}><h2 style={{whiteSpace:'nowrap',marginLeft:'0.5em'}}>Dashboard</h2></a>
    )
  }
}

          // <img src={this.state.image} alt={this.state.display_name} width="30" height="30" className="user-img" />
export default Dashboard
