import React from "react";
import Button from "@mui/material/Button";

const btnStyle = {
  height: "3em",
  border: "0px",
  marginRight: "1em",
  backgroundColor: "rgb(0, 123, 135)",
  marginLeft: "1em",
  padding: "0.7em",
  borderRadius: "4px",
  cursor: "pointer",
  color: "rgb(255, 255, 255)",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center"
};

const ButtonCompass = (props) => {
  return <Button style={btnStyle}>{props.text}</Button>;
};
