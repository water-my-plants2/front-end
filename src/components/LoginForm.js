import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, useField } from "formik";
//import TextField from "./TextField";
import * as yup from "yup";
import "../App.css";

function LoginTextField(props) 
{
  const [field, meta] = useField(props);

  const { label, name, type } = props;

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

function LoginForm() 
{
  const history = useHistory();
  const [hasLabel, setHasLabel] = useState(false);

  const schema = yup.object({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues=
      {{
        username: "",
        password: "",
      }}

      onSubmit={(values) => 
      {
        console.log(values);
        history.push("/plantlist");
      }}

      validationSchema={schema}
    >
      {(formik) => (
        
        <Form className="login-form">
          <button type="submit" className="btn-dark login-btn">
            Log In
          </button>

          <LoginTextField
            label="username"
            type="text"
            name="username"
            className="login-user-input login-input"
            hasLabel={hasLabel}
            placeholder="Username"
          />

          <LoginTextField
            label="password"
            type="password"
            name="password"
            className="login-pass-input login-input"
            hasLabel={hasLabel}
            placeholder="Password"
          />
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
