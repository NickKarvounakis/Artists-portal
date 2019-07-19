import React from "react";
import JssProvider from "react-jss/lib/JssProvider";

//MATERIAL ui
import { createGenerateClassName } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//COMPONENTS
import TwitterTabs from './ChromeTabs'

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

function Demo(props) {

  return (
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: TwitterTabs.getTheme(muiBaseTheme)
        })}
      >
        <TwitterTabs rows={props.rows} rows2={props.rows2}/>
      </MuiThemeProvider>
    </JssProvider>
  );
}

export default Demo;
