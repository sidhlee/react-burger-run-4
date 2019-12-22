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
        {/* <Route /> passes the routing props to children if (and only if) children is a function. */}
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
