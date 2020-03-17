import React from "react";
import AccountScreen from "./AccountScreen";
import { shallow } from "enzyme";

describe("Account Screen", () => {
  const wrapper = shallow(<AccountScreen userInfo={{}} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
