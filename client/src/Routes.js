import React, { Fragment } from 'react';
import App from './App';

import Ingredients from './App';
import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import useApplicationData from './hooks/useApplicationData';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
function CheckSearch() {
  const { state, snackHandler } = useApplicationData();
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
/* const IngredientSearch = () => {
  return (
    <Fragment>
      <Ingredients>
        <CheckSearch />
      </Ingredients>
    </Fragment>
  );
}; */
export default function AllRoutes() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          {/*       <Route path="" /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}
