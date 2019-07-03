import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import { updateColor }  from '../../store/actions/background-color'

const DeepOrangeSwitch = withStyles({
  switchBase: {
    color: deepOrange[400],
    '&$checked': {
      color: deepOrange[500],
    },
    '&$checked + $track': {
      backgroundColor: deepOrange[400],
    },
  },
  checked: {},
  track: {},
})(Switch);

const CrimsonSwitch = withStyles({
  switchBase: {
    color: pink[700],
    '&$checked': {
      color: pink[700],
    },
    '&$checked + $track': {
      backgroundColor: pink[700],
    },
  },
  checked: {},
  track: {},
})(Switch);



function CustomizedSwitches(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (name,opposite) => event => {
    setState({ ...state, [name]: event.target.checked,[opposite]: !event.target.checked  });
  };
  if(state.checkedA){
    document.documentElement.style.setProperty('--background-gradient','orangeRed');
    props.updateColor('orangeRed')
  }
  else {
    document.documentElement.style.setProperty('--background-gradient','crimson');
    props.updateColor('crimson')
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <DeepOrangeSwitch
            checked={state.checkedA}
            opposite={state.checkedB}
            onChange={handleChange('checkedA','checkedB')}
            value="checkedA"
          />
        }
        label=<Typography variant="h6" style={{color:'white'}}>Orange \ Black</Typography>
      />
      <FormControlLabel
        control={
          <CrimsonSwitch
            checked={state.checkedB}
            opposite={state.checkedA}
            onChange={handleChange('checkedB','checkedA')}
            value="checkedA"
          />
        }
        label=<Typography variant="h6" style={{color:'white'}}>Crimson \ Black</Typography>
      />
    </FormGroup>
  );
}

const mapDispatchToProps = (dispatch) => ({
   updateColor: (value) => dispatch(updateColor(value))
})

export default connect(null,mapDispatchToProps)(CustomizedSwitches);
