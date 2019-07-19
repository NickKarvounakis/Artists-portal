import React from 'react';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { updateColor }  from '../../../../store/actions/colorReducer-actions/background-color'

class ColorPalette extends React.Component {
  constructor(){
    super()
    this.state = {
      current_color:null
    }
  }

  changeColor(color){
    this.setState({
      current_color:color
    })
    document.documentElement.style.setProperty('--background-gradient',color);
    document.documentElement.style.setProperty('--background-animation','gradient');
    document.documentElement.style.setProperty('--background-animation-time','2s');
    this.props.updateColor(color)
  }

  componentWillReceiveProps(nextProps){
    if(!this.colors.includes(nextProps.color))
      {
      this.setState({
        current_color:null
      })
      }
  }



  render(){
    this.colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                  '#009688', '#8bc34a', 'crimson', 'orangeRed', '#ffc107']
    return(
      <Grid container direction="row" alignItems="center" justify="center" >
      {
      this.colors.map((color) => {
        if(this.state.current_color === color)
          return <Grid item  key={color} style={{backgroundColor:color,marginRight:'1em',marginBottom:'1em'}} className="color-icn" onClick={() => this.changeColor(color)} >
                    <img src="../../../images/checkmark.png" alt="checkmark" width="20" height="20" style={{display:'block',margin:'auto',marginTop:'0.5em'}}/>
                  </Grid>
        else
          return <Grid item  key={color} style={{backgroundColor:color,marginRight:'1em',marginBottom:'1em'}} className="color-icn" onClick={() => this.changeColor(color)}></Grid>
    })
     }
      </Grid>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    color:state.colorReducer.color
  }
}

const mapDispatchToProps = (dispatch) => ({
   updateColor: (value) => dispatch(updateColor(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(ColorPalette);
