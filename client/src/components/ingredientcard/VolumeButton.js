import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const VolumeCheck = (e) => e.volume.toLowerCase();
const useStyles = makeStyles({
  root: {
    fontSize: '9px',
    background: (props) =>
      VolumeCheck(props) === 'loud'
        ? 'rgb(255, 152, 0)'
        : VolumeCheck(props) === 'steady'
        ? 'rgb(255, 217, 91)'
        : VolumeCheck(props) === 'quiet'
        ? 'rgb(255, 233, 125)'
        : VolumeCheck(props) === 'moderate'
        ? 'rgb(255, 183, 77)'
        : 'rgb(255, 233, 125)',
    minWidth: '9vw',
    minHeight: '3.2vh',
    marginLeft: '20px',
    color: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      color: 'rgba(0, 0, 0, 0.9)',
    },
  },
});

export default function VolumeButton(props) {
  const { volume } = props;
  const classes = useStyles(props);
  return (
    <div>
      <Button disableRipple="true" className={classes.root}>
        {volume}
      </Button>
    </div>
  );
}
