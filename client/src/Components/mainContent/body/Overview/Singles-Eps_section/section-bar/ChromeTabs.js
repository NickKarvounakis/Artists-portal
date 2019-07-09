/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const TwitterTabs = (props) => {
  const [ index, onChange] = useState(0);
  const [count , setCount] = useState(0);
  let content
  let content2
  console.log(props.rows2)
  if(props.rows.length === 0)
    content = <Typography variant="h6" style={{color:'white'}}>NO SINGLES</Typography>
  else
    content = props.rows
  if(props.rows2)
    {
    if(props.rows2.length === 0)
      content2 = <Typography variant="h6" style={{color:'white'}}>NO APPEARANCES</Typography>
    else
      content2 = props.rows2
    }
  return (
    <div>
    <Tabs
      variant={"fullWidth"}
      centered
      value={index}
      onChange={(e, val) => {
        console.log('E:',e,"VAL:",val)
        onChange(val)
        setCount(count+1)
      }}
    >
      <Tab classes={{ label: "MuiTab-label" }} label="Singles and Eps" disableRipple />
      <Tab classes={{ label: "MuiTab-label" }} label="Appears on" disableRipple />
    </Tabs>
      {index === 0 ?
      <Grid container item xs={12} direction="row" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em'}} >
            {content}
      </Grid> : <Grid container item xs={12} direction="row" style={{marginLeft:'4em',textAlign:'left',marginTop:'3em'}} >
            {content2}
      </Grid> }
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    search_result:state.userReducer.search_result
  }
}

TwitterTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      width: "100%",
      color:'Beige'
    },
    indicator: {
      // backgroundColor: "rgb(255,92,83)"
      backgroundImage: 'linear-gradient(45deg, transparent,rgb(29,199,252) ,rgb(104,110,252) ,rgb(233,80,155) ,rgb(218,77,184),rgb(104,110,252),transparent )',
      backgroundColor:'inherit'
      // backgroundImage: 'linear-gradient(45deg, orangeRed,rgb(104,110,252),rgb(29,199,252),rgb(29,199,252),rgb(29,199,252),rgb(104,110,252),orangeRed )'
    }
  },
  MuiTab: {
    root: {
      minHeight: 53,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      },
      "&:hover": {
        backgroundColor: "rgba(255,0,255, 0.1)",
        "& .MuiTab-label": {
          color: "#1da1f2"
        }
      },
      "&$selected": {
        "& *": {
          color: "beige"
        }
      }
    },
    textColorInherit: {
      opacity: 1
    },
    wrapper: {
      "& svg": {
        fontSize: 26.25
      }
    },
    labelContainer: {
      width: "100%",
      padding: 15
    },
    label: {
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700,
      color: '"#657786"'
    }
  }
});



export default connect(mapStateToProps)(TwitterTabs);
