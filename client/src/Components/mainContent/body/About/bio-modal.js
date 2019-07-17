import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


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
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${getComputedStyle(document.documentElement).getPropertyValue('--background-gradient')}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

export default function SimpleModal(props) {
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
  const color = getComputedStyle(document.documentElement).getPropertyValue('--background-gradient')
  return (
    <div>
      <Button type="button" variant="outlined" color="secondary" onClick={handleOpen} style={{color:color,borderColor:color}}>
        Expand
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={`${classes.paper} bio `}>
          <h2 id="modal-title">EXTENDED BIO</h2>
          <p id="simple-modal-description">
            {props.FullBio}
          </p>
        </div>
      </Modal>
    </div>
  );
}
