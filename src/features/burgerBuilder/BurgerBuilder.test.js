import React from "react";
// BurgerBuilder's default export is wrapped inside withErrorHandler
import { BurgerBuilder } from "./BurgerBuilder";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BuildControls from "./Burger/BuildControls";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BurgerBuilder initIngredients={() => Promise.resolve()} />
    );
  });

  it("should render <BuildControls /> when receiving ingredients", () => {
    wrapper.setProps({
      fetchError: false,
      ingredients: { salad: 0 }
    });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
