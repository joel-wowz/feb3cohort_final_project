import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(255, 173, 66)',
    borderRadius: '4px',
    marginRight: '4px',
    color: 'Black',
    fontFamily: 'Impact',
  },
}));
export default function FlavorChip(props) {
  const classes = useStyles();
  const { matches, handler, addItem, ingredientAdder } = props;

  function clickHandler() {
    handler(true);
  }
  function HandleHandler(e) {
    addItem(e);
  }

  return matches.map((match) => (
    <Chip
      component="span"
      label={match}
      className={classes.root}
      clickable={true}
      onClick={() => ingredientAdder(match)}
    />
  ));
}

function ButtonGroup() {
  return <Chip className="chipper" color="primary" size="small" />;
}
export { ButtonGroup };
