import React, { Fragment } from 'react';
import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FoodUndo from './FoodUndo';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'Green',
    paddingRight: '200px',
  },
  '.MuiSnackbarContent-root': {
    backgroundColor: 'Blue',
  },
});

export default function FoodBar(props) {
  const classes = useStyles();
  const { message, onClick } = props;
  const MessageAdded = `${message} has been added`;

  //const classes = useStyles();
  return (
    <Fragment>
      <Snackbar
        className={{ root: classes.root }}
        open={true}
        message={MessageAdded}
        action={<FoodUndo onClick={onClick} />}
      />
    </Fragment>
  );
}
