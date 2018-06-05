import React from "react";
import Input from "@material-ui/core/Input";

const InputField = props => (
  <div>
    <Input
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
    />
  </div>
);

export default InputField;
