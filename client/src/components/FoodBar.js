import React, { Fragment } from 'react';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FoodUndo from './FoodUndo';

const useStyles = makeStyles({
  root: {
    paddingBottom: '50px',
  },
  '.MuiSnackbarContent-root': {
    backgroundColor: 'Blue',
  },
});

export default function FoodBar(props) {
  const classes = useStyles();
  const { message, onClick } = props;
  const MessageAdded = `Ingredients from ${message} have been removed`;

  //const classes = useStyles();
  return (
    <Fragment>
      <Snackbar
        className={classes.root}
        open={true}
        message={MessageAdded}
        action={<FoodUndo onClick={onClick} />}
      />
    </Fragment>
  );
}
