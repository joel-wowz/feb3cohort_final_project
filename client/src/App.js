import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchAppBar from './SearchAppBar';
import IngredientDB from './data/mock-db';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import CssBaseline from '@material-ui/core/CssBaseline';

const AllRoutes = () => {
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

export default function App() {
  const [state, setState] = useState({
    message: 'whats up',
    results: [],
  });
  const [results, setResults] = useState(IngredientDB);
  const [value, setValue] = useLocalStorage('value', '');

  //when Filter results is ran, return the corresponding Info
  //Results does exist on the page, but is not rendering properly, when the term is searched for
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }
  function CheckSearch() {
    if (state.results.length >= 1) {
      return (
        <FoodExpansionPanel
          weight={state.results[0].weight}
          matches={state.results[0].matches}
          description={state.results[0].description}
          name={state.results[0].name}
        />
      );
    }
    return [];
  }
  const filterResults = (searchTerm) => {
    if (searchTerm.length === 0) {
      return [];
    }
    const filtered = IngredientDB.filter((result) =>
      result.name.includes(searchTerm)
    );
    setState({
      results: filtered,
    });
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
      <SearchAppBar onSubmit={(e) => setValue(e)} onClick={filterResults} />
      {/*       <SearchResults results={filterResults} />

 */}{' '}
      {/*   <AllRoutes />  */}
      {/*    <button onClick={fetchData}>Fetch Data</button> */}
      {results[0].length !== 0 ? <CheckSearch /> : 'this is false'}
    </ThemeProvider>
  );
}

function Home() {
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
}
