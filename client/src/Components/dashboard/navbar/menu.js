import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switches from './switches'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div         >
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white',whiteSpace:'nowrap',marginTop:'0.3em'}}>
        <h2 className="nav-link">Theme</h2>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{paddingBottom:0}}
      >
        <MenuItem style={{backgroundColor:'white'}}><Switches /></MenuItem>

      </Menu>
    </div>
  );
}
