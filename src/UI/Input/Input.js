import React from "react";
import classes from "./Input.module.css";
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes.input}
    />
  );
};

export default Input;
