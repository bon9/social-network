import React from "react";
import classes from "./Login.module.css";
import { Form, Field } from "react-final-form";
import { minLength } from "./../../utils/validators";
import LoginInput from "./LoginInput";

const Login = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ rememberMe: false }}
      render={({ handleSubmit, form, values, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div>
              <Field name="login" validate={minLength(5)}>
                {({ input, meta }) => (
                  <LoginInput input={input} meta={meta} placeholder="Login" />
                )}
              </Field>
            </div>
            <div>
              <Field name="password" validate={minLength(10)}>
                {({ input, meta }) => (
                  <LoginInput
                    input={input}
                    meta={meta}
                    placeholder="Password"
                  />
                )}
              </Field>
            </div>
            <div>
              <Field type="checkbox" name="rememberMe" component={"input"} />
              Remember me
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
              <button type="button" onClick={form.reset}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        );
      }}
    />
  );
};

export default Login;
