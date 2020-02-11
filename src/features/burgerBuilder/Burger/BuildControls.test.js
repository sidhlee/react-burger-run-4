import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "./BuildControls";
import OrderButton from "./OrderButton";

configure({ adapter: new Adapter() });

describe("<BuildControls />", () => {
  let wrapper;
  const ingredients = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    beef: 1
  };
  beforeEach(() => {
    wrapper = shallow(
      <BuildControls ingredients={ingredients} totalPrice={9.9999} />
    );
  });

  // TODO: Learn testing nested components
//   it("should contain <OrderButton>Order Now</OrderButton> if authenticated", () => {
//     wrapper.setProps({ isAuthenticated: true });
//     expect(wrapper.find(OrderButton).children()).toEqual("Order Now");
//   });
// });
