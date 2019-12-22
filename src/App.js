import React from "react";
import Layout from "./hoc/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import { Route } from "react-router-dom";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <div>
      <Layout>
        {/* rendering with children element is recommended
        over using component or render prop */}
        <Route path="/" exact>
          <BurgerBuilder />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
