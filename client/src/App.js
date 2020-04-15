import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchAppBar from './SearchAppBar';
import IngredientDB from './data/mock-db';
import SearchResults from './components/SearchResults';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
  });
  const [ results, setResults ] = useState(IngredientDB);

  const filterResults = (searchTerm) => {
    const filtered = IngredientDB.filter((result) => result.name.includes(searchTerm));
    setResults(filtered);
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
      <h1> {state.message} </h1>
      <SearchAppBar onClick={(searchTerm) => filterResults(searchTerm)} />
      <SearchResults results={results} />
      <AllRoutes />
      <button onClick={fetchData}>Fetch Data</button>
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
  return (
    <div>
      <li>its me your Ingredients Page!</li>
    </div>
  );
}
function About() {
  return (
    <div>
      <li> I'm just here for testing, not really an about</li>
    </div>
  );
}
