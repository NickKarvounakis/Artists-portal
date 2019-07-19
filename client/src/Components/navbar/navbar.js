
import React from 'react';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

//Components
import Searchbar from './nav-components/navbar_search'
import Info from './nav-components/user-info'
import Dashboard from './nav-components/Dashboard'
import Logout from './nav-components/Log-out'
import SimpleMenu from './nav-components/Theme/menu'





 class SearchAppBar extends React.Component {

   searchSubmit(e){
     e.preventDefault()
     console.log(e.target[0].value)

   }



  render(){
  let Searchbarx
  if(window.location.pathname !== '/dashboard')
    Searchbarx = <Searchbar />
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
          {Searchbarx}
        </Toolbar>
      </AppBar>
    </div>
  );
 }
}

export default (SearchAppBar)
