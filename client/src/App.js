import React from 'react';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import './App.css';
import SearchAppBar from './SearchAppBar';
import theme from './Theme';
import { HistoryFunctions, useApplicationData } from './hooks/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FoodBar from './components/FoodBar';
import { Button } from '@material-ui/core';

export default function App() {
  const { state, snackHandler, resultWrapper } = useApplicationData();
  const { filterResults } = resultWrapper();
  function CheckSearch() {
    if (state.results.length === 1) {
      return (
        <FoodExpansionPanel
          weight={state.results[0].weight}
          matches={state.results[0].matches}
          description={state.results[0].description}
          name={state.results[0].name}
          onClick={snackHandler}
        />
      );
    }
    return [];
  }
  /*   function IngredientSearch(e) {
    handleClick.GoForward(e);
  } */

  function SnackCondition() {
    return !state.snackBarOpen ? [] : <FoodBar message={state.results[0].name} onClick={snackHandler} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchAppBar onClick={filterResults} />
      <CheckSearch />
      <SnackCondition />
    </ThemeProvider>
  );
}

function Ingredients() {
  const { handleClick, history } = HistoryFunctions();
  console.log(history);

  return (
    <div>
      Hi
      <Button onClick={handleClick.GoForward}> LOVE FUCKING COCKS OH BABY</Button>
    </div>
  );
}

export { Ingredients };
