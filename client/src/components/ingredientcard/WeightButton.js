import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.weight === 'heavy'
        ? 'Blue'
        : props.weight === 'medium'
        ? 'Orange'
        : props.weight === 'light'
        ? 'Red'
        : 'Purple',
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
