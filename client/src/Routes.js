import React, { Fragment } from 'react';
import App from './App';
import Ingredients from './App';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const IngredientSearch = () => {
  const { id } = useParams();
  return <Fragment>{id}</Fragment>;
};
export default function AllRoutes() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={Ingredients} />
        </Switch>
      </Router>
    </Fragment>
  );
}
