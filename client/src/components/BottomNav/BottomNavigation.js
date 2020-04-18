import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();

  return (
    <BottomNavigation icon={<HomeSharp />} showLabels className={classes.root}>
      <BottomNavigationAction label="Home" icon={<HomeSharp />} />
    </BottomNavigation>
  );
}
