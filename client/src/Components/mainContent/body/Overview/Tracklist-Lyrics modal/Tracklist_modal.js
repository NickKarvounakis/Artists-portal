import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import TracklistContent from './Tracklist_content'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '60%',
    backgroundColor: '#e9e9e9',
    border: `5px solid ${getComputedStyle(document.documentElement).getPropertyValue('--background-gradient')}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

export default function TracklistModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let color = getComputedStyle(document.documentElement).getPropertyValue('--background-gradient');
  return (
    <div>
      <Button variant="contained" color="secondary"  className="tracklist-btn" onClick={handleOpen} style={{color:'white',backgroundColor:color}}><span >Tracklist and Lyrics</span></Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={`${classes.paper} bio `}>
          <h2 id="modal-title" style={{color:'#9a9a9a',fontSize:'1rem'}}> {props.album.name} Tracklist</h2>
            <TracklistContent album = {props.album}/>
        </div>
      </Modal>
    </div>
  );
}
