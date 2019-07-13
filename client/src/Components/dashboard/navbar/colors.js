import React from 'react';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { updateColor }  from '../../../store/actions/background-color'

class ColorPalette extends React.Component {

  changeColor(color){
    console.log(color)
    document.documentElement.style.setProperty('--background-gradient',color);
    this.props.updateColor(color)
  }

  render(){
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                  '#009688', '#8bc34a', '#cddc39', 'orangeRed', '#ffc107']
    const headline = <h4>Colors </h4>
    return(
      <Grid container xs={12} direction="row" alignItems="center" justify="center" >
      {
      colors.map((color) => {
        return <Grid item   style={{backgroundColor:color,marginRight:'1em',marginBottom:'1em'}} className="color-icn" onClick={() => this.changeColor(color)}></Grid>
      })
     }
      </Grid>
    )
  }
}


//
const mapDispatchToProps = (dispatch) => ({
   updateColor: (value) => dispatch(updateColor(value))
})

export default connect(null,mapDispatchToProps)(ColorPalette);
