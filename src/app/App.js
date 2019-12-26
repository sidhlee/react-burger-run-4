import React from "react";
import Layout from "../features/layout/Layout";
import BurgerBuilderContainer from "../features/burgerBuilder/BurgerBuilderContainer";
import { Route, Switch } from "react-router-dom";
import CheckoutContainer from "../features/checkout/CheckoutContainer";
import OrdersContainer from "../features/orders/OrdersContainer";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          {/* rendering with children element is recommended
        over using component or render prop */}
          {/* <Route /> passes the routing props to children if (and only if) children is a function. */}
          <Route path="/" exact component={BurgerBuilderContainer} />
          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/orders" component={OrdersContainer} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
