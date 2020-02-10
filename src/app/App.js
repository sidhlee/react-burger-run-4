import React, { useEffect } from "react";
import LayoutContainer from "../features/layout/LayoutContainer";
import BurgerBuilderContainer from "../features/burgerBuilder/BurgerBuilderContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import SignOutContainer from "../features/auth/SignOutContainer";
import asyncComponent from "../common/hoc/asyncComponent";

const asyncAuth = asyncComponent(() =>
  import("../features/auth/AuthContainer")
);
const asyncCheckout = asyncComponent(() =>
  import("../features/checkout/CheckoutContainer")
);
const asyncOrders = asyncComponent(() =>
  import("../features/orders/OrdersContainer")
);

const App = ({ checkAuthStatus, isAuthenticated }) => {
  useEffect(() => {
    checkAuthStatus();
  }); // no need to pass an empty array here
  //

  const routes = isAuthenticated ? (
    <Switch>
      {/* rendering with children element is recommended
          over using component or render prop */}
      {/* <Route /> passes the routing props to children if (and only if) children is a function. */}
      <Route path="/" exact component={BurgerBuilderContainer} />
      <Route path="/checkout" component={asyncCheckout} />
      <Route path="/orders" component={asyncOrders} />
      <Route path="/sign-out" component={SignOutContainer} />
      {/* 
        Here, auth route cannot be manually accessed because 
        App will re-mount when Auth page is loaded manually and run auto-auth
        and if authenticated, Auth page will redirect to redirect path,
        which is set to "/" unless visited from clicking Order button.
        We need to include auth page here in order to redirect user 
        to the checkout page after being authenticated. (If there's no
        Auth page after being authenticated, there's no redirect)
        */}
      <Route path="/auth" component={asyncAuth} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact component={BurgerBuilderContainer} />
      <Route path="/auth" component={asyncAuth} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <LayoutContainer>{routes}</LayoutContainer>
    </div>
  );
};

export default App;
