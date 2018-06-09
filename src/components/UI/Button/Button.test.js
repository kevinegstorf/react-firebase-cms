import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

configure({ adapter: new Adapter() });
const wrapper = shallow(<Button />);

wrapper.setProps({
  variant: "contained",
  disabled: "disabled"
});

describe("<Button>", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("should be rendered with the correct props", () => {
    // console.log(wrapper.debug());
    // console.log(wrapper.props().variant);
    expect(wrapper.props().variant).toBeDefined();
    expect(wrapper.props().disabled).toBeDefined();

    expect(wrapper.prop("variant")).toEqual("contained");
    expect(wrapper.prop("disabled")).toEqual("disabled");
  });
  // todo test click event
});
