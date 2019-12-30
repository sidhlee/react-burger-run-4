import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Burger from "./Burger";
import Ingredient from "./Ingredient";

configure({ adapter: new Adapter() });

describe("<Burger />", () => {
  let wrapper;
  const ingredients = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    beef: 1
  };
  beforeEach(() => {
    wrapper = shallow(<Burger ingredients={ingredients} />);
  });

  it("should render expected number of <Ingredient /> with passed ingredients prop", () => {
    expect(wrapper.find(Ingredient)).toHaveLength(8);
  });
});
