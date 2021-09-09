// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// COMPONENTS
import { Layout } from "./Layout/Layout";
import ProductListComponent from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";

// UTILS
import { history } from "../utils/history";

// STYLE
import "./App.css";

const App = () => (
  <div data-testid="app-component">
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/Products" component={ProductListComponent} />
          <Route exact path="/ProductDetails" component={ProductDetails} />
          <Redirect to="/Products" />
        </Switch>
      </Layout>
    </Router>
  </div>
);

export default App;
