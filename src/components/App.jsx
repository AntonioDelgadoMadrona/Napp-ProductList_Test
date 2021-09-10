// DEPENDENCIES
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// REDUX
import { Provider } from "react-redux";

// COMPONENTS
import Layout from "./Layout/Layout";
import ProductListComponent from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";

// STYLE
import "./App.css";

export const routes = [
  { path: "/Products", name: "Products", Component: ProductListComponent },
  {
    path: "/ProductDetails",
    name: "Product Details",
    Component: ProductDetails,
  },
];

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                exact
                path={route.path}
                component={route.Component}
              />
            ))}
            <Redirect to="/Products" />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
