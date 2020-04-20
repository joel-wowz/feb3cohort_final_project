import React from 'react';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';

import './App.css';
import SearchAppBar from './SearchAppBar';
import theme from './Theme';
import useApplicationData from './hooks/useApplicationData';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import FoodBar from './components/FoodBar';

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
  const { state, snackClose, filterResults, snackOpen } = useApplicationData();

  function CheckSearch() {
    if (state.results.length === 1) {
      return (
        <FoodExpansionPanel
          weight={state.results[0].weight}
          matches={state.results[0].matches}
          description={state.results[0].description}
          name={state.results[0].name}
          onClick={snackOpen}
        />
      );
    }
    return [];
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchAppBar onClick={filterResults} />
      {/*       <SearchResults results={filterResults} />

      

 */} {/*   <AllRoutes />  */}
      {/*    <button onClick={fetchData}>Fetch Data</button> */}
      {<CheckSearch />}
      {!state.snackBarOpen ? [] : <FoodBar message={state.results[0].name} onClick={snackClose} />}
    </ThemeProvider>
  );
}

/* function Home() {
  return (
    <div>
      <li> WHATS UP IM HOME</li>
    </div>
  );
}
function Ingredients() {
  return <div>Hi</div>;
}
function About() {
  return (
    <div>
      <li> I'm just here for testing, not really an about</li>
    </div>
  );
} */
