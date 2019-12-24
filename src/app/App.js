import React from "react";
import Layout from "../features/layout/Layout";
import BurgerBuilderContainer from "../features/burgerBuilder/BurgerBuilderContainer";
import { Route, Switch } from "react-router-dom";
import Checkout from "../features/checkout/Checkout";
import Orders from "../features/orders/Orders";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          {/* rendering with children element is recommended
        over using component or render prop */}
          {/* <Route /> passes the routing props to children if (and only if) children is a function. */}
          <Route path="/" exact component={BurgerBuilderContainer} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
