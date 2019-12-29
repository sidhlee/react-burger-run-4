import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NavigationItem /> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it(`should contain <NavigationItem link="/sign-out">Sign Out</NavigationItem> if authenticated`, () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(
        <NavigationItem link="/sign-out">Sign Out</NavigationItem>
      )
    ).toEqual(true);
  });

  it(`should contain <NavigationItem link="/orders">Orders</NavigationItem> if authenticated`, () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(
        <NavigationItem link="/orders">Orders</NavigationItem>
      )
    ).toEqual(true);
  });

  it(`should contain <NavigationItem link="/auth">Sign In</NavigationItem> if not authenticated`, () => {
    expect(
      wrapper.contains(
        <NavigationItem link="/auth">Sign In</NavigationItem>
      )
    ).toEqual(true);
  });
});
