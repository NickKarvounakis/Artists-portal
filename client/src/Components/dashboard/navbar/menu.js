import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switches from './switches'

import ColorPalette from './colors.js'
import Slider from './color_picker'
import Grid from '@material-ui/core/Grid';



import { SliderPicker } from 'react-color';

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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white',whiteSpace:'nowrap'}}>
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
      <Grid container  xs={12} direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={3}>
              <ColorPalette />
            </Grid>
            <Grid item xs={1}>
              <h1>OR</h1>
            </Grid>
            <Grid item xs>
              <h1>Pick your own color</h1>
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>

      </Grid>



      </Menu>
    </div>
  );
}
