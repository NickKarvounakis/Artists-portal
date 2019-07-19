import React from 'react';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

//Components
import ColorPalette from './colors.js'
import Slider from './color_picker'


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function rainbow(){
    document.documentElement.style.setProperty('--background-animation','colorAnimation');
    document.documentElement.style.setProperty('--background-animation-time','0.5s');
  }

  return (
    <div         >
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white',whiteSpace:'nowrap'}}>
        <h2 className="nav-link" style={{fontSize:'24px',textTransform:'none'}}>Theme</h2>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{paddingBottom:0}}
      >
      <Grid container   direction="row" justify="flex-start" alignItems="center">
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
              <h4 className="rainbow-text" onClick={() => rainbow()}>?</h4>
            </Grid>


      </Grid>



      </Menu>
    </div>
  );
}
