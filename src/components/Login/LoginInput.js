import React from "react";
import classes from "./Login.module.css";

const LoginInput = ({ input, meta, placeholder, type }) => {
  return (
    <div style={{ display: type === "checkbox" ? "inline-block" : "block" }}>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={meta.error && meta.touched ? classes.required : undefined}
      />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export default LoginInput;
