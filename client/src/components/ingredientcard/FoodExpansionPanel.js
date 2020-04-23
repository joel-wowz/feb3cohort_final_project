import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WeightButton from './WeightButton';
import FlavorTableItem from './FlavorTableItem';
import { AddBox } from '@material-ui/icons';
import { ButtonGroup } from '../ingredientcard/FlavorChip';

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
  const { weight, description, name, matches, onClick, handler, addItem, state } = props;
  const [ item, setItem ] = useState([]);

  function snackTrue() {
    onClick(true);
  }
  function ItemReturn(props) {
    const { item } = props;
    return <div>{item}</div>;
  }

  function ingredientAdder(e) {
    const newItem = [];
    newItem.push(e);
    setItem((item) => [ ...item, newItem ]);
  }

  function HideHandler() {
    return state.ButtonGroup ? <ButtonGroup name={name} /> : null;
  }
  return (
    <div className={classes.root} onClick={(e) => e.preventDefault}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography component={'span'} className={classes.heading}>
            {name}
          </Typography>{' '}
          {props.children}
          <WeightButton weight={weight} />
          <AddBox className={classes.addIcon} onClick={snackTrue} />
          {item.length}
          <temReturn item={item} />
        </ExpansionPanelSummary>
        {<HideHandler name={name} />}
        <ExpansionPanelDetails>
          <Typography>{description}</Typography>
          <Typography>
            <FlavorTableItem matches={matches} handler={handler} addItem={addItem} ingredientAdder={ingredientAdder} />
            <ItemReturn item={item} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
