import React from 'react';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import './App.css';
import SearchAppBar from './SearchAppBar';
import theme from './Theme';
import { useApplicationData } from './hooks/index';
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
  const { state, snackHandler, resultWrapper, ButtonOn, addItem } = useApplicationData();
  const { filterResults } = resultWrapper();
  function CheckSearch() {
    if (state.results.length > 0) {
      return (
        <FoodExpansionPanel
          filterResults={filterResults}
          state={state}
          weight={state.results[0].weight}
          handler={ButtonOn}
          matches={state.results[0].primary_matches}
          description={state.results[0].description}
          name={state.results[0].name}
          onClick={snackHandler}
          addItem={addItem}
          secondaryMatches={state.results[0].matches}
          techniques={state.results[0].techniques}
          volume={state.results[0].volume}
        />
      );
    }
    return null;
  }

  function SnackCondition() {
    return !state.snackBarOpen ? null : <FoodBar message={state.results[0].name} onClick={snackHandler} />;
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
