import React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
        <TwitterTabs params={props.parameters.match.params.section}/>
      </MuiThemeProvider>
    </JssProvider>
  );
}

export default Demo;
