import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, useField } from "formik";
import * as yup from "yup";
import "../App.css";

function LoginTextField(props) {
  const [field, meta] = useField(props);
  const { type } = props;
  return (
    <div>
      <input
        style={{ width: "10rem" }}
        type={type}
        {...field}
        {...props}
        autoComplete="off"
        className={`login-form form-control ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage name={field.name} component="p" className="signup-error" />
    </div>
  );
}

function LoginForm(props) {
  const history = useHistory();

  const schema = yup.object({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        props.login(values);
        history.push("/plantlist");
      }}
      validationSchema={schema}
    >
      {(formik) => (
        <Form className="login-form">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <LoginTextField
            label="username"
            type="text"
            name="username"
            className="login-user-input login-input"
            placeholder="Username"
          />
          <LoginTextField
            label="password"
            type="password"
            name="password"
            className="login-pass-input login-input"
            placeholder="Password"
          />
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
