import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import { updateColor }  from '../../../store/actions/background-color'

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
  let colorvalue
  if(props.color === 'crimson' || props.color === '')
    colorvalue = false
  else
    colorvalue = true
  const [state, setState] = React.useState({
    checkedA: colorvalue,
    checkedB: !colorvalue,
  });

  const handleChange = (name,opposite) => event => {
    setState({ ...state, [name]: event.target.checked,[opposite]: !event.target.checked  });
  };
  if(state.checkedA){
    document.documentElement.style.setProperty('--background-gradient','orangeRed');
    props.updateColor('orangeRed')
  }
  else if(state.checkedB){
    document.documentElement.style.setProperty('--background-gradient','crimson');
    props.updateColor('crimson')
  }
  return (
    <FormGroup>
      <FormControlLabel style={{backgroundColor:'white'}}
        control={
          <DeepOrangeSwitch
            checked={state.checkedA}
            opposite={state.checkedB}
            onChange={handleChange('checkedA','checkedB')}
            value="checkedA"
          />
        }
        label=<Typography variant="h6" style={{color:'black'}}><span style={{color:'orangeRed'}}>Orange</span> \ Black</Typography>
      />
      <FormControlLabel style={{backgroundColor:'white'}}
        control={
          <CrimsonSwitch
            checked={state.checkedB}
            opposite={state.checkedA}
            onChange={handleChange('checkedB','checkedA')}
            value="checkedA"
          />
        }
        label=<Typography variant="h6" style={{color:'black'}}><span style={{color:'crimson'}}>Crimson</span> \ Black</Typography>
      />
    </FormGroup>
  );
}

const mapStateToProps = (state) => {
  console.log('state:',state)
  return{
    color:state.colorReducer.color
  }
}

const mapDispatchToProps = (dispatch) => ({
   updateColor: (value) => dispatch(updateColor(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomizedSwitches);
