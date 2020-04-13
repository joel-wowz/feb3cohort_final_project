import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    background: props.color,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function ButtonStyle() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.root}> Hello</Button>
    </div>
  );
}

export default function Search() {
  return (
    <div>
      <ButtonStyle />
    </div>
  );
}
