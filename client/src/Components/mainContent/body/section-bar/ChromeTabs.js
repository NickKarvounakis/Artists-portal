/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {connect } from 'react-redux';
import { Redirect} from 'react-router-dom'


const TwitterTabs = (props) => {
  const [ index, onChange] = useState(0);
  const [count , setCount] = useState(0);
  let search = props.params

  let section
  let section2
  switch(search){
    case 'Overview':
      section= 0
      break;
    case 'Related':
      section=1
      break;
    case 'About':
      section = 2
      break;
    default:
      break;
  }
  switch(index){
    case 0:
      section2 = 'Overview'
      break;
    case 1:
      section2 = 'Related'
      break;
    case 2:
      section2 = 'About'
      break;
    default:
      break;
  }
  return (
    <div>
    <Tabs
      variant={"fullWidth"}
      centered
      value={section}
      onChange={(e, val) => {
        onChange(val)
        setCount(count+1)
      }}
    >
      <Tab classes={{ label: "MuiTab-label" }} label="Overview" disableRipple />
      <Tab classes={{ label: "MuiTab-label" }} label="Related" disableRipple />
      <Tab classes={{ label: "MuiTab-label" }} label="About" disableRipple >
      </Tab>
    </Tabs>

    {count === 0 ? <Redirect to={`/dashboard/${props.search_result}/${search}`} /> : <Redirect to={`/dashboard/${props.search_result}/${section2}`} />  }
    <Redirect to={`/dashboard/${props.search_result}/${search}`} />
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
