import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WeightButton from './WeightButton';
import FlavorTableItem from './FlavorTableItem';
import { AddBox } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  addIcon: {
    marginLeft: 'auto',
  },
}));

export default function FoodExpansionPanel(props) {
  const classes = useStyles();
  const { weight, description, name, matches, onClick } = props;
  function snackTrue() {
    onClick(true);
  }
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>{name}</Typography> {props.children}
          <WeightButton weight={weight} />
          <AddBox className={classes.addIcon} onClick={snackTrue} />
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.root}>
          <Typography>{description}</Typography>
          <Typography>
            <FlavorTableItem matches={matches} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
