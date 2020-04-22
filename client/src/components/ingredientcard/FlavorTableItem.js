import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import FlavorChip from '../ingredientcard/FlavorChip';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  badges: {
    color: 'Green',
  },
}));
export default function FlavorTableItem(props) {
  const { flavorDescription, matches, dislikes, handler } = props;

  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem disableGutters={true}>
        <ListItemText secondary={flavorDescription} />
      </ListItem>
      <FlavorChip matches={matches} dislikes={dislikes} handler={handler} />
      <ListItem />
    </List>
  );
}
