import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(255, 138, 80)',
    width: '100%',
    position: 'fixed',
    bottom: '0',
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();

  return (
    <BottomNavigation icon={<HomeSharp />} showLabels className={classes.root}>
      <BottomNavigationAction id="homebtn" label="Home" icon={<HomeSharp />} />
    </BottomNavigation>
  );
}
