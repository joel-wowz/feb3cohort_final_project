import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

export default function FoodUndo(props) {
  const { onClick } = props;

  return (
    <Fragment>
      <Button onClick={() => onClick(false)} color="inherit" size="small">
        Undo
      </Button>
    </Fragment>
  );
}
