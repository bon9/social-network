import React from "react";
import classes from "./Login.module.css";

const LoginInput = ({ input, meta, placeholder }) => {
  return (
    <div>
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        className={meta.error && meta.touched ? classes.required : undefined}
      />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

export default LoginInput;
