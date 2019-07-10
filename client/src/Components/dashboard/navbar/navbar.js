import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Searchbar from './nav-components/navbar_search'

import Info from './nav-components/user-info'
import Dashboard from './nav-components/Dashboard'
import Logout from './nav-components/Log-out'
import Switches from './switches'
import SimpleMenu from './menu'

import { connect } from 'react-redux'








 class SearchAppBar extends React.Component {

   searchSubmit(e){
     e.preventDefault()
     console.log(e.target[0].value)

   }



  render(){
  let Searchbar
  if(window.location.pathname !== '/dashboard')
    Searchbar = <Searchbar />
  return (
    <div >
      <AppBar position="static" style={{backgroundColor: 'rgba(0,0,0,0)',boxShadow:'none'}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
          >
          </IconButton>
          <Info spotifyWebApi={this.props.spotifyWebApi}/>
          <SimpleMenu />
          <Logout />
          <Dashboard />
          {Searchbar}
        </Toolbar>
      </AppBar>
    </div>
  );
 }
}

export default (SearchAppBar)
