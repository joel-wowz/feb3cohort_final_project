import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchAppBar from './SearchAppBar';
import IngredientDB from './data/mock-db';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';

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
  const [ state, setState ] = useState({
    message: 'whats up',
    results: [],
  });
  const [ results, setResults ] = useState(IngredientDB);
  console.log(`results ${results}`);
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
    <div className="App">
      <SearchAppBar onClick={(searchTerm) => filterResults(searchTerm)} />
      {/*       <SearchResults results={filterResults} />

 */} {/*   <AllRoutes />  */}
      {/*    <button onClick={fetchData}>Fetch Data</button> */}
      {results[0].length !== 0 ? <CheckSearch /> : 'this is false'}
    </div>
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
