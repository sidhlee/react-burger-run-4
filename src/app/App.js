import React, { Component } from "react";
import LayoutContainer from "../features/layout/LayoutContainer";
import BurgerBuilderContainer from "../features/burgerBuilder/BurgerBuilderContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import CheckoutContainer from "../features/checkout/CheckoutContainer";
import OrdersContainer from "../features/orders/OrdersContainer";
import AuthContainer from "../features/auth/AuthContainer";
import SignOutContainer from "../features/auth/SignOutContainer";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }
  render() {
    const routes = this.props.isAuthenticated ? (
      <Switch>
        {/* rendering with children element is recommended
          over using component or render prop */}
        {/* <Route /> passes the routing props to children if (and only if) children is a function. */}
        <Route path="/" exact component={BurgerBuilderContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        <Route path="/orders" component={OrdersContainer} />
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
        <Route path="/auth" component={AuthContainer} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route path="/" exact component={BurgerBuilderContainer} />
        <Route path="/auth" component={AuthContainer} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <LayoutContainer>{routes}</LayoutContainer>
      </div>
    );
  }
}

export default App;
