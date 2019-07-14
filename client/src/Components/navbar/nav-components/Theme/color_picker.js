import React from 'react';

import { connect } from 'react-redux'
import { updateColor }  from '../../../../store/actions/background-color'
import { SliderPicker } from 'react-color';

class Slider extends React.Component{

  handleChangeComplete = (color, event) => {
      console.log(color.hex)
      document.documentElement.style.setProperty('--background-gradient',color.hex);
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
