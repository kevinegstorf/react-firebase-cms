import React from "react";
import Button from "@material-ui/core/Button";

const button = props => (
  <Button
    variant="contained" 
    disabled={props.disabled}
    onClick={props.clicked}
  >
    {props.children}
  </Button>
);

export default button;
