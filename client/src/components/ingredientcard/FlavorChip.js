import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'Red',
    borderRadius: '4px',
    marginRight: '4px',
    color: 'Black',
    fontFamily: 'Impact',
  },
}));
export default function FlavorMatches(props) {
  const classes = useStyles();
  const { matches, handler } = props;

  function clickHandler() {
    handler(true);
  }

  return matches.map((match) => <Chip label={match} className={classes.root} onClick={clickHandler} />);
}

function ButtonGroup(props) {
  return <div>HELLO</div>;
}
export { ButtonGroup };
