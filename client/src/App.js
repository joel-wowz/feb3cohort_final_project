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
const useStateWithLocalStorage = (localStorageKey) => {
  const [ value, setValue ] = React.useState(localStorage.getItem(localStorageKey) || '');
  React.useEffect(
    () => {
      localStorage.setItem(localStorageKey, value);
    },
    [ value ],
  );
  return [ value, setValue ];
};

export default function App() {
  const [ value, setValue ] = useStateWithLocalStorage('myValueInLocalStorage');
  const onChange = (event) => setValue(event.target.results);
  const [ state, setState ] = useState({
    message: 'whats up',
    results: [],
  });
  const [ results, setResults ] = useState(IngredientDB);

  //when Filter results is ran, return the corresponding Info
  //Results does exist on the page, but is not rendering properly, when the term is searched for
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
    const filtered = IngredientDB.filter((result) => result.name.includes(searchTerm));
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
      <SearchAppBar onSubmit={onChange} onClick={filterResults} />
      {/*       <SearchResults results={filterResults} />

 */} {/*   <AllRoutes />  */}
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
