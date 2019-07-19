import React, { Component } from 'react'
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
          <h2 style={{whiteSpace:'nowrap',marginLeft:'0.5em'}} className="nav-link" onClick={() => this.onClick()}>Dashboard</h2>
    )
  }
}

          // <img src={this.state.image} alt={this.state.display_name} width="30" height="30" className="user-img" />
export default Dashboard
