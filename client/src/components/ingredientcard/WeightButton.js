import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    background: (props) => (props.weight === 'Medium' ? 'Green' : 'Blue'),
    minWidth: '10%',
    minHeight: '10vh',
  },
});

export default function WeightButton(props) {
  const { weight, ...rest } = props;
  const classes = useStyles(props);
  return (
    <div>
      <Button className={classes.root} {...rest}>
        {' '}
      </Button>
    </div>
  );
}
