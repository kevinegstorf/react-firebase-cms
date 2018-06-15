import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

configure({ adapter: new Adapter() });
const clicked = sinon.spy();

const wrapper = shallow(<Button onClick={clicked} />);

wrapper.setProps({
  variant: "contained",
  disabled: "disabled"
});

describe("<Button>", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("should be rendered with the correct props", () => {
    expect(wrapper.props().variant).toBeDefined();
    expect(wrapper.props().disabled).toBeDefined();

    expect(wrapper.prop("variant")).toEqual("contained");
    expect(wrapper.prop("disabled")).toEqual("disabled");
  });

  it("should call click", () => {
    const onButtonClick = jest.fn();

    const wrapper = shallow(<wrapper onClick={onButtonClick} />);
    wrapper.find("wrapper").simulate("click");
    expect(onButtonClick.mock.calls.length).toBe(1);
  });
});
