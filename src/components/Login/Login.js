import React from "react";
import classes from "./Login.module.css";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { minLength } from "./../../utils/validators";
import LoginInput from "./LoginInput";
import { loginThunk, logoutThunk } from "./../../redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = ({ loginThunk, isAuth }) => {
  const onSubmit = values => {
    const { login, password, rememberMe } = values;
    loginThunk(login, password, rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
// PbRw9jAcfS9adsa
const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ rememberMe: false }}
      render={({ handleSubmit, form, values, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <div>
              <Field name="login" validate={minLength(1)}>
                {({ input, meta }) => (
                  <LoginInput input={input} meta={meta} placeholder="Login" />
                )}
              </Field>
            </div>
            <div>
              <Field name="password" validate={minLength(1)}>
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

const mstp = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(
  mstp,
  { loginThunk, logoutThunk }
)(Login);
