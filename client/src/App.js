import React, { Fragment } from 'react';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import './App.css';
import SearchAppBar from './SearchAppBar';
import theme from './Theme';
import { HistoryFunctions, useApplicationData } from './hooks/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FoodBar from './components/FoodBar';
import BottomNavigation from '../src/components/BottomNav/BottomNavigation';

/* const AllRoutes = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="Ingredients">Ingredients</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Ingredients">
          <Ingredients />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
 */

export default function App() {
  const { state, snackHandler, resultWrapper } = useApplicationData();
  const { filterResults } = resultWrapper();
  function CheckSearch() {
    if (state.results.length === 1) {
      return (
        <FoodExpansionPanel
          weight={state.results[0].weight}
          matches={state.results[0].matches}
          dislikes={state.results[0].dislikes}
          description={state.results[0].description}
          name={state.results[0].name}
          onClick={snackHandler}
        />
      );
    }
    return [];
  }

  function SnackCondition() {
    return !state.snackBarOpen ? [] : <FoodBar message={state.results[0].name} onClick={snackHandler} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchAppBar onClick={filterResults} />
      <CheckSearch />
      <SnackCondition />
      <BottomNavigation />
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
