import React from 'react';

//Redux-router
import { connect } from 'react-redux'
import { updateColor }  from '../../../../store/actions/colorReducer-actions/background-color'

//Components
import { SliderPicker } from 'react-color';

class Slider extends React.Component{


  handleChangeComplete = (color, event) => {
      console.log(color.hex)
      document.documentElement.style.setProperty('--background-gradient',color.hex);
      document.documentElement.style.setProperty('--background-animation','gradient');
      document.documentElement.style.setProperty('--background-animation-time','2s');
      this.props.updateColor(color.hex)
  } ;


  render(){
  return (
    <React.Fragment>
      <SliderPicker onChangeComplete={ this.handleChangeComplete } />
    </React.Fragment>
  )
}
}

//
const mapDispatchToProps = (dispatch) => ({
   updateColor: (value) => dispatch(updateColor(value))
})

export default connect(null,mapDispatchToProps)(Slider);
