import React from "react";
import classes from "./Button.module.css";
const Button = (props, { type }) => {
  return (
    <button type={type} className={classes.button}>
      {props.children}
    </button>
  );
};

export default Button;
