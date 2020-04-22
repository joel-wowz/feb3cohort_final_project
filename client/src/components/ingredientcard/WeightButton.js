import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const lowCheck = (e) => e.weight.toLowerCase();
const useStyles = makeStyles({
  root: {
    background: (props) =>
      lowCheck(props) === 'heavy'
        ? 'rgb(255, 152, 0)'
        : lowCheck(props) === 'medium'
          ? 'rgb(255, 217, 91)'
          : lowCheck(props) === 'light'
            ? 'rgb(255, 233, 125)'
            : lowCheck(props) === 'moderate' ? 'rgb(255, 183, 77)' : 'Green',
    minWidth: '9vw',
    minHeight: '3.2vh',
    marginLeft: '20px',
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
