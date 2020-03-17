import React from "react";
import ScreenContainer from "./ScreenContainer";
import { shallow } from "enzyme";

describe("Screen Container", () => {
  const child = <div />;
  const wrapper = shallow(<ScreenContainer>{child}</ScreenContainer>);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
