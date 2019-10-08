import React from "react";
import { Form, Field } from "react-final-form";

const required = value => (value ? undefined : "Required");

const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ rememberMe: false }}
      render={({ handleSubmit, form, values, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                type="text"
                placeholder="Login"
                name="login"
                component="input"
                validate={required}
              />
            </div>
            <div>
              <Field
                type="text"
                placeholder="Password"
                name="password"
                component="input"
              />
            </div>
            <div>
              <Field
                type="checkbox"
                name="rememberMe"
                placeholder="Login"
                component={"input"}
              />
              Remember me
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
              <button
                type="button"
                disabled={submitting || pristine}
                onClick={form.reset}
              >
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

export default Login;
