import React from "react";
import { TransferScreen } from "./TransferScreen";
import { shallow } from "enzyme";

describe("Screen Container", () => {
  const requiredProps = {
    userInfo: {},
    updateUserData: () => {}
  };
  const wrapper = shallow(<TransferScreen {...requiredProps} />);

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
