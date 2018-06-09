import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./Button";

// const props = { variant="contained", disabled= 'disabled', onClick='clicked' };
configure({ adapter: new Adapter() });

describe("<Button>", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  // TODO test props
});
