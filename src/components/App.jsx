// DEPENDENCIES
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PropTypes from 'prop-types';

// REDUX
import { Provider } from "react-redux";

// COMPONENTS
import Layout from "./Layout/Layout";
import ProductListComponent from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";

// STYLE
import "./App.css";

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/Products" component={ProductListComponent} />
            <Route exact path="/ProductDetails" component={ProductDetails} />
            <Redirect to="/Products" />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.any,
};

export default App;
