import React, { Fragment } from 'react';
import App from './App';

/* import FoodExpansionPanel from './components/ingredientcard/FoodExpansionPanel';
import useApplicationData from './hooks/useApplicationData' */ import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
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
