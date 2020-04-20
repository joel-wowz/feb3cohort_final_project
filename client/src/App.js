import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchAppBar from './SearchAppBar';
import IngredientDB from './data/mock-db';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; */
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import CssBaseline from '@material-ui/core/CssBaseline';
import FoodBar from './components/FoodBar';
import store from 'store';

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
}; */

export default function App() {
  const [ state, setState ] = useState({
    value: [],
    results: [],
    snackBarOpen: false,
  });

  //when Filter results is ran, return the corresponding Info
  //Results does exist on the page, but is not rendering properly, when the term is searched for
  function snackOpen() {
    setState({
      results: [ ...state.results ],
      snackBarOpen: true,
    });
  }
  function snackClose() {
    setState({
      results: [ ...state.results ],
      snackBarOpen: false,
    });
  }
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
  const filterResults = (searchTerm) => {
    if (searchTerm.length === 0) {
      return [];
    }
    const filtered = IngredientDB.filter((result) => result.name.includes(searchTerm));
    setState({
      value: [ ...state.value, filtered ],
      results: [ ...filtered ],
    });
    store.set('LocalAppStorage', { searchTerm, ...state.value });
  };

  const fetchData = () => {
    axios
      .get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setState({
          message: response.data.message,
        });
      });
  };

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
