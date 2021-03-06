import React from 'react';

//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor:'inherit',

  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold',
    color:'#222'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 400,
    color: '#9a9a9a'
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>


        {
          props.tracklist.map((track,index) => {
            return    <ExpansionPanel expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} style={{backgroundColor:'#e9e9e9',boxShadow:'none'}}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                      >
                        <Typography variant="h1" className={classes.heading}>{track.name}</Typography>
                        <Typography variant="h1" className={classes.secondaryHeading}>Lyrics</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography variant="h5">
                          {props.lyrics[index]}
                         <Grid onClick={() => window.open(track.url)} container direction="row" style={{cursor:'pointer'}}>
                           <img src="../../../images/musicxmatch.svg" alt="musicxmatch"  width="30" />
                           <h6>Full lyrics</h6>
                        </Grid>
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

        })}
    </div>
  );
}
