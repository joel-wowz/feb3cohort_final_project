import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import FlavorChip from '../ingredientcard/FlavorChip';
import Chip from '@material-ui/core/Chip';
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
  //these are secondary matches colors
  BadgeColor: {
    backgroundColor: 'rgb(255, 173, 66)',
    borderRadius: '4px',
    marginRight: '4px',
    color: 'Black',
    fontFamily: 'Impact',
  },
}));
export default function FlavorTableItem(props) {
  const {
    flavorDescription,
    matches,
    dislikes,
    handler,
    addItem,
    ingredientAdder,
    secondaryMatches,
    techniques,
  } = props;
  const classes = useStyles();

  function SecondaryMatches() {
    return secondaryMatches.map((e) => <Chip className={classes.BadgeColor} label={e} />);
  }

  return (
    <React.Fragment>
      <List component="label" className={classes.root}>
        <ListItem disableGutters={true}>
          <ListItemText component="span" secondary={flavorDescription} />
          <ListItem component="span" tertiary={techniques} />
        </ListItem>
        <FlavorChip
          matches={matches}
          secondaryMatches={secondaryMatches}
          dislikes={dislikes}
          handler={handler}
          addItem={addItem}
          ingredientAdder={ingredientAdder}
          onClick={(e) => e}
        />
        <SecondaryMatches />
      </List>
    </React.Fragment>
  );
}
